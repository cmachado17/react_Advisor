const express = require("express");
const sessionRoutes = require('./routes/session_routes');
const usariosRoutes = require('./routes/usuarios_routes');
const ClientesRoutes = require('./routes/clientes_routes');
const opinionesRoutes = require('./routes/comentarios_routes');
const rubrosRoutes = require('./routes/rubros_routes');
const barriosRoutes = require('./routes/barrio_routes');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

const session = require('express-session');
const FileStore = require('session-file-store')(session);
const auth = require('./auth');

app.use('*/images', express.static('public/images'));

app.use(cors({
    credentials: true,
    origin: 'http://localhost:3000',
    allowedHeaders: ['Content-Type']
}));

app.use( session({
  store: new FileStore,
  secret: '1234',
  resave: false,
  saveUninitialized: true,
  name: 'reactAdvisor'
}))

app.use('/auth', sessionRoutes);
app.use('/usuarios', usariosRoutes);
app.use('/clientes', ClientesRoutes);
app.use('/opiniones', opinionesRoutes);
app.use('/rubros', rubrosRoutes);
app.use('/barrios', barriosRoutes);


app.listen("5000", () => {
  console.log("Escuchando en puerto 5000");
});
