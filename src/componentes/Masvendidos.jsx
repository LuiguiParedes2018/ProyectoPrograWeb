<<<<<<< HEAD
import '../App.css';
import React, { useEffect, useState } from 'react';
import Menu from './Menu';
import Pie from './Pie';
import "../Styles/imagenes.css"


const Masvendidos = () => {
  const [productosMasVendidos, setProductosMasVendidos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('./productos.json');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        const productosFiltrados = data.filter(product => product.cantidadVendida > 0);
        const productosOrdenados = productosFiltrados.sort((a, b) => b.cantidadVendida - a.cantidadVendida);
        const productosMasVendidosDelMes = productosOrdenados.slice(0, 5);
        setProductosMasVendidos(productosMasVendidosDelMes);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <Menu/>
      <div className='masvendidos'>
        <main>
          <h2>Los 5 productos mas vendidos del mes</h2>
          <div className="product-grid">
            {productosMasVendidos.map((product, index) => (
              <div key={index} className="product-item">
                <img src={product.imagen} alt={product.nombre} />
                <div>
                  <h2>{product.nombre}</h2>
                  <span>Precio: ${product.precio.toFixed(2)}</span><br />
                  <span>Cantidad vendida: {product.cantidadVendida} unidades</span>
                </div>
              </div>
            ))}
          </div>
        </main>
        <Pie />
      </div>
    </>
  );
};

export default Masvendidos;


=======
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
>>>>>>> ae83f4f496e02540818aca337f3be7238e52f591
