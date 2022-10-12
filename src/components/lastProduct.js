import React, { useState, useEffect } from 'react';
import '../css/lastProduct-style.css';

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
                <div className='lp-div-1'>
                    <h5 className='lp-h5'>Ultimo producto creado en BD:</h5>
                    <div className='lp-div-img-'>
                        <img className='lp-img' src={`http://localhost:3030/images/uploads/${LastProduct.image}`} alt="img-LastProduct" width='30%'/>
                    </div>
                    <div className='lp-div-text'>
                        <div className='lp-div-title'>
                            <h4 className='lp-title'>Titulo: {LastProduct.name}</h4>
                        </div>
                        <p className='lp-price'>Precio: $ {LastProduct.price}</p>
                        <p className='lp-description'>{LastProduct.description}</p>
                    </div>
                </div>         
    )
}

/* 
<div class="full-product">
                    <div class="div-image-product">
                        <img class="image-product" src="/images/uploads/<%= product.image %>">
                    </div>
                    <div class="texto-product-desc">
                        <h2>
                            <%= product.name %>
                        </h2>
                        <h4>Precio:</h4>
                        <p>$<%= product.price %>
                        </p>
                        <h4>
                            <%= product.description %>
                        </h4>
                    </div>
                </div>
 */
export default LastProduct;