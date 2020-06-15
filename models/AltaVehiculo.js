const Sequelize = require('sequelize');
const db = require('../config/db');



const AltaVehiculos = db.define('vehiculos', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    tag: Sequelize.STRING,
    placas: Sequelize.STRING,
    numEconomico: Sequelize.INTEGER,
    unidad: Sequelize.INTEGER,
    descripcion: Sequelize.STRING,
    marca: Sequelize.STRING,
    color: Sequelize.STRING,
    estado: {
        type: Sequelize.INTEGER,
        defaultValue: 1
    },
    litros: Sequelize.FLOAT,
    usuarioId: Sequelize.INTEGER
});



module.exports = AltaVehiculos;