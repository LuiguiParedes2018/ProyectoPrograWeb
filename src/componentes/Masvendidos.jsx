import '../App.css'
import React, { useEffect, useState } from 'react'
import Menu from './Menu'
import productos from './productos.json'
import Pie from './Pie'



const Masvendidos = () => {
  const [productosMasVendidos, setProductosMasVendidos] = useState([]);

  useEffect(() => {
    const productosFiltrados = productos.filter(product => product.cantidadVendida > 0);
    const productosOrdenados = productosFiltrados.sort((a, b) => b.cantidadVendida - a.cantidadVendida);
    const productosMasVendidosDelMes = productosOrdenados.slice(0, 5);
    setProductosMasVendidos(productosMasVendidosDelMes);
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