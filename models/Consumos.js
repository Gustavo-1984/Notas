const Sequelize = require('sequelize');
const db = require('../config/db');




const Consumos = db.define('consumos', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    usuarioId: Sequelize.INTEGER,
    vehiculo: Sequelize.STRING,
    precio: Sequelize.FLOAT,
    litros: Sequelize.FLOAT,
    total: Sequelize.FLOAT

});



module.exports = Consumos;