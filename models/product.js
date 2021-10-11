const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductSchema = Schema({
    descripcion: String,
    valorUnitario: Number,
    estado: Boolean
})

module.exports = mongoose.model('products',ProductSchema);