import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import productos from './productos.json';
import "../Styles/imagenes.css";

const ResultadosBusqueda = ({ searchQuery, setIsSearching }) => {
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [sortType, setSortType] = useState('nombre');
    const navigate = useNavigate(); 

    useEffect(() => {
        const results = searchQuery ? productos.filter(product =>
            product.nombre.toLowerCase().includes(searchQuery.toLowerCase())
        ) : productos; // Mostrar todos los productos si no hay una búsqueda activa
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

    const handleProductClick = (product) => {
        navigate(`/producto/${product.nombre}`, { state: { product } });
    };

    return (
        <main>
            <div className='productosbuscados'>
                <div className="product-container">
                    {filteredProducts.map((product, index) => (
                        <div key={index} className="product-item" onClick={() => handleProductClick(product)}>
                            <img className='dimensiones' src={product.imagen} alt={product.nombre} />
                            <div>
                                <h2>{product.nombre}</h2>
                                <span>${product.precio.toFixed(2)}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="contenedor-padre">
                <div className="pagination">
                    <a href="#!" className="page-link">« Anterior</a>
                    <a href="#!" className="page-link">1</a>
                    <a href="#!" className="page-link">2</a>
                    <a href="#!" className="page-link">3</a>
                    <a href="#!" className="page-link">4</a>
                    <a href="#!" className="page-link">5</a>
                    <a href="#!" className="page-link">Siguiente »</a>
                </div>
            </div>
        </main>
    );
};

export default ResultadosBusqueda;









