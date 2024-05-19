import React, { useState } from "react";
import Objetos from "../assets/Lista.json";

function ListaBoton() {
   const [productos, setProductos] = useState(Objetos);
   const [productosSeleccionados, setProductosSeleccionados] = useState([]);
   const [total, setTotal] = useState(0);
   
   const [cantidades, setCantidades] = useState(
    productos.reduce((acc, producto) => {
        acc[producto.id] = producto.cantidad || 1;
        return acc;
    }, {}));

    const cambiarCantidad = (id, cantidad) => {
        setCantidades(prevCantidades => ({
            ...prevCantidades,
            [id]: cantidad,
        }));
    };

    const eliminarProducto = (id) => {
        const nuevaLista = productos.filter(producto => producto.id !== id);
        setProductos(nuevaLista);
    };

    const paraDespues = (producto) => {
     setProductosSeleccionados([...productosSeleccionados, producto]);
       eliminarProducto(producto.id); 
    };

  

    const calcularSubtotal = (precio, cantidad) => {
        return precio * cantidad;
      };


    return (
        <div className='data'>
            <ul >
                {productos.map((data) => (
                    <li key={data.id}>
                        <img src={data.imagen} alt={data.nombre}/>

                        <div id='valores'> 
                      
                        <p>Precio: {data.precio}</p>
                        <p>Subtotal: {calcularSubtotal(data.precio, cantidades[data.id]).toFixed(2)} </p>
                        <select
                                value={cantidades[data.id]} 
                                onChange={(e) => cambiarCantidad(data.id, parseInt(e.target.value))} 
                            >
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                            </select>
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