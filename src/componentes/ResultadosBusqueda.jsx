import React, { useState, useEffect } from 'react';

const ResultadosBusqueda = ({ searchQuery }) => {
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [sortType, setSortType] = useState('nombre'); 

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('/productos.json?url');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                const results = searchQuery ? data.filter(product =>
                    product.nombre.toLowerCase().includes(searchQuery.toLowerCase())
                ) : [];
                setFilteredProducts(results);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
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

    return (
        <main>
            <ul className="product-list">
                {filteredProducts.map((product, index) => (
                    <li key={index}>
                        <img src={product.imagen} alt={product.nombre} />
                        <div>
                            <h2>{product.nombre}</h2>
                            <span>${product.precio.toFixed(2)}</span>
                        </div>
                    </li>
                ))}
            </ul>
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







