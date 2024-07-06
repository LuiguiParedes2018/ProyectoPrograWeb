// src/AgregarProductos.js
import React from 'react';
import './AgregarProductos.css';

const AgregarProductos = () => {
  return (
    <div className="add-product-container">
      <h2>Agregar Producto</h2>
      <div className="form-container">
        <div className="image-upload">
          <div className="image-placeholder"></div>
          <button>Agregar Imagen</button>
        </div>
        <div className="form-fields">
          <div className="form-group">
            <label>Nombre</label>
            <input type="text" />
          </div>
          <div className="form-group">
            <label>Descripción</label>
            <input type="text" />
          </div>
          <div className="form-group">
            <label>Características</label>
            <textarea></textarea>
          </div>
          <div className="form-group">
            <label>Marca</label>
            <input type="text" />
          </div>
          <div className="form-group">
            <label>Serie</label>
            <input type="text" />
          </div>
          <div className="form-group">
            <label>Precio</label>
            <input type="text" />
          </div>
          <div className="form-group">
            <label>Tipo</label>
            <input type="text" />
          </div>
          <div className="form-group">
            <label>Stock</label>
            <input type="text" />
          </div>
          <button className="save-button">Guardar</button>
        </div>
      </div>
    </div>
  );
};

export default AgregarProductos;