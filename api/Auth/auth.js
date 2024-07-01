const express = require('express');
const path = require('path');
const fsPromises = require('fs/promises');
const crypto = require('crypto');
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

// Iniciar sesión
router.post('/login', async (req, res) => {
    const { email, password } = req.body;
    const rutaUsuarios = path.join(__dirname, '../src/assets/usuarios.json');
    const rutaSesiones = path.join(__dirname, '../src/assets/sesiones.json');

    try {
        const usuarios = await leerArchivoJson(rutaUsuarios);
        const usuario = usuarios.find(u => u.email === email && u.password === password);

        if (usuario) {
            const token = crypto.randomBytes(16).toString('hex');
            const sesiones = await leerArchivoJson(rutaSesiones);
            sesiones[token] = { usuarioId: usuario.id };
            await escribirArchivoJson(rutaSesiones, sesiones);

            res.status(200).json({ token, usuario });
        } else {
            res.status(401).send('Credenciales inválidas');
        }
    } catch (error) {
        res.status(500).send('Error del servidor');
    }
});

// Cerrar sesión
router.post('/logout', async (req, res) => {
    const { token } = req.body;
    const rutaSesiones = path.join(__dirname, '../src/assets/sesiones.json');

    try {
        const sesiones = await leerArchivoJson(rutaSesiones);
        delete sesiones[token];
        await escribirArchivoJson(rutaSesiones, sesiones);

        res.status(200).send('Sesión cerrada');
    } catch (error) {
        res.status(500).send('Error del servidor');
    }
});

// Enviar un correo para restablecer la contraseña
router.post('/forgot-password', async (req, res) => {
    const { email } = req.body;
    const rutaUsuarios = path.join(__dirname, '../src/assets/usuarios.json');
    const rutaRecuperaciones = path.join(__dirname, '../src/assets/recuperaciones.json');

    try {
        const usuarios = await leerArchivoJson(rutaUsuarios);
        const usuario = usuarios.find(u => u.email === email);

        if (usuario) {
            const token = crypto.randomBytes(16).toString('hex');
            const recuperaciones = await leerArchivoJson(rutaRecuperaciones);
            recuperaciones[token] = { usuarioId: usuario.id, email };
            await escribirArchivoJson(rutaRecuperaciones, recuperaciones);

            // Aquí deberías enviar el correo con el token, pero para simplificar solo devolvemos el token
            res.status(200).json({ token });
        } else {
            res.status(404).send('Correo no encontrado');
        }
    } catch (error) {
        res.status(500).send('Error del servidor');
    }
});

// Restablecer la contraseña
router.post('/reset-password', async (req, res) => {
    const { token, nuevaPassword } = req.body;
    const rutaUsuarios = path.join(__dirname, '../src/assets/usuarios.json');
    const rutaRecuperaciones = path.join(__dirname, '../src/assets/recuperaciones.json');

    try {
        const recuperaciones = await leerArchivoJson(rutaRecuperaciones);
        const recuperacion = recuperaciones[token];

        if (recuperacion) {
            const usuarios = await leerArchivoJson(rutaUsuarios);
            const usuario = usuarios.find(u => u.id === recuperacion.usuarioId);

            if (usuario) {
                usuario.password = nuevaPassword;
                await escribirArchivoJson(rutaUsuarios, usuarios);
                delete recuperaciones[token];
                await escribirArchivoJson(rutaRecuperaciones, recuperaciones);

                res.status(200).send('Contraseña actualizada');
            } else {
                res.status(404).send('Usuario no encontrado');
            }
        } else {
            res.status(400).send('Token inválido o expirado');
        }
    } catch (error) {
        res.status(500).send('Error del servidor');
    }
});

module.exports = router;
