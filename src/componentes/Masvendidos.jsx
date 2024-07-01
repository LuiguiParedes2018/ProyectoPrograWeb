import React, { useState, useEffect } from 'react';
import axios from 'axios';

const MasVendidos = () => {
    const [productos, setProductos] = useState([]);

    useEffect(() => {
        const fetchProductos = async () => {
            const response = await axios.get('/api/productos/mas-vendidos');
            setProductos(response.data);
        };
        fetchProductos();
    }, []);

    return (
        <div>
            <h2>Productos Más Vendidos</h2>
            {productos.map(producto => (
                <div key={producto.id}>
                    <h3>{producto.nombre}</h3>
                    <p>Precio: {producto.precio}</p>
                </div>
            ))}
        </div>
    );
};

export default MasVendidos;
