const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductSaleDetailSchema = Schema({
    id: {
        type: String,
        require: true
    },
    valor: {
        type: Number,
        require: true,
    },
    cantidad: {
        type: Number,
        require: true,
    }
})

const SaleSchema = Schema({
    fecha: {
        type: Date,
        default: Date.now
    },
    documentoCliente: {
        type: String,
        require: true
    },
    nombreCliente: {
        type: String,
        require: true
    },
    documentoVendedor: {
        type: String,
        require: true
    },
    estado: {
        type: String,
        require: true
    },
    valorTotal: {
        type: Number,
        require: true,
    },
    productos: [ProductSaleDetailSchema]
        
})

module.exports = mongoose.model('sales',SaleSchema);