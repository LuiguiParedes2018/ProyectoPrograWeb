import React from 'react'
import Menu from './Menu'
import Pie from './Pie'
import '../App.css'


function Ayuda() {
  return (
    <div>
      <Menu/>
      <h1>Ayuda</h1>
      <div className="ayuda-container">
        <h2>¿Cómo puedo crear una cuenta?</h2>
        <p>Para crear una cuenta, haz clic en el botón "Registrarse" en la esquina superior derecha de la página. Luego, completa el formulario con tus datos personales y haz clic en "Crear cuenta".</p>
        <h2>¿Cómo puedo iniciar sesión?</h2>
        <p>Para iniciar sesión, haz clic en el botón "Iniciar sesión" en la esquina superior derecha de la página. Luego, introduce tu correo electrónico y contraseña y haz clic en "Iniciar sesión".</p>
        <h2>¿Cómo puedo comprar un producto?</h2>
        <p>Para comprar un producto, haz clic en el botón "Comprar" en la página de carrito. Luego, completa el proceso de pago y espera a que se confirme tu compra.</p>
      </div>
      <Pie/>
    </div>
  )
}
    
export default Ayuda