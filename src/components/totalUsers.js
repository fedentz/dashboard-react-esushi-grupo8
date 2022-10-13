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
                    <div >
                        <h5 >Total Usuarios {Users.length}</h5>
                    </div>
                    <ul>
                    {Users.length === 0 && <p>Cargando...</p>}
                    {
                        Users.map((user, i) => {
                            return (
                                <div key={i}>
                                    <div className='tu-nye'>
                                        <h6>Nombre: {user.first_name} {user.last_name}</h6>										
                                        <h6>Email: {user.email}</h6>
                                    </div>
                                    <div className='tu-div-img'>
                                        <img src={`http://localhost:3030/images/avatars/${user.image}`} alt="usuarios" width='20%'/>
                                    </div>
                                </div>
                            )			
                        })
                    }					
                    </ul>		               
                </div>
        )
    }
    
/*
<article class="producto">
                    <img src="/img/img-tv-samsung-smart.jpg" alt="TV Samsung" width="100%">
                    <article class="detalleprod">
                        <i class="camion fas fa-shipping-fast"></i>
                        <div  class="pyd">
                            <p class="precio">$23.200</p>
                            <p class="descuento">5 % Off</p>
                        </div>  
                        <p class="descripcion">SmartTv Samsung 43"</p>
                    </article>  
                </article> 
 */

    export default TotalUsers;