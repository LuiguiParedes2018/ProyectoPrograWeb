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
                <div className="logeador">
                    <form action="#">
                    <h2>Cambio de Contraseña</h2>
                    <div className="input-box">
                        <label>Ingresa tu contraseña actual</label><br />
                        <FaLock className="icono"/><input type="password" placeholder="Contraseña Actual" required/>
                    </div>
                    <div className="input-box">
                        <label>Ingresa la nueva contraseña</label><br />
                        <FaLock className="icono"/><input type="password" placeholder="Nueva Contraseña" required/>
                    </div>
                        <button type="submit">Cambiar Contraseña</button>
                        </form>
                    </div>
            </div>
        </>
    )
}

export default CambiarPassword;