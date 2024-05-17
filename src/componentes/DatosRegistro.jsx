import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import Micuenta from './Micuenta';
import { FaUser } from "react-icons/fa";
import "../Styles/DatosRegistro.css"

function DatosRegistro() {
    return(
        <>
            <Micuenta></Micuenta>
            <div className='tabla'>
                <div className='borde'>
                <form action="">
                    <h2>Datos de registro</h2>
                    <div className='input-box'>
                        <FaUser className="icono" /><input type="text" placeholder='Nombre'/>
                    </div>
                    <div className='input-box'>
                        <FaUser className="icono" /><input type="text" placeholder='Apellido'/>
                    </div>
                    <div className='input-box'>
                        <FaUser className="icono" /><input type="text" placeholder='Correo'/>
                    </div>
                    <button type="submit">Actualizar</button>
                </form>
                </div>
            </div>
        </>
    )
}

export default DatosRegistro;