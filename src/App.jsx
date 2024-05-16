import { Routes, Route } from "react-router-dom"

import Tienda from "./componentes/Tienda"
import Masvendidos from './componentes/Masvendidos'
import Nuevos from './componentes/Nuevos'
import Ofertas from './componentes/Ofertas'
import Carrito from './componentes/Carrito'
import Ayuda from "./componentes/Ayuda"
import Micuenta from "./componentes/Micuenta"
import Formulario from "./componentes/Formulario"

function App() {
  return (
    <div className="Aplicacion">
      <Routes>
        <Route path="/" element={ <Tienda /> } />
        <Route path="/enlace1" element={ <Masvendidos /> } />
        <Route path="/enlace2" element={ <Nuevos /> } />
        <Route path="/enlace3" element={ <Ofertas /> } />
        <Route path="/enlace4" element={ <Carrito /> } />
        <Route path="/enlace5" element={ <Ayuda /> } />
        <Route path="/enlace6" element={ <Micuenta /> } />
        <Route path="/enlace7" element={ <Formulario /> } />
      
      </Routes>
    </div>
  )
}

export default App
