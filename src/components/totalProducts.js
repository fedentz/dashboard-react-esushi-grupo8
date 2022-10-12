import React, { useState, useEffect } from 'react';
import '../css/totalProducts-style.css'

function TotalProducts() {
    const [Producto, SetProducts] = useState([]);
  
    useEffect(() => {
      console.log("se monto el componente para productos")
      fetch(`http://localhost:3030/api/product`)
        .then(response => response.json())
        .then(data => {
          console.log("data de productos")
          console.log(data)
          SetProducts(data.products)
        })
        .catch(error => console.error(error));
    }, [])
  
    return (
    
          <div className='tp-div-1'>
            <h5>Total de Productos: {Producto.length}</h5>
          </div>

    )
  }
  
  export default TotalProducts;