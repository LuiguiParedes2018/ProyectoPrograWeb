import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import Micuenta from './Micuenta';
import { FaLock } from "react-icons/fa";
import "../Styles/CambiarPassword.css"

function CambiarPassword() {
    return(
        <>
            <Micuenta></Micuenta>
            <div className="tabla">
                <div className='borde'>
                    <form action="">
                        <h2>Cambio de Contraseña</h2>
                        <div className="input-box">
                            <FaLock className="icono"/><input type="password" placeholder="Actual" required/>
                        </div>
                        <div className="input-box">
                            <FaLock className="icono"/><input type="password" placeholder="Nueva" required/>
                        </div>
                        <div className="input-box">
                            <FaLock className="icono"/><input type="password" placeholder="Repetir" required/>
                        </div>
                        <button type="submit">Cambiar Contraseña</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default CambiarPassword;