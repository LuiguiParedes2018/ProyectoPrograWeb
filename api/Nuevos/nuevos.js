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

// Obtener los productos nuevos
router.get('/', async (req, res) => {
    const rutaArchivo = path.join(__dirname, '../src/assets/productos.json');
    try {
        const productos = await leerArchivoJson(rutaArchivo);
        const nuevos = productos
            .sort((a, b) => new Date(b.fechaIngreso) - new Date(a.fechaIngreso))
            .slice(0, 6); // Obtén los 6 productos más nuevos

        res.status(200).json(nuevos);
    } catch (error) {
        res.status(500).send('Error del servidor');
    }
});

module.exports = router;
