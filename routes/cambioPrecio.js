const express = require('express')
const router = express.Router()
const { client } = require('../config/mqtt')



// Importando el modelo Consumos
const CambioPrecio = require('../models/CambioPrecio')

const { auth, admin } = require('../middlewares/auth')

// Agregar Consumo
router.post('/cambio-precio', auth, async(req, res) => {

    const body = req.body
    body.usuarioId = req.usuario.id

    try {
        const cambioDb = await CambioPrecio.create(body)
        res.status(200).json(cambioDb)

    } catch (error) {
        return res.status(500).json({
            mensaje: 'Ocurrio un error'
        })
    }
    client.subscribe('+/#', function(err) {
        console.log("Subscripción exitosa!")
        let precio = body.precio
        client.publish("2" + "/registrar", precio)
    });

})


// Mostrar todo
router.get('/altaVehiculo', auth, async(req, res) => {

    const usuarioId = req.usuario.id

    try {
        const altaDb = await AltaVehiculo.findAll({ where: { usuarioId } })
        res.json(altaDb)

    } catch (error) {
        return res.status(400).json({
            mensaje: 'Ocurrio un error'
        })
    }
})

// Actializar
// router.put('/consumos/:id', async(req, res) => {

//     const id = req.params.id
//     const body = req.body

//     try {
//         const consumoDb = await Consumos.update({ body }, { where: { id } }, { new: true })
//         res.json(consumoDb)
//     } catch (error) {
//         return res.status(400).json({
//             mensaje: 'Ocurrio un error'
//         })
//     }
// })

// Exportar el Router
module.exports = router