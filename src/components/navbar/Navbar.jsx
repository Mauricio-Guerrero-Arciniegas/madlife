import React from "react";
import './Navbar.css'

const Navbar = () => {

  return (
    <nav className="nav">
        <div className="nav__container">
            <h1 className="nav__logo">Dr. Mauricio Guerrero R.</h1>
            
            <label htmlFor="menu" className="nav__label">
                <img src="../../assets/imagenes/menu.svg" alt="" className="nav__img" />
            </label>
            <input type="checkbox" id="menu" className="nav__input"/>
            <div className="nav__menu">
                <a className="nav__item" href="/">Inicio</a>
                <a className="nav__item" href="/portafolio">Portafolio</a>
                <a className="nav__item" href="/enfermedades">Enfermedades</a>
                <a className="nav__item" href="/medicamentos">Medicamentos</a>
                <a className="nav__item" href="/Contacto">Contacto</a>
            </div>
        </div>
    </nav>
  );
}


export default Navbar;
