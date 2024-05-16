import React from 'react';

const Header = () => {
  return (
    <header>
      <div className="header-top">
        <div className="left-menu">
          <a href="#!">Tienda</a>
          <a href="#!">Más vendidos</a>
          <a href="#!">Nuevos</a>
          <a href="#!">Ofertas</a>
        </div>
        <div className="right-menu">
          <a href="#!"><img src="carrito.png" alt="Carrito de compras" /></a>
          <a href="#!">Ayuda</a>
          <a href="#!">Mi Cuenta</a>
        </div>
      </div>
      <div className="header-bottom">
        <h1>Resultados de Búsqueda</h1>
        <div className="order-select">
          <label htmlFor="sort">Ordenar Por:</label>
          <select id="sort">
            <option value="price">Precio</option>
          </select>
        </div>
      </div>
    </header>
  );
}

export default Header;
