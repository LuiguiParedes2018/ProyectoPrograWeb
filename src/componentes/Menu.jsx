import React from 'react'
import { Link } from "react-router-dom";

function Menu() {
    return (
        <header>
            <div className='menu'>
            <ul>
                <li><Link to="/">Tienda</Link></li>
                <li><Link to="/enlace1">Mas vendidos</Link></li>
                <li><Link to="/enlace2">Nuevos</Link></li>
                <li><Link to="/enlace3">Ofertas</Link></li>
                <li><Link to="/enlace4">Carrito</Link></li>
                <li><Link to="/enlace5">Ayuda</Link></li>
                <li><Link to="/enlace6">Mi Cuenta</Link></li>
                <li><Link to="/enlace7">Formulario</Link></li>
            </ul>
            </div>
        </header>
    )
    
}


export default Menu