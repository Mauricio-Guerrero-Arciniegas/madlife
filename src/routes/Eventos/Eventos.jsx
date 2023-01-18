import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import './Eventos.css'

export default function Eventos() {
  return (
    <div>
        <Navbar/>
        <h1>Downhill Urbano Manizales 2023</h1>
        <a className='eventos_a' href="https://www.youtube.com/watch?v=Tke39rA7kkA">link al video</a>
        <h1>RedBull Rampage </h1>
        <a className='eventos_a' href="https://www.youtube.com/watch?v=CCy-jHjaXkU">link al video</a>
    </div>
  )
}
