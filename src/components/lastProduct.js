import React, { useState, useEffect } from 'react';

function LastProduct(){

    const [LastProduct, SetlastProduct]  = useState([]);
	
    useEffect(() => {
         console.log("se monto el componente para el ultimo producto")
         fetch(`http://localhost:3030/api/product/`)
          .then(response => response.json())
          .then(data => {
            console.log("data del ultimo producto")
            console.log(data)
            SetlastProduct(data.products.pop())})
          .catch(error => console.error(error));
      }, [])

return(
        <div>
            <div>
                <div>
                    <h5>Ultimo producto creado en BD:</h5>
                    <hr/>
                    <h4>Titulo: {LastProduct.name}</h4>
                    <p>Precio: $ {LastProduct.price}</p>
                    <img src={LastProduct.image} alt="img-LastProduct"/>
                    <p>{LastProduct.description}</p>
                
                  
                </div>         
            
            </div>
        </div>
    )
}

export default LastProduct;