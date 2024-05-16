import React, { useState, useEffect } from 'react';
import productos from './productos.json'; // Asegúrate de que la ruta sea correcta

const ResultadosBusqueda = ({ searchQuery }) => {
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [sortType, setSortType] = useState('nombre'); // Orden por defecto por nombre

  useEffect(() => {
    const results = productos.filter(product =>
      product.nombre.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredProducts(results);
  }, [searchQuery]);

  useEffect(() => {
    const sortedProducts = [...filteredProducts].sort((a, b) => {
      if (sortType === 'nombre') {
        return a.nombre.localeCompare(b.nombre);
      } else if (sortType === 'precio') {
        return a.precio - b.precio;
      }
      return 0;
    });
    setFilteredProducts(sortedProducts);
  }, [sortType, filteredProducts]);

  return (
    <main>
      <div>
        <label htmlFor="sort">Ordenar por: </label>
        <select id="sort" value={sortType} onChange={(e) => setSortType(e.target.value)}>
          <option value="nombre">Nombre</option>
          <option value="precio">Precio</option>
        </select>
      </div>
      <ul className="product-list">
        {filteredProducts.map((product, index) => (
          <li key={index}>
            <img src={product.imagen} alt={product.nombre} />
            <div>
              <h2>{product.nombre}</h2>
              <span>${product.precio.toFixed(2)}</span>
            </div>
          </li>
        ))}
      </ul>
      <div className="contenedor-padre">
        <div className="pagination" style={{ display: 'flex', justifyContent: 'center', gap: '10px' }}>
          <a href="#!" style={{ padding: '10px 15px', backgroundColor: '#f8f9fa', border: '1px solid #dee2e6', color: '#495057', textDecoration: 'none' }}>« Anterior</a>
          <a href="#!" style={{ padding: '10px 15px', backgroundColor: '#f8f9fa', border: '1px solid #dee2e6', color: '#495057', textDecoration: 'none' }}>1</a>
          <a href="#!" style={{ padding: '10px 15px', backgroundColor: '#f8f9fa', border: '1px solid #dee2e6', color: '#495057', textDecoration: 'none' }}>2</a>
          <a href="#!" style={{ padding: '10px 15px', backgroundColor: '#f8f9fa', border: '1px solid #dee2e6', color: '#495057', textDecoration: 'none' }}>3</a>
          <a href="#!" style={{ padding: '10px 15px', backgroundColor: '#f8f9fa', border: '1px solid #dee2e6', color: '#495057', textDecoration: 'none' }}>4</a>
          <a href="#!" style={{ padding: '10px 15px', backgroundColor: '#f8f9fa', border: '1px solid #dee2e6', color: '#495057', textDecoration: 'none' }}>5</a>
          <a href="#!" style={{ padding: '10px 15px', backgroundColor: '#f8f9fa', border: '1px solid #dee2e6', color: '#495057', textDecoration: 'none' }}>Siguiente »</a>
        </div>
      </div>
    </main>
  );
};

export default ResultadosBusqueda;



