const Sequelize = require('sequelize');
const db = require('../config/db');


const CambioPrecio = db.define('cprecios', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },

    date: {
        type: Sequelize.STRING,
        required: true
    },

    time: Sequelize.STRING,

    precio: Sequelize.FLOAT,

    estado: {
        type: Sequelize.INTEGER,
        defaultValue: 1
    },
    usuarioId: Sequelize.INTEGER
});



module.exports = CambioPrecio;