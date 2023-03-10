import React from 'react';
import { useState } from 'react';
import Header from "../../components/Header/Header"
import ProductList from '../../components/ProductList/ProductList';

import Navbar from "../../components/navbar/Navbar";
import './Tienda.css'

export default function Tienda() {

  const [allProducts, setAllProducts] = useState([]);
  const [total, setTotal] = useState(0);
  const [countProducts, setCountProducts] = useState(0);

  return (
    <div>
        <Navbar/>
        <img className='description' src="../assets/imagenes/web-06.jpg" alt="" />
        <Header
         allProducts={allProducts}
         setAllProducts={setAllProducts}
         total={total}
         setTotal={setTotal }
         countProducts={countProducts}
         setCountProducts={setCountProducts}
        />
        <ProductList
         allProducts={allProducts}
         setAllProducts={setAllProducts}
         total={total}
         setTotal={setTotal }
         countProducts={countProducts}
         setCountProducts={setCountProducts}
        />
       
        
    </div>
  )
}
