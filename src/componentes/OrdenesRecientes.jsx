import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import Micuenta from './Micuenta';
import '../Styles/OrdenesRecientes.css';

function OrdenesRecientes() {
    return(
        <>
            <Micuenta></Micuenta>
            <div className='tabla-ordenes'>
                <div className='head-ordenes'>
                    <h2 className='l-o'>Ordenes recientes</h2>
                </div>
                <div className='ordenes'>
                    <h4 className='l-o'>ORDEN1</h4>
                    <p className='l-o'>Orden: 001</p>
                    <h4 className='l-o'>ORDEN2</h4>
                    <p className='l-o'>Orden: 002</p>
                    <h4 className='l-o'>ORDEN3</h4>
                    <p className='l-o'>Orden: 003</p>
                </div>
                    
                    
            </div>
        </>
    )
}

export default OrdenesRecientes;