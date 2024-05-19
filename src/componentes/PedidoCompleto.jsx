import '../App.css'
import React from 'react';
import Menu from './Menu';
import Pie from './Pie';
import Objetos from "../assets/Lista.json";

function PedidoCompleto() {

    return (
        <>
        <Menu/>
        <div id='Completo'>
            <p><h2>Muchas gracias por tu pedido!</h2></p>
            <p><h3>Puedes ver el detalle y estado de tu pedido ingresando a la cuenta</h3></p>
        </div>
        
        <div id='also'>
            <p><h2>Tambien te podria interesar:</h2></p>
            </div>
        
        <ul>
            <li>Item 1</li>
            <li>Item 1</li>
            <li>Item 1</li>
            <li>Item 1</li>
            <li>Item 1</li>
        </ul>
        <Pie/>
        </>
    );
    
}

export default PedidoCompleto