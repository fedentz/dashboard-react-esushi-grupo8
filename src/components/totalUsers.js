import React, { useState, useEffect } from 'react';

function TotalUsers(){
    const [Users, SetUsers]  = useState([]);
        
    useEffect(() => {
         console.log("se monto el componente")
         fetch(` http://localhost:3030/api/user`)
            .then(response => response.json())
            .then(data => {
                console.log("data de usuarios")
                console.log(data)
                SetUsers(data.users)})
            .catch(error => console.error(error));
    }, [])
    
    return(
            <div>
                <div >
                    <div >
                        <h5 >Total Usuarios {Users.length}</h5>
                    </div>
                    <ul>
                    {Users.length === 0 && <p>Cargando...</p>}
                    {
                        Users.map((user, i) => {
                            return (
                                <li key={i}>
                                    <h6>Nombre: {user.first_name} {user.last_name}</h6>										
                                    <h6>Email: {user.email}</h6>
                                    <br/>
                                    <img  src={user.image} alt="Usuarios"/>
                                </li>
                            )			
                        })
                    }					
                    </ul>		               
                </div>
            </div>
        )
    }
    
    export default TotalUsers;