import React, { useState, useEffect } from 'react';
import '../css/totalProductsXCategory-style.css'


function TotalCategorias() {
  const [Category, SetCategories] = useState([]);

  useEffect(() => {
    console.log("se monto el componente para categorias")
    fetch(`http://localhost:3030/api/product`)
      .then(response => response.json())
      .then(data => {
        console.log("data de categorias")
        console.log(data)
        SetCategories(data.countByCategory)
      })
      .catch(error => console.error(error));
  }, [])

  return (
    <div className='tpxc-div-1'>
        {Category.length === 0 && <p>Cargando...</p>}
        {Category.map((Category, i) => {
          return (
                  <div >
                    <h5 key={i}>{Category.category} - {Category.countByProducts}	</h5>

                  </div>
          )
        })
        }
    </div>
  )
}

export default TotalCategorias;