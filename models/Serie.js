const Sequelize = require('sequelize');
const db = require('../config/db');

const Serie = db.define('serie', {
    serie: {
        type: Sequelize.STRING,
        unique: {
            args: true,
            msg: 'Equipo ya registrado'
        }
    },
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },


    estado: {
        type: Sequelize.INTEGER(1),

    },
    usuario: {
        type: Sequelize.STRING
    }


})

module.exports = Serie;