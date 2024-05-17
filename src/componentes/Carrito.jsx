import '../App.css'
import Menu from './Menu'
import Pie from './Pie'
import Objetos from "../assets/Lista.json";
import ListaBoton from './ListaBoton'
import React, { useState } from "react";


function Carrito() {
    const [productos, setProductos] = useState(Objetos);
    const [productosSeleccionados, setProductosSeleccionados] = useState([]);

    const eliminarProducto = (id) => {
        const nuevaLista = productos.filter(producto => producto.id !== id);
        setProductos(nuevaLista);
    };


    return (
        <>
        <Menu/>
        <div id='NumeroItems'>
        <p><h2>Items en tu carrito de compras</h2></p>
        </div>

        <div className='Contenedor'>
            <p>Items Disponibles para Envio:</p>
            <ListaBoton/>

            
        </div>
        <div className='Contenedor'>
            <p>Guardado para despues:</p>
        </div>
        <Pie/>
        </>
    )
}

export default Carrito