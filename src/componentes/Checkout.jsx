import React from "react";
import { Link } from 'react-router-dom';
import { useState } from "react";
import { useNavigate} from "react-router-dom";
import { useForm } from 'react-hook-form';

import Menu from './Menu'
import Pie from './Pie'

function Checkout() {
    const { register, handleSubmit } = useForm();
    const [statusCode, setStatusCode] = useState(null);
    const navegar = useNavigate() 

    async function onSubmit(values) {
        // Aquí puedes usar values para enviar la información
        await fetch('http://localhost:3080/api/tienda/newPedido',  {
            method: "POST",
            body: JSON.stringify(values),
            headers: {
              'Content-Type': 'application/json',
              'Accept': 'application/json'
            }
          })
        .then( (res) => {
          setStatusCode(res.status) 
          if ( res.status === 201 ) {
            console.log("********************")
            navegar('/PedidoCompleto');
          } else {
            console.log(statusCode)
          }
        })
        .finally(() => {
          console.log("ya terminamos")
        })
    
      }

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
            <form onSubmit={handleSubmit(onSubmit)} className="my-form">
            <label htmlFor="linea_1">Linea 1</label>
            <input type="text" {...register("linea_1")} />
            <label htmlFor="linea_2">Linea 2</label>
            <input type="text" {...register("linea_2")} />
            <label htmlFor="distrito">Distrito</label>
            <input type="text" {...register("distrito")} />
            <label htmlFor="ciudad">Ciudad</label>
            <input type="text" {...register("ciudad")} />
            <label htmlFor="pais">Pais</label>
            <input type="text" {...register("pais")} />
            <p>Pago: </p>
            <label htmlFor="idQR">Pago con QR</label>
            <input type="radio" value="QR" name="tipo_de_pago" id="tipo_de_pago" {...register('tipo_de_pago')} />
            <label htmlFor="idQR">Pago con Tarjeta</label>
            <input type="radio" value="Tarjeta de Credito" name="tipo_de_pago" id="tipo_de_pago" {...register('tipo_de_pago')} />
            <label htmlFor="numero_de_tarjeta">Numero de tarjeta</label>
            <input type="text" {...register("numero_de_tarjeta")} />
            <label htmlFor="nombre_en_tarjeta">Nombre en tarjeta</label>
            <input type="text" {...register("nombre_en_tarjeta")} />
            <label htmlFor="vencimiento">Vencimiento de tarjeta</label>
            <input type="text" {...register("vencimiento")} />
            <label htmlFor="ccv">CCV</label>
            <input type="text" {...register("ccv")} />
            <label htmlFor="idQR">Envio Aereo</label>
            <input type="radio" value="Aereo" name="metodo_de_envio" id="metodo_de_envio" {...register('metodo_de_envio')} />
            <label htmlFor="idQR">Envio Prioritario</label>
            <input type="radio" value="Priotitario" name="metodo_de_envio" id="metodo_de_envio" {...register('metodo_de_envio')} />
            <div class id='Pago'>
            </div> 
            <button type="submit">Grabar</button>
            </form>

 

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
        </>
    );
    
}

export default Checkout