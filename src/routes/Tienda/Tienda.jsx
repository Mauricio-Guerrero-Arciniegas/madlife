import React from 'react';

import Navbar from "../../components/navbar/Navbar";
import './Tienda.css'

export default function Tienda() {
  return (
    <div>
        <Navbar/>
        <div className='tienda_container'>
          <img className='tienda_img' src="./assets/imagenes/gorra.jpg" alt="" />
          <img className='tienda_img' src="./assets/imagenes/gorra2.jpg" alt="" />
          <img className='tienda_img' src="./assets/imagenes/shirt.jpg" alt="" />
        </div>
        
    </div>
  )
}
