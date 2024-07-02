<<<<<<< HEAD
import '../App.css'
import Pie from './Pie'
import "../Styles/imagenes.css"
import React, { useState, useEffect } from 'react';
import '../App.css';
import Menu from './Menu';
import "../Styles/imagenes.css";
import ofertasData from "../assets/ofertas.json"; 

function Ofertas() {
    const [ofertas, setOfertas] = useState([]);

    useEffect(() => {
        setOfertas(ofertasData); 
    }, []);

    return (
        <>
            <Menu/>
            <div className="ofertas-contenedor">
                <h2>Ofertas de la semana </h2>
                {ofertas.slice(0, 5).map((oferta, index) => (
                    <div key={index} className="product-item">
                        <h2>{oferta.nombre}</h2>
                        <img src={oferta.imagen} alt={oferta.nombre} />
                        <p>Precio anterior: ${oferta.precio_anterior}</p>
                        <p>Precio actual: ${oferta.precio_actual}</p>
                    </div>
                ))}
            </div>
            <Pie/>
        </>
    )
    
}

export default Ofertas
=======
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Ofertas = () => {
    const [productos, setProductos] = useState([]);

    useEffect(() => {
        const fetchProductos = async () => {
            const response = await axios.get('/api/productos/ofertas');
            setProductos(response.data);
        };
        fetchProductos();
    }, []);

    return (
        <div>
            <h2>Productos en Oferta</h2>
            {productos.map(producto => (
                <div key={producto.id}>
                    <h3>{producto.nombre}</h3>
                    <p>Precio: {producto.precio}</p>
                </div>
            ))}
        </div>
    );
};

export default Ofertas;
>>>>>>> ae83f4f496e02540818aca337f3be7238e52f591
