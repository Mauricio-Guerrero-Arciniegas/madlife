import React from 'react';
import { useState } from 'react';
import Header from "../../components/Header/Header";
import ProductList from '../../components/ProductList/ProductList';

import Navbar from "../../components/navbar/Navbar";
import './Medicamentos.css';

export default function Medicamentos() {
  const [allProducts, setAllProducts] = useState([]);
  const [total, setTotal] = useState(0);
  const [countProducts, setCountProducts] = useState(0);

  return (
    <div>
      <Navbar />
      <h2 className='titulo'>Medicamentos</h2>
      <img className='imagen' src="../assets/imagenes/web-06.jpg" alt="" />
      <div className="content">
        <Header
          allProducts={allProducts}
          setAllProducts={setAllProducts}
          total={total}
          setTotal={setTotal}
          countProducts={countProducts}
          setCountProducts={setCountProducts}
        />
        <ProductList
          allProducts={allProducts}
          setAllProducts={setAllProducts}
          total={total}
          setTotal={setTotal}
          countProducts={countProducts}
          setCountProducts={setCountProducts}
        />
      </div>
    </div>
  );
}
