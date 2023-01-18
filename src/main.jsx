import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import  Home from "./routes/Home/Home"
import Tienda from './routes/Tienda/Tienda'
import Contacto from './routes/Contacto/Contacto'
import Eventos from './routes/Eventos/Eventos'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home/>,
    errorElement: <h1>Ruta Incorrecta</h1>
  },
  {
    path: '/tienda',
    element: <Tienda/>,
  },
  {
    path: '/eventos',
    element: <Eventos/>,
  },
  {
    path: '/contacto',
    element: <Contacto/>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
