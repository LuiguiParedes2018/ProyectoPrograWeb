import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import "../Styles/Productos.css"; // Importamos el archivo de estilos

const Producto = () => {
    const location = useLocation();
    const { product } = location.state;
    const [cantidad, setCantidad] = useState(1);

    const handleAgregarAlCarrito = () => {
        if (product.stock >= cantidad) {
            alert(`Se ha añadido ${cantidad} ${product.nombre} al carrito.`);
        } else {
            alert(`No hay suficiente stock de ${product.nombre}.`);
        }
    };

    const handleCantidadChange = (e) => {
        const newCantidad = parseInt(e.target.value);
        setCantidad(newCantidad);
    };

    return (
        <div className="producto-container">
            <div className="producto-info">
                <h1>{product.nombre}</h1>
                <img className="producto-imagen" src={product.imagen} alt={product.nombre} />
                <p>Precio: ${product.precio}</p>
                <p>Descripción: {product.descripcion}</p>
                <p>Características: {product.caracteristicas}</p>
                <p>Marca: {product.marca}</p>
                <p>Serie: {product.serie}</p>
                <p>Tipo: {product.tipo}</p>
                <p>Stock: {product.stock}</p>
            </div>

            <div className="producto-carrito">
                <label htmlFor="cantidad">Cantidad:</label>
                <input
                    type="number"
                    id="cantidad"
                    name="cantidad"
                    value={cantidad}
                    onChange={handleCantidadChange}
                    className="producto-cantidad-input"
                />
                <button onClick={handleAgregarAlCarrito} className="producto-agregar-carrito-btn">Añadir al carrito</button>
            </div>
        </div>
    );
};

export default Producto;

