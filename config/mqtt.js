const mqtt = require('mqtt')
const con = require('../config/mysql')
const moment = require('moment')

let rfid = []

const options = {
    port: 1883,
    host: '35.202.20.35',
    clientId: 'acces_control_server_' + Math.round(Math.random() * (0 - 10000) * -1),
    username: 'web_client',
    password: '121212',
    keepalive: 60,
    reconnectPeriod: 1000,
    protocolId: 'MQIsdp',
    protocolVersion: 3,
    clean: true,
    encoding: 'utf8'
};

const client = mqtt.connect("mqtt://35.202.20.35", options);

//SE REALIZA LA CONEXION
client.on('connect', function() {
    console.log("Conexión  MQTT Exitosa!");
    client.subscribe('+/#', function(err) {
        console.log("Subscripción exitosa!")
    });
})

client.on('message', function(topic, message) {
    console.log("Mensaje recibido desde -> " + topic + " Mensaje -> " + message.toString());

    var topic_splitted = topic.split("/");
    let serial_number = topic_splitted[0];
    var query = topic_splitted[1];

    if (query == "access_query") {
        const rfid_number = message.toString();
        rfid = rfid_number
            //hacemos la consulta
        var query = "SELECT * FROM vehiculos WHERE tag = '" + rfid_number + "' AND usuarioId = '" + serial_number + "'";
        con.query(query, function(err, result, fields) {
            if (err) throw err;

            //consultamos rfid y devolvemos mensaje
            if (result.length == 1) {
                //GRANTED
                client.publish(serial_number + "/command", "granted");

            } else {
                //REFUSED
                client.publish(serial_number + "/command", "refused");
            }

        });

    }
});

client.on('message', function(topic, message) {
    console.log("Mensaje recibido desde -> " + topic + " Mensaje -> " + message.toString());

    var topic_splitted = topic.split("/");
    var sn = topic_splitted[0];
    var query = topic_splitted[1];

    if (query == "venta") {
        var msg = message.toString();
        var sp = msg.split(",");
        var litros = sp[0];
        var venta = sp[1];
        var precio = sp[2];
        var rfids = rfid

        //hacemos la consulta para insertar....
        var query = "INSERT INTO `control`.`consumos` (`usuarioId`, `vehiculo`,  `precio`, `litros`, `total`, `createdAt`, `updatedAt` ) VALUES ('" + sn + "', '" + rfids + "', " + precio + ", " + litros + ", " + venta + ", " + moment().format("'YYYY-MM-DD''hh:mm:ss'") + ", " + moment().format("'YYYY-MM-DD''hh:mm:ss'") + ");"
        con.query(query, function(err, result, fields) {
            if (err) throw err;
            console.log("Fila insertada correctamente");
        });
    }
});

module.exports = {
    options,
    client
}