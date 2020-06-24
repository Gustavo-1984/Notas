const Sequelize = require('sequelize')

const db = new Sequelize('control', 'root', 'root', {
    host: '35.192.64.92',
    dialect: 'mysql',
    port: '3306',
    operatorAliases: false,

    poll: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000

    },
})

module.exports = db