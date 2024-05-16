
import Menu from './Menu'
import Pie from './Pie'

/***********************************************************************
FUENTE : https://www.freecodecamp.org/espanol/news/how-to-search-and-filter-components-in-react-como-hacer-una-busqueda-y-filtrado-de-resultados-en-componentes-de-react/
***********************************************************************/

import { useState, useEffect } from 'react'

function Nuevos() {
    return (
        <>
        <Menu/>
            <h1>AQUI ESTAN LOS PRODUCTOS NUEVOS</h1>
        <Pie/>
        </>
    )
}

export default Nuevos
