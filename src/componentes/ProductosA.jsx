// src/Products.js
import React, { useState } from 'react';
import AgregarProductos from './AgregarProductos';
import './ProductosA.css';

const ProductosA = () => {
  const [showAgregarProductos, setShowAgregarProductos] = useState(false);

  const handleAgregarProductosClick = () => {
    setShowAgregarProductos(true);
  };

  return (
    <div className="main-content">
      {showAgregarProductos ? (
        <AgregarProductos />
      ) : (
        <>
          <div className="header">
            <h1>Productos</h1>
            <button onClick={handleAgregarProductosClick}>+ Agregar Producto</button>
          </div>
          <input type="text" placeholder="Buscar por Id, serie o detalle..." className="search-bar" />
          <table className="products-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Detalle</th>
                <th>Serie</th>
                <th>Precio</th>
                <th>Fecha de Registro</th>
                <th>Stock</th>
                <th>Estado</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Manga Dragon Ball Vol 1</td>
                <td>Dragon Ball</td>
                <td>S/ 30.99</td>
                <td>11/02/2022</td>
                <td>12</td>
                <td>Activo</td>
                <td>Ver | Desactivar</td>
              </tr>
              <tr>
                <td>10</td>
                <td>Manga Sailor Moon Vol 9</td>
                <td>Sailor Moon</td>
                <td>S/ 30.99</td>
                <td>11/02/2022</td>
                <td>10</td>
                <td>Activo</td>
                <td>Ver | Desactivar</td>
              </tr>
              <tr>
                <td>11</td>
                <td>Lost BluRay Complete</td>
                <td></td>
                <td>S/ 30.99</td>
                <td>11/02/2022</td>
                <td>100</td>
                <td>Activo</td>
                <td>Ver | Desactivar</td>
              </tr>
              <tr>
                <td>14</td>
                <td>Manga Dragon Ball Vol 2</td>
                <td>Dragon Ball</td>
                <td>S/ 30.99</td>
                <td>11/02/2022</td>
                <td>12</td>
                <td>Activo</td>
                <td>Ver | Desactivar</td>
              </tr>
            </tbody>
          </table>
          <div className="pagination">
            <button>Anterior</button>
            <button>1</button>
            <button>2</button>
            <button>3</button>
            <button>4</button>
            <button>5</button>
            <button>Siguiente</button>
          </div>
        </>
      )}
    </div>
  );
};

export default ProductosA;