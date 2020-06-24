const mysql = require('mysql2');

const con = mysql.createConnection({
    host: "35.192.64.92",
    user: "root",
    password: "root",
    database: "control"
});

module.exports = con;