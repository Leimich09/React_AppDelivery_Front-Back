const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const logger = require('morgan');
const cors = require('cors');
const passport = require('passport');
const session = require('express-session');

//Importar Rutas

const usersRoutes = require('./routes/userRoutes');

const port = process.env.PORT || 3000;

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));
app.use(cors());

app.use(session({
    secret: 'secret',
    resave: false,
    saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());

require('./config/passport')(passport);

app.disable('x-powered-by');

app.set('port', port);

//Llamado de las rutas

usersRoutes(app);

server.listen(3000, '192.168.1.19' || 'localhost', function() {
    console.log('Aplicación de NodeJS ' + port + ' Iniciada...')
});

app.get('/', (req, res) => {
    res.send('Ruta raíz del backend');
});

app.get('/test', (req, res) => {
    res.send('Ruta Test');
});

//Error handler
app.use((err, req, res, next) => {
    console.log(err);
    res.status(err.status || 500).send(err.stack);
});

//200: Respuesta exitosa
//404: Url no existe
//500: Error interno del servidor