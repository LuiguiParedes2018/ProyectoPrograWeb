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