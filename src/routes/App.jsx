import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from '../componentes/Login/Login'
import RecuperarContraseña from '../componentes/RecuperarContraseña/RecuperarContraseña'
import Home from '../pages/Home'
import NotFound from '../pages/NotFound'
import IniciarSesion from '../componentes/iniciar-sesion/IniciarSesion'
import MiCuenta from '../componentes/mi-cuenta-crear/MiCuenta'
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <>
          <Route exact path='/' element={<Home/>} />
          <Route exact path='/login' element={<Login/>} />
          <Route exact path='/crear-mi-cuenta' element={<MiCuenta/>} />
          <Route exact path='/recuperar-contraseña' element={<RecuperarContraseña/>} />
          <Route exact path='/iniciar-sesion' element={<IniciarSesion/>} />
          <Route path ='*'element={<NotFound/>} />
        </>
      </Routes>
    </BrowserRouter>

  )
}

export default App
