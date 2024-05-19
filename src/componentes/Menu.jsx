import React from 'react'
import { Link } from "react-router-dom";
import "../Styles/Menu.css"
function Menu() {
    return (
        <header>
            <div className='menu'>
            <ul>
                <li><Link to="/enlace0">Tienda</Link></li>
                <li><Link to="/enlace1">Mas vendidos</Link></li>
                <li><Link to="/enlace2">Nuevos</Link></li>
                <li><Link to="/enlace3">Ofertas</Link></li>
                <li><Link to="/enlace4">Carrito</Link></li>
                <li><Link to="/enlace6">Mi Cuenta</Link></li>
            </ul>
            </div>
        </header>
    )
     
}


export default Menu