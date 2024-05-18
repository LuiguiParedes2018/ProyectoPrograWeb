
import Menu from './Menu'
import Pie from './Pie'
import "../Styles/imagenes.css"
/***********************************************************************
FUENTE : https://www.freecodecamp.org/espanol/news/how-to-search-and-filter-components-in-react-como-hacer-una-busqueda-y-filtrado-de-resultados-en-componentes-de-react/
***********************************************************************/

import { useState, useEffect } from 'react'

function Nuevos() {
    const [productos,setProductos] = useState([]);
    useEffect(() => {
        fetch("/productos.json")
            .then(response => {
                if(!response.ok){
                    throw new Error("Network error");
                }
                return response.json();
            })
            .then(data =>{
                const productosrecientes = data.slice(-5).reverse();
                setProductos(productosrecientes);
            })
            .catch(error=>console.error("Error fetching", error));
    },[]);

    return (
        <>
        <Menu />
        <div>
            <h2>Los productos más recientes agregados</h2>
            <ul>
                {productos.map((producto, index) => (
                <li key={index}>
                <h3>{producto.nombre}</h3>
                <img src={producto.imagen} alt={producto.nombre} />
                <p>Precio: ${producto.precio}</p>
                <p><small>Cantidad vendida: {producto.cantidadVendida}</small></p>
                </li>
                ))}
            </ul>
        </div>
        <Pie />
        </>
  );
}

export default Nuevos
