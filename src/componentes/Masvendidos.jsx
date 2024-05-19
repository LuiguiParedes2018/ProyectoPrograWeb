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


