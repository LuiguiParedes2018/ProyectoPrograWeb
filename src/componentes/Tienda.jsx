<<<<<<< HEAD
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




=======
import React, { useEffect, useState } from 'react';
import Menu from './Menu.jsx';
import Footer from './Pie.jsx';
import '../Styles/Tienda.css';

const Tienda = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [searchQuery, setSearchQuery] = useState('');
    const [resultadosBusqueda, setResultadosBusqueda] = useState([]);
    const [coleccionesDestacadas, setColeccionesDestacadas] = useState([]);
    const [itemsMasVendidos, setItemsMasVendidos] = useState([]);
    const [nuevasColecciones, setNuevasColecciones] = useState([]);
    const [nuevosProductos, setNuevosProductos] = useState([]);

    useEffect(() => {
        fetchColeccionesDestacadas();
        fetchItemsMasVendidos();
        fetchNuevasColecciones();
        fetchNuevosProductos();
    }, []);

    useEffect(() => {
        if (searchQuery) {
            fetchResultadosBusqueda();
        }
    }, [searchQuery]);

    const fetchColeccionesDestacadas = async () => {
        const datos = await fetch('/api/colecciones-destacadas').then(res => res.json());
        setColeccionesDestacadas(datos);
    };

    const fetchItemsMasVendidos = async () => {
        const datos = await fetch('/api/items-mas-vendidos').then(res => res.json());
        setItemsMasVendidos(datos);
    };

    const fetchNuevasColecciones = async () => {
        const datos = await fetch('/api/nuevas-colecciones').then(res => res.json());
        setNuevasColecciones(datos);
    };

    const fetchNuevosProductos = async () => {
        const datos = await fetch('/api/nuevos-productos').then(res => res.json());
        setNuevosProductos(datos);
    };

    const fetchResultadosBusqueda = async () => {
        const datos = await fetch(`/api/resultados-busqueda?q=${searchQuery}`).then(res => res.json());
        setResultadosBusqueda(datos);
    };

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
            {searchQuery ? (
                <div className="resultados-busqueda">
                    <h2>Resultados de Búsqueda</h2>
                    <div className="resultados-list">
                        {resultadosBusqueda.map(resultado => (
                            <div key={resultado.nombre} className="resultado-item">
                                <img src={resultado.imagen} alt={resultado.nombre} className="resultado-image"/>
                                <h3>{resultado.nombre}</h3>
                                <p>{resultado.descripcion}</p>
                                <p>Precio: ${resultado.precio}</p>
                            </div>
                        ))}
                    </div>
                </div>
            ) : (
                <div className="landing-page">
                    <div className="featured-collections">
                        <h2>Colecciones Destacadas</h2>
                        <div className="collection-list">
                            {coleccionesDestacadas.map(coleccion => (
                                <div key={coleccion.serie} className="collection-item">
                                    <img src={coleccion.imagen} alt={coleccion.marca} className="collection-image"/>
                                    <h3>{coleccion.serie}</h3>
                                    <p>Marca: {coleccion.marca}</p>
                                    <a href="#">Learn More</a>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="best-selling-items">
                        <h2>Más Vendidos del Mes</h2>
                        <div className="item-list">
                            {itemsMasVendidos.map(item => (
                                <div key={item.nombre} className="item">
                                    <img src={item.imagen} alt={item.nombre} className="item-image"/>
                                    <h3>{item.nombre}</h3>
                                    <a href="#">Learn More</a>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="new-collections">
                        <h2>Nuevas Series</h2>
                        <div className="collection-list">
                            {nuevasColecciones.map(coleccion => (
                                <div key={coleccion.serie} className="collection-item">
                                    <img src={coleccion.imagen} alt={coleccion.marca} className="collection-image"/>
                                    <h3>{coleccion.serie}</h3>
                                    <p>Marca: {coleccion.marca}</p>
                                    <a href="#">Learn More</a>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="new-products">
                        <h2>Productos Nuevos</h2>
                        <div className="product-list">
                            {nuevosProductos.map(producto => (
                                <div key={producto.nombre} className="product-item">
                                    <img src={producto.imagen} alt={producto.nombre} className="product-image"/>
                                    <h3>{producto.nombre}</h3>
                                    <a href="#">Learn More</a>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}
            <Pie />
        </main>
    );
};

export default Tienda;




>>>>>>> ae83f4f496e02540818aca337f3be7238e52f591
