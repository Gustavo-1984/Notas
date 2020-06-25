const mysql = require('mysql2');
require('dotenv').config({
    path: './config/variables.env'
})

const con = mysql.createConnection({
    host: process.env.BD_HOST,
    user: process.env.BD_USER,
    password: process.env.BD_PASS,
    database: process.env.BD_NOMBRE,

});


module.exports = con;

setInterval(function() {
    var query = 'SELECT 1 + 1 as result';

    con.query(query, function(err, result, fields) {
        if (err) throw err;
    });

}, 5000);