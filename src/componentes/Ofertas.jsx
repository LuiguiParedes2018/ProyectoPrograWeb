import React from 'react'
import Menu from './Menu'
import Pie from './Pie'
import '../App.css'
import '../Styles/imagenes.css'
import productos from './productos.json'

function Ofertas(){
  const ofertas = productos.filter(producto => producto.nombre === 'Toyota' || producto.nombre === 'Ford')
  const ofertasMitadPrecio = ofertas.map(oferta => ({...oferta, precio: oferta.precio / 2}))

  return (
    <div>
      <Menu/>
      <h1>AQUI ESTAN LAS OFERTAS</h1>
      <div className="ofertas-container">
        {ofertasMitadPrecio.map((oferta, index) => (
          <div key={index} className="oferta-item">
            <h2>{oferta.nombre}</h2>
            <img src={oferta.imagen} alt={oferta.nombre} className="oferta-image"/>
            <p>{oferta.precio}</p>
            <button className="oferta-button">Comprar</button>
          </div>
        ))}
      </div>
      <Pie/>
    </div>
  )
}

export default Ofertas