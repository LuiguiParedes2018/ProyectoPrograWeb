import React, { useState } from 'react';
import './Tienda.css';
import productos from './productos.json';

const Tienda = () => {
    const [searchTerm, setSearchTerm] = useState('');

    // Filtrar productos por término de búsqueda
    const filteredProducts = productos.colecciones.map(coleccion => ({
        ...coleccion,
        items: coleccion.items.filter(item =>
            item.nombre.toLowerCase().includes(searchTerm.toLowerCase())
        )
    }));

    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
    };

    return (
        <main>
            <div className="search-bar">
                <input 
                    type="search" 
                    placeholder="Busca productos por nombre..." 
                    value={searchTerm} 
                    onChange={handleSearch} 
                />
                <button onClick={() => console.log('Buscar:', searchTerm)}>Buscar</button>
            </div>
            {filteredProducts.map((coleccion, index) => (
                <section key={index} className="coleccion">
                    <h2>{coleccion.nombre}</h2>
                    <div className="items">
                        {coleccion.items.map((item, idx) => (
                            <article key={idx} className="item">
                                <img src={item.imagen} alt={`Imagen del ${item.nombre}`} />
                                <h3>{item.nombre}</h3>
                                <p>{item.descripcion}</p>
                                <a href="#!">Learn More</a>
                            </article>
                        ))}
                    </div>
                </section>
            ))}
            <section className="mas-vendidos">
                <h2>Más Vendidos del Mes</h2>
                <div className="items">
                    {productos.masVendidos.map((item, index) => (
                        <article key={index} className="item">
                            <img src={item.imagen} alt={`Imagen del ${item.nombre}`} />
                            <h3>{item.nombre}</h3>
                            <p>{item.descripcion}</p>
                            <a href="#!">Learn More</a>
                        </article>
                    ))}
                </div>
            </section>
            <section className="nuevas-series">
                <h2>Nuevas Series</h2>
                <div className="series">
                    {productos.nuevasSeries.map((serie, index) => (
                        <article key={index} className="serie">
                            <img src={serie.imagen} alt={`Imagen de la serie ${serie.nombre}`} />
                            <h3>{serie.nombre}</h3>
                            <p>{serie.descripcion}</p>
                            <a href="#!">Learn More</a>
                        </article>
                    ))}
                </div>
            </section>
            <section className="nuevos-productos">
                <h2>Nuevos Productos</h2>
                <div className="items">
                    {productos.nuevosProductos.map((item, index) => (
                        <article key={index} className="item">
                            <img src={item.imagen} alt={`Imagen del ${item.nombre}`} />
                            <h3>{item.nombre}</h3>
                            <p>{item.descripcion}</p>
                            <a href="#!">Learn More</a>
                        </article>
                    ))}
                </div>
            </section>
        </main>
    );
};

export default Tienda;
