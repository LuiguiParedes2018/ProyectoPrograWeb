import React from 'react';
import Header from './Menu';
import Footer from './Pie';
import ResultadosBusqueda from './ResultadosBusqueda';
import "../Styles/PaginaBusqueda.css"
const PaginaBusqueda = () => {
  return (
    <div>
      <Header />
      <ResultadosBusqueda />
      <Footer />
    </div>
  );
}

export default PaginaBusqueda;
