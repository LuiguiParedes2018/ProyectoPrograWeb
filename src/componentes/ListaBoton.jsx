import React, { useState } from "react";
import Objetos from "../assets/Lista.json";

function ListaBoton() {
   const [productos, setProductos] = useState(Objetos);
   const [productosSeleccionados, setProductosSeleccionados] = useState([]);


    const eliminarProducto = (id) => {
        const nuevaLista = productos.filter(producto => producto.id !== id);
        setProductos(nuevaLista);
    };

    const paraDespues = (producto) => {
     setProductosSeleccionados([...productosSeleccionados, producto]);
       eliminarProducto(producto.id); 
    };


    return (
        <div className='data'>
            <ul >
                {productos.map((data) => (
                    <li key={data.id}>
                        <img src={data.imagen} alt={data.nombre}/>
                        <div id='valores'> 
                      
                        <p>Precio: {data.precio}</p>
                        <div id= 'botones'>
                        <p><button onClick={() => eliminarProducto(data.id)}>Eliminar</button></p>
                        <p><button onClick={() => paraDespues(data)}>Guardar para despues</button></p>
                        </div>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ListaBoton;