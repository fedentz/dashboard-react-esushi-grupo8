import React, { useState, useEffect } from 'react';
import '../css/productList-style.css'

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
        <div className='pl-Full'>		
                    
        <h1 className='pl-title'>Listado de productos:</h1>
    
                       <div className='pl-div-products-list'>
                         {
                             Products.map((Products, i) => {
                                 return (
                                     <div className='pl-div-products-dt' key={i}>
                                         <h5>id: {Products.id}</h5>			
                                         <h5>{Products.name}</h5>
                                         <h6>Precio: {Products.price}</h6>
                                         <h6>Descripcion: {Products.description}</h6>
                                     </div>
                                 )			
                             })
                         }	
                       </div>				
                    		
            </div>
        )
    }
    
    export default SearchProducts;