import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import Micuenta from './Micuenta';

function DatosRegistro() {
    return(
        <>
            <Micuenta></Micuenta>
            <h1>EN ESTA PARTE SE VERAN LOS DATOS DEL USUARIO</h1>
        </>
    )
}

export default DatosRegistro;