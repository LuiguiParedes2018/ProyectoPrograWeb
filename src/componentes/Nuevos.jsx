import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Nuevos = () => {
    const [productos, setProductos] = useState([]);

    useEffect(() => {
        const fetchProductos = async () => {
            const response = await axios.get('/api/productos/nuevos');
            setProductos(response.data);
        };
        fetchProductos();
    }, []);

    return (
        <div>
            <Menu />
            <h2>Productos Nuevos</h2>
            {productos.map(producto => (
                <div key={producto.id}>
                    <h3>{producto.nombre}</h3>
                    <p>Precio: {producto.precio}</p>
                </div>
            ))}
        </div>
    );
};

export default Nuevos;


