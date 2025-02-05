const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const path = require('path')
const db = require('./config/db')
require('dotenv').config({
    path: 'variables.env'
})

require('./config/mqtt')


db.sync()
    .then(() => console.log('En linea'))
    .catch(error => console.log(error))

const app = express()
app.use(morgan('tiny'))
app.use(cors())
app.use(express.json())

app.use(express.urlencoded({
    extended: true
}))



app.use('/api', require('./routes/consumos'))
app.use('/api', require('./routes/usuario'))
app.use('/api', require('./routes/login'))
app.use('/api', require('./routes/serie'))
app.use('/api', require('./routes/altaVehiculo'))
app.use('/api', require('./routes/cambioPrecio'))

app.use(express.static(path.join(__dirname, 'public')))

//app.use(bodyParser.urlencoded({ extended: true }))

const host = process.env.HOST || '0.0.0.0'
const port = process.env.PORT || 4000

app.listen(port, host, () => {
    console.log('Online');
})