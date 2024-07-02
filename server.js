const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5000;

// Middlewares
app.use(bodyParser.json());
app.use(cors());

// Routes
const productosRouter = require('./api/productos');
const seriesRouter = require('./api/series');
const carritoRouter = require('./api/carrito');
const ordenesRouter = require('./api/ordenes');
const usuariosRouter = require('./api/usuarios');
const authRouter = require('./api/auth');
const dashboardRouter = require('./api/dashboard');
const resultadosBusquedaRouter = require('./api/resultadosBusqueda');

app.use('/api/productos', productosRouter);
app.use('/api/series', seriesRouter);
app.use('/api/carrito', carritoRouter);
app.use('/api/ordenes', ordenesRouter);
app.use('/api/usuarios', usuariosRouter);
app.use('/api/auth', authRouter);
app.use('/api/dashboard', dashboardRouter);
app.use('/api/resultados-busqueda', resultadosBusquedaRouter);

// Start server
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});
