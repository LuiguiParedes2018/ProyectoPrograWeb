import '../App.css'
import Menu from './Menu'
import Pie from './Pie'

function Micuenta() {
    return (
        <>
        <Menu/>
            <div className='tabla-mi-cuenta'>
                <h2>Mi cuenta</h2>
                <p>Ordenes recientes</p>
                <p>Datos de registro</p>
                <p>Cambiar password</p>
            </div>
        <Pie/>
        </>
    )
}

export default Micuenta