import React, { useState, useEffect } from 'react';


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
    <div>
      <div >
        <div>
          <h5>Total de Categorias {Category.length}</h5>
        </div>
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
    </div>
  )
}

export default TotalCategorias;