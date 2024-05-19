import React from 'react';
import productos from './productos.json';
import { useLocation } from 'react-router-dom';

const Producto = () => {
    const location = useLocation();
    const { product } = location.state;

    return (
        <div>
            <h1>{product.nombre}</h1>
            <img src={product.imagen} alt={product.nombre} />
            <p>Precio: ${product.precio}</p>
            <p>Descripción: {product.descripcion}</p>
            <p>Características: {product.caracteristicas}</p>
            <p>Marca: {product.marca}</p>
            <p>Serie: {product.serie}</p>
            <p>Tipo: {product.tipo}</p>
            <p>Stock: {product.stock}</p>
        </div>
    );
};

export default Producto;
