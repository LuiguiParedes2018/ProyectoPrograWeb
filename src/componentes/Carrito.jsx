import '../App.css'
import Menu from './Menu'
import Pie from './Pie'
import Objetos from "../assets/Lista.json";
import ListaBoton from './ListaBoton'
import React, { useState } from "react";
import "../Styles.css"
import Checkout from './Checkout';

import { Link } from 'react-router-dom';

function Carrito() {
   
    return (
        <>
        <Menu/>
        <div id='NumeroItems'>
        <p><h2>Items en tu carrito de compras</h2></p>
        </div>

        <div className='Contenedor'>
            <p>Items Disponibles para Envio:</p>
            <ListaBoton/>
            <div id='Total'>
            Total: <br></br>
            <Link to="/checkout">
          <button>Checkout</button>
            </Link>
         </div>
        </div>
        <div className='Contenedor'>
            <p>Guardado para despues:</p>
        </div>

        </>
    )
}

export default Carrito