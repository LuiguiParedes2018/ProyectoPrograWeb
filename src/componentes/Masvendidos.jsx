import '../App.css';
import React, { useEffect, useState } from 'react';
import Menu from './Menu';
import Pie from './Pie';

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
      <div>
        <main>
          <div>
            <h1>Los 5 productos más vendidos del mes:</h1>
          </div>
          <ul className="product-list">
            {productosMasVendidos.map((product, index) => (
              <li key={index}>
                <img src={product.imagen} alt={product.nombre} />
                <div>
                  <h2>{product.nombre}</h2>
                  <span>${product.precio.toFixed(2)}</span>
                </div>
              </li>
            ))}
          </ul>
        </main>
        <Pie />
      </div>
    </>
  );
};

export default Masvendidos;
