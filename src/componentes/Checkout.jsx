import Objetos from "../assets/Lista.json";
import React from "react";
import { Link } from 'react-router-dom';
import Menu from './Menu'
import Pie from './Pie'

function Checkout() {

    return (
        <>
        <Menu/>
        <div id='NumeroItems'>
            <p><h2>Casi Listo! Tu orden no estara completa hasta que revises y presiones el boton "Completar orden" al final de la pagina</h2></p>
        </div>
    
        <div className='Contenedor'>
            <p>Datos de compra:</p>
        </div>
        <div class id='Envio'>
            <p>Direccion de envio:</p>
            <input id="idaddress" name="Linea" tabindex="1" placeholder="Linea 1" required />
            <input id="idaddress" name="Linea" tabindex="1" placeholder="Linea 2" required />
            <input id="idaddress" name="Linea" tabindex="1" placeholder="Distrito" required />
            <input id="idaddress" name="Linea" tabindex="1" placeholder="Ciudad" required />
            <input id="idaddress" name="Linea" tabindex="1" placeholder="Pais" required />
        </div>

        <div class id='Pago'>
            <p>Pago:</p>
            <label for="idQR">Pago con QR</label>
            <input type="radio" value="Pago con QR" name="tipo" id="idQR"></input>
            <label for="idCC">Pago Tarjeta</label>
            <input type="radio" value="Profesor" name="tipo" id="idCC"></input>
            <input id="idaddress" name="Linea" tabindex="1" placeholder="Linea 1" required />
            <input id="idaddress" name="Linea" tabindex="1" placeholder="Linea 2" required />
            <input id="idaddress" name="Linea" tabindex="1" placeholder="Distrito" required />
            <input id="idaddress" name="Linea" tabindex="1" placeholder="Ciudad" required />
        </div> 
        <div className='Contenedor2'>
            <p>Metodo de envio:</p>
        </div>
        <div class id='TipoEnvio'>
        <label for="idAereo">Economico Aereo - S/.10</label>
            <input type="radio" value="Aereo" name="tipo" id="idAereo"></input>
            <label for="idPriori">Envio Prioritario (5 a 10 dias)- S/.17.00</label>
            <input type="radio" value="Prioritario" name="tipo" id="idPriori"></input>
        </div>
        <div className='Contenedor'>
            <p>Datos de compra:</p>
        </div>
            <div id='s'>
            <p>Items en pedido:</p>
           </div>


        <div class id='Pago'>
            <p>Resumen de Compra:</p>
            <p>Subtotal:</p>
            <p>Envio:</p>
            <p>Impuestos:</p>
            <p>Total:</p>
            <Link to="/PedidoCompleto">
          <button>Completar pedido</button>
            </Link>
        </div> 
        <Pie/>
        </>
    );
    
}

export default Checkout