// Tienda.jsx
import React, { useState } from 'react';
import Menu from './Menu.jsx';
import Footer from './Pie.jsx';
import ResultadosBusqueda from './ResultadosBusqueda';
import '../Styles/Tienda.css';

const Tienda = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
    };

    const executeSearch = () => {
        setSearchQuery(searchTerm);
    };

    return (
        <main>
            <Menu />
            <div className="buscador">
                <input
                    className="inputbuscador"
                    type="search"
                    placeholder="Busca productos por nombre..."
                    value={searchTerm}
                    onChange={handleSearch}
                />
                <button className="boton-buscador" onClick={executeSearch}>
                    Buscar
                </button>
            </div>
            <ResultadosBusqueda searchQuery={searchQuery} />
            <Footer />
        </main>
    );
};

export default Tienda;




