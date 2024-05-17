// Tienda.jsx
import React, { useState } from "react";
import Menu from './Menu';
import Pie from './Pie';
import ResultadosBusqueda from "./ResultadosBusqueda";
import "../Styles/Tienda.css"

function Tienda() {
  const [inputQuery, setInputQuery] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = () => {
    setSearchQuery(inputQuery);
  }

  return (
    <div className="buscador">
      <Menu/>
      <div className="input-box-buscador">
      <input type="text" placeholder="Buscar productos por nombre.." value={inputQuery} onChange={(e) => setInputQuery(e.target.value)}/>
      <button onClick={handleSearch}>Buscar</button>
      </div>
      <ResultadosBusqueda searchQuery={searchQuery} />
      <Pie/>
    </div>
  );
}

export default Tienda;


