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
