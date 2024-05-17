function Checkout() {

    return (
        <>
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
            <label for="idprofesor">Pago con QR</label>
            <input type="radio" value="Pago con QR" name="tipo" id="idprofesor"></input>
            <label for="idprofesor">Pago Tarjeta</label>
            <input type="radio" value="Profesor" name="tipo" id="idprofesor"></input>
            <input id="idaddress" name="Linea" tabindex="1" placeholder="Linea 1" required />
            <input id="idaddress" name="Linea" tabindex="1" placeholder="Linea 2" required />
            <input id="idaddress" name="Linea" tabindex="1" placeholder="Distrito" required />
            <input id="idaddress" name="Linea" tabindex="1" placeholder="Ciudad" required />
        </div> 
        <div className='Contenedor2'>
            <p>Metodo de envio:</p>
        </div>
        <div class id='TipoEnvio'>
        <label for="idprofesor">Pago con QR</label>
            <input type="radio" value="Pago con QR" name="tipo" id="idprofesor"></input>
            <label for="idprofesor">Pago Tarjeta</label>
            <input type="radio" value="Profesor" name="tipo" id="idprofesor"></input>
        </div>
        <div className='Contenedor'>
            <p>Datos de compra:</p>
        </div>
            <div id='s'>
            <p>Items en pedido:</p>
            <ol id='lista2'>
                <li>1x Juego de cartas Pokemon  </li>
                <li>1x Juego de cartas Magic  </li>
                <li>1x Juego de cartas Magic  </li>
                <li>1x Juego de cartas Magic  </li>
            </ol>
            </div>

        <div class id='Pago'>
            <p>Resumen de Compra:</p>
            <p>Subtotal:</p>
            <p>Envio:</p>
            <p>Impuestos:</p>
            <p>Total:</p>
            <button>Completar orden</button> 
            
        </div> 

       
        </>
    );
    
}

export default Checkout