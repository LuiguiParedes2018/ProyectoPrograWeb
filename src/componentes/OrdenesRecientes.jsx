import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import Micuenta from './Micuenta';

function OrdenesRecientes() {
    return(
        <>
            <Micuenta></Micuenta>
            <h1>EN ESTA PARTE ESTARAN LAS ORDENES RECIENTES</h1>
        </>
    )
}

export default OrdenesRecientes;