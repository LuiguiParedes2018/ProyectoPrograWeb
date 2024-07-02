<<<<<<< HEAD
import Menu from './Menu';
import Pie from './Pie';
import "../Styles/imagenes.css";
import { useState, useEffect } from 'react';

function Nuevos() {
    const [productos, setProductos] = useState([]);

    useEffect(() => {
        fetch("/productos.json")
            .then(response => {
                if (!response.ok) {
                    throw new Error("Network error");
                }
                return response.json();
            })
            .then(data => {
                const productosrecientes = data.slice(-5).reverse();
                setProductos(productosrecientes);
            })
            .catch(error => console.error("Error fetching", error));
    }, []);

    return (
        <>
            <Menu />
            <div className='nuevos'>
                <h2>Los productos más recientes agregados</h2>
                <div className="product-container">
                    {productos.map((producto, index) => (
                        <div key={index} className="product-item">
                            <h3>{producto.nombre}</h3>
                            <img src={producto.imagen} alt={producto.nombre} />
                            <p>Precio: ${producto.precio}</p>
                            <p><small>Serie: {producto.serie}</small></p>
                        </div>
                    ))}
                </div>
            </div>
            <Pie />
        </>
    );
}

export default Nuevos;

=======
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


>>>>>>> ae83f4f496e02540818aca337f3be7238e52f591
