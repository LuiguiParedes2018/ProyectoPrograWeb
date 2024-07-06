// src/Dashboard.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Dashboard.css';

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <div className="sidebar">
        <h2>Tienda</h2>
        <ul>
          <li><Link to="/">Dashboard</Link></li>
          <li><Link to="/usuarios-registrados">Usuarios registrados</Link></li>
          <li><Link to="/productos">Productos</Link></li>
          <li><Link to="/ordenes">Órdenes</Link></li>
          <li><Link to="/productos-mas-vendidos">Productos más vendidos</Link></li>
          <li><Link to="/series">Series</Link></li>
        </ul>
      </div>
      <div className="main-content">
        <div className="header">
          <h1>Dashboard</h1>
          <button>Cambiar Fecha o Periodo</button>
        </div>
        <div className="stats">
          <div className="stat-box">
            <h2>68</h2>
            <p>Órdenes del día de hoy</p>
          </div>
          <div className="stat-box">
            <h2>12</h2>
            <p>Usuarios nuevos</p>
          </div>
          <div className="stat-box">
            <h2>S/ 13,500.00</h2>
            <p>Ingresos de hoy</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

