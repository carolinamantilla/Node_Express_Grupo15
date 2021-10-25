const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = Schema({
    sexo : {
        type: 'string'
    },
    identificacion: {
        type: 'string',
        require: true,
        min: 6,
        max: 100
    },

    profesion: {
        type: 'string',
        require: true,
        max: 100
    },
    telefono: {
        type: 'string',
        require: true,
        min: 7,
        max: 12
    },
    fullName: {
        type: 'string',
        require: true,
        min: 6,
        max: 100
    },
    email: {
        type: 'string',
        require: true,
        min: 6,
        max: 100,
        unique: true
    },
    password: {
        type: 'string',
        require: true,
        min: 8,
        max: 255
    },
    identificaccion: {
        type: 'string',
        require: true,
        min: 6,
        max: 100
    },
    direccion: {
        type: 'string'
    },
    date: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('users', UserSchema);