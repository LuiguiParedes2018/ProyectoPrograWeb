import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import Menu from './Menu';
import Pie from './Pie';
import "../Styles/Micuenta.css"
import usuario from '../assets/imagenes/persona.png';
function Micuenta() {
    return (
        <>
            <Menu />
            <div className='tabla-mi-cuenta'>
                <h2>Mi cuenta</h2>
                <p><Link to="/ordenes">Ordenes recientes</Link></p>
                <p><Link to="/datos-registro">Datos de registro</Link></p>
                <p><Link to="/cambiar-password">Cambiar password</Link></p>
                <img className='user' src={usuario} alt="hola" />
            </div>
            <Pie />
        </>
    );
}

export default Micuenta;