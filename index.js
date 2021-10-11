const express = require('express');
const app = express();
const routes = require('./routes');
const morgan = require('morgan');
const mongoose = require('mongoose');
const dbConfig = require('./config/db');

app.use(express.json())

mongoose.connect(dbConfig.dbStringConnect)
    .then(db => console.log("db connected"))
    .catch(err => console.error(err))

const port = 3001;

app.use(morgan("dev"));

app.get('/', (req, res) =>{
    res.json({status:200});
})

app.use('/productos', routes.productsRoutes);
app.use('/ventas', routes.salesRoutes);

app.listen(port,()=>{
    console.log(`Listening on port http://localhost:${port}`);

});
