import { Routes, Route } from "react-router-dom";

<<<<<<< HEAD
import Tienda from "./componentes/Tienda";
import Masvendidos from './componentes/Masvendidos';
import Nuevos from './componentes/Nuevos';
import Ofertas from './componentes/Ofertas';
import Carrito from './componentes/Carrito';
import Ayuda from "./componentes/Ayuda";
import Micuenta from "./componentes/Micuenta";
import Formulario from "./componentes/Formulario";
import OrdenesRecientes from "./componentes/OrdenesRecientes";
import DatosRegistro from "./componentes/DatosRegistro";
import CambiarPassword from "./componentes/CambiarPassword";
import Producto from "./componentes/Producto"; 

=======
import Tienda from "./componentes/Tienda"
import Masvendidos from './componentes/Masvendidos'
import Nuevos from './componentes/Nuevos'
import Ofertas from './componentes/Ofertas'
import Carrito from './componentes/Carrito'
import Ayuda from "./componentes/Ayuda"
import Micuenta from "./componentes/Micuenta"
import Formulario from "./componentes/Formulario"
import OrdenesRecientes from "./componentes/OrdenesRecientes"
import DatosRegistro from "./componentes/DatosRegistro"
import CambiarPassword from "./componentes/CambiarPassword"
import Checkout from "./componentes/Checkout"
import PedidoCompleto from "./componentes/PedidoCompleto"
>>>>>>> bc5cb303fb5f3f4e9bcce8e917505f5b7d25696e
function App() {
  return (
    <div className="Aplicacion">
      <Routes>
<<<<<<< HEAD
        <Route path="/" element={<Formulario />} />
        <Route path="/enlace0" element={<Tienda />} />
        <Route path="/enlace1" element={<Masvendidos />} />
        <Route path="/enlace2" element={<Nuevos />} />
        <Route path="/enlace3" element={<Ofertas />} />
        <Route path="/enlace4" element={<Carrito />} />
        <Route path="/enlace5" element={<Ayuda />} />
        <Route path="/enlace6" element={<OrdenesRecientes />} />
        <Route path="/ordenes" element={<OrdenesRecientes />} />
        <Route path="/datos-registro" element={<DatosRegistro />} />
        <Route path="/cambiar-password" element={<CambiarPassword />} />
        <Route path="/producto/:nombre" element={<Producto />} /> 
=======
        <Route path="/" element={ <Tienda /> } />
        <Route path="/enlace1" element={ <Masvendidos /> } />
        <Route path="/enlace2" element={ <Nuevos /> } />
        <Route path="/enlace3" element={ <Ofertas /> } />
        <Route path="/enlace4" element={ <Carrito /> } />
        <Route path="/enlace5" element={ <Ayuda /> } />
        <Route path="/enlace6" element={ <OrdenesRecientes /> } />
        <Route path="/enlace7" element={ <Formulario /> } />
        <Route path="/ordenes" element={<OrdenesRecientes/>} />
        <Route path="/datos-registro" element={<DatosRegistro/>} />
        <Route path="/cambiar-password" element={<CambiarPassword/>} />
        <Route path="/Checkout" element={<Checkout/>} />
        <Route path="/PedidoCompleto" element={<PedidoCompleto/>} />


>>>>>>> bc5cb303fb5f3f4e9bcce8e917505f5b7d25696e
      </Routes>
    </div>
  );
}

export default App;

