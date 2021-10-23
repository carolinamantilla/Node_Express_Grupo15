//Importe de paquetes y declaracion
const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json())

//Configuracion de la base de datos
const dbConfig = require('./config/dbConfig');
//Conexion de la base de datos
mongoose.connect(dbConfig.urlDatabase)
    .then(db => console.log("db connected"))
    .catch(err => console.error(err))


//usando el Middleware morgan para registrar y detallar las solicitudes HTTP que llegan al servidor 
app.use(morgan("dev"));

//Variables de ambiente o entorno en el archivo .env
require('dotenv').config();
const port = process.env.PORT;

app.listen(port, () => {
    console.log(`Arrancamos en  http://localhost:${port}`)
})

//ruta base de nuestra API
app.get('/', (req, res) => {
    res.json({ status: 200 });
})

//Importacion de las rutas ./routes/index.js
const routes = require('./routes');

/*Invocado de las rutas para token y usuario */
app.use('/usuarios', routes.usersRouter);
app.use('/auth', routes.authRouter);
