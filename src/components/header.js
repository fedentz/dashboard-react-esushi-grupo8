import React, { useState, useEffect } from 'react';
import '../css/header-style.css'

function header() {

    return (
    
          <div className='header-div-1'>
            <img src={`http://localhost:3030/images/logo-e-sushi.png`} alt="img-product" width='10%'/>
            <div className='h-div-h1'>
                <h1>Dashborard e-sushi</h1>
            </div>
          </div>

    )
  }
  
  export default header;