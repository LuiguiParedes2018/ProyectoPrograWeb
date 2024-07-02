<<<<<<< HEAD
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
=======
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const OrdenesRecientes = () => {
    const [ordenes, setOrdenes] = useState([]);

    useEffect(() => {
        const fetchOrdenes = async () => {
            const response = await axios.get('/api/ordenes');
            setOrdenes(response.data);
        };
        fetchOrdenes();
    }, []);

    return (
        <div>
            <h2>Órdenes Recientes</h2>
            {ordenes.map(orden => (
                <div key={orden.id}>
                    <h3>Orden ID: {orden.id}</h3>
                    <p>Total: {orden.total}</p>
                </div>
            ))}
        </div>
    );
};

export default OrdenesRecientes;
>>>>>>> ae83f4f496e02540818aca337f3be7238e52f591
