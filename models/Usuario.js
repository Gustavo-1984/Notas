const Sequelize = require('sequelize');
const db = require('../config/db');

const Usuario = db.define('usuarios', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    usuario: Sequelize.STRING,
    password: Sequelize.STRING,
    rol: Sequelize.STRING,
    estado: Sequelize.STRING,

});


module.exports = Usuario;