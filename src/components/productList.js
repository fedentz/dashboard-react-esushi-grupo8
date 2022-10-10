import React, { useState, useEffect } from 'react';

function SearchProducts(){
    const [Products, SetProducts]  = useState([]);
    
    useEffect(() => {
         console.log("se monto el componente")
         fetch(`http://localhost:3030/api/product/`)
            .then(response => response.json())
            .then(data => {
                console.log("data de productos")
                console.log(data)
                SetProducts(data.products)})
            .catch(error => console.error(error));
    }, [])
    
    return(
            <div>		
                <br/>
                    <h4>Total de productos {Products.length} </h4>
                    <hr/>
                    <br/>
                    <ul>
                        {Products.length === 0 && <p>Cargando...</p>}
                        {
                            Products.map((Products, i) => {
                                return (
                                    <li key={i}>
                                        <h5>{Products.name}</h5>			
                                        <h6>{Products.description}</h6>
                                        <img  src={Products.front} alt="Portada"/>
                                            
                                        <br/>
                                    </li>
                                )			
                            })
                        }					
                    </ul>		
            </div>
        )
    }
    
    export default SearchProducts;