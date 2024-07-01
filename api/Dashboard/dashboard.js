const express = require('express');
const path = require('path');
const fsPromises = require('fs/promises');
const router = express.Router();

const leerArchivoJson = async (rutaArchivo) => {
    try {
        const datos = await fsPromises.readFile(rutaArchivo, 'utf-8');
        return JSON.parse(datos);
    } catch (error) {
        console.error('Error al leer el archivo JSON:', error);
        throw error;
    }
};

// Obtener el resumen de órdenes, usuarios nuevos e ingresos totales
router.get('/', async (req, res) => {
    const rutaOrdenes = path.join(__dirname, '../src/assets/ordenes.json');
    const rutaUsuarios = path.join(__dirname, '../src/assets/usuarios.json');

    try {
        const ordenes = await leerArchivoJson(rutaOrdenes);
        const usuarios = await leerArchivoJson(rutaUsuarios);

        const resumen = {
            totalOrdenes: ordenes.length,
            nuevosUsuarios: usuarios.length, // Puedes agregar lógica adicional para determinar los nuevos usuarios
            ingresosTotales: ordenes.reduce((total, orden) => total + orden.total, 0)
        };

        res.status(200).json(resumen);
    } catch (error) {
        res.status(500).send('Error del servidor');
    }
});

module.exports = router;

