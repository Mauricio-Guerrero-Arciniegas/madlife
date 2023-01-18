import React from "react";
import {Link} from "react-router-dom";
import './Navbar.css'

export default function Navbar() {
  return (
    <div className="navbar">
      
        <ul className="navbar_ul">
            <img className="navbar_img" src="./assets/iconos/madlife-head-logo-png.png" alt="" />
          <li className="navbar_li">
            <Link className="navbar_link" to={"/"}>Home</Link>
          </li>
          <li className="navbar_li">
            <Link className="navbar_link" to={"/tienda"}>Tienda</Link>
          </li>
          <li className="navbar_li">
            <Link className="navbar_link" to={"/eventos"}>Eventos</Link>
          </li>
          <li className="navbar_li">
            <Link className="navbar_link" to={"/contacto"}>Contacto</Link>
          </li>
        </ul>
      
    </div>
  );
}
