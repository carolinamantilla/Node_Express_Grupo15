const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SaleSchema = Schema({
    fecha: Date,
    documentoCliente: Number,
    nombreCliente: String,
    documentoVendedor: Number,
    estado: String,
    valorTotal: Number
})

module.exports = mongoose.model('sales',SaleSchema);