const express = require('express')
const router = express.Router()

// Importando el modelo Consumos
const AltaVehiculo = require('../models/AltaVehiculo')

const { auth, admin } = require('../middlewares/auth')

// Agregar Consumo
router.post('/vehiculo-nuevo', auth, async(req, res) => {

    const body = req.body
    body.usuarioId = req.usuario.id

    try {
        const altaDb = await AltaVehiculo.create(body)
        res.status(200).json(altaDb)
    } catch (error) {
        return res.status(500).json({
            mensaje: 'Ocurrio un error'
        })
    }
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