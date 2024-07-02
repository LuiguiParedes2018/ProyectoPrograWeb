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

const escribirArchivoJson = async (rutaArchivo, datos) => {
    try {
        await fsPromises.writeFile(rutaArchivo, JSON.stringify(datos, null, 2), 'utf-8');
    } catch (error) {
        console.error('Error al escribir el archivo JSON:', error);
        throw error;
    }
};

// Obtener todas las órdenes
router.get('/', async (req, res) => {
    const rutaArchivo = path.join(__dirname, '../src/assets/ordenes.json');
    try {
        const ordenes = await leerArchivoJson(rutaArchivo);
        res.status(200).json(ordenes);
    } catch (error) {
        res.status(500).send('Error del servidor');
    }
});

// Obtener una orden específica por su ID
router.get('/:id', async (req, res) => {
    const rutaArchivo = path.join(__dirname, '../src/assets/ordenes.json');
    const id = req.params.id;
    try {
        const ordenes = await leerArchivoJson(rutaArchivo);
        const orden = ordenes.find(o => o.id === id);
        if (orden) {
            res.status(200).json(orden);
        } else {
            res.status(404).send('Orden no encontrada');
        }
    } catch (error) {
        res.status(500).send('Error del servidor');
    }
});

// Crear una nueva orden
router.post('/', async (req, res) => {
    const rutaArchivo = path.join(__dirname, '../src/assets/ordenes.json');
    const nuevaOrden = req.body;
    nuevaOrden.id = Date.now().toString(); // Generar un ID único para la orden
    nuevaOrden.estado = 'pendiente';
    try {
        const ordenes = await leerArchivoJson(rutaArchivo);
        ordenes.push(nuevaOrden);
        await escribirArchivoJson(rutaArchivo, ordenes);
        res.status(201).json(nuevaOrden);
    } catch (error) {
        res.status(500).send('Error del servidor');
    }
});

// Cancelar una orden existente
router.put('/:id/cancelar', async (req, res) => {
    const rutaArchivo = path.join(__dirname, '../src/assets/ordenes.json');
    const id = req.params.id;
    try {
        let ordenes = await leerArchivoJson(rutaArchivo);
        ordenes = ordenes.map(o => (o.id === id ? { ...o, estado: 'cancelada' } : o));
        await escribirArchivoJson(rutaArchivo, ordenes);
        res.status(200).json(ordenes.find(o => o.id === id));
    } catch (error) {
        res.status(500).send('Error del servidor');
    }
});

module.exports = router;
