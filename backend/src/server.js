const express = require("express");
const usariosRoutes = require('./routes/usuarios_routes');
const ClientesRoutes = require('./routes/clientes_routes');
const opinionesRoutes = require('./routes/comentarios_routes');
const rubrosRoutes = require('./routes/rubros_routes');
const barriosRoutes = require('./routes/barrio_routes');
const cors = require('cors');

const app = express();

app.use('*/images', express.static('public/images'));

app.use(cors({
    credentials: true,
    origin: 'http://localhost:3000',
    allowedHeaders: ['Content-Type']
}));

app.use('/usuarios', usariosRoutes);
app.use('/clientes', ClientesRoutes);
app.use('/opiniones', opinionesRoutes);
app.use('/rubros', rubrosRoutes);
app.use('/barrios', barriosRoutes);

app.listen("5000", () => {
  console.log("Escuchando en puerto 5000");
});
