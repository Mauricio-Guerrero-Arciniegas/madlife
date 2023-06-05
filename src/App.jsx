import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import  Inicio from "./routes/Inicio/Inicio"
import Medicamentos from './routes/Medicamentos/Medicamentos'
import Contacto from './routes/Contacto/Contacto'
import Portafolio from './routes/Portafolio/Portafolio'
import Enfermedades from './routes/Enfermedades/Enfermedades'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Inicio/>,
    errorElement: <h1>Ruta Incorrecta</h1>
  },
  {
    path: '/medicamentos',
    element: <Medicamentos/>,
  },
  {
    path: '/portafolio',
    element: <Portafolio/>,
  },
  {
    path: '/enfermedades',
    element: <Enfermedades/>,
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
