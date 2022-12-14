import React, { useState, useEffect } from 'react';
import '../css/totalUsers-style.css'

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
            <div className='tu-div-1'>
                    <div className='tu-title' >
                        <h5 >Total Usuarios {Users.length}</h5>
                    </div>
                    <ul>
                <div className='tu-allusers'>
                        {Users.length === 0 && <p>Cargando...</p>}
                    {
                        Users.map((user, i) => {
                            return (
                                <div className='tu-users' key={i}>
                                   
                                    <div className='tu-nye'>
                                        <h6>Nombre: {user.first_name} {user.last_name}</h6>										
                                    <div className='tu-div-img'>
                                        <img src={`http://localhost:3030/images/avatars/${user.image}`} alt="usuarios" width='20%'/>
                                    </div>
                                        <br></br>
                                        <br></br>
                                        <h6>Email: {user.email}</h6>
                                    </div>
                                </div>
                                
                
                            )			
                        })
                        
                    }	
                    </div>				
                    </ul>		               
                </div>
        )
    }
    
    export default TotalUsers;