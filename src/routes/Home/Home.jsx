import React from 'react';

import Navbar from "../../components/navbar/Navbar"
import './Home.css'

const Home = () => {
    return (
        <div >
            <Navbar/>
            <div className='home_container'>
                <img className='home_img' src="./assets/imagenes/madlife1.jpg" alt="" />
                
            </div>
        </div>
    );
}

export default Home;
