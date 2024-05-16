// Tienda.jsx
import React, { useState } from "react";
import Menu from './Menu';
import Pie from './Pie';
import ResultadosBusqueda from "./ResultadosBusqueda";

function Tienda() {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div>
      <Menu/>
      <input type="text" placeholder="Buscar..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)}/>
      <ResultadosBusqueda searchQuery={searchQuery} />
      <Pie/>
    </div>
  );
}

export default Tienda;


