const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const app = express();

app.use(express.json())

const dbConfig = require('./config/dbConfig');

mongoose.connect(dbConfig.urlDatabase)
    .then(db => console.log("db connected"))
    .catch(err => console.error(err))

app.use(morgan("combined"));

require('dotenv').config();

const port = process.env.PORT;

app.listen(port, () => {
    console.log(`server listen http://localhost:${port}`)
})

app.get('/', (req, res) =>{
    res.json({status:200});
})

const routes = require('./routes');

app.use('/productos', routes.productsRoutes);
app.use('/ventas', routes.salesRoutes);