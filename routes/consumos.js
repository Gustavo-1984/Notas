const express = require('express')
const router = express.Router()
const con = require('../config/mysql')

// Importando el modelo Consumos
const Consumos = require('../models/Consumos')

const { auth, admin } = require('../middlewares/auth')

// Agregar Consumo
router.post('/consumos', auth, async(req, res) => {

    const body = req.body

    body.usuarioId = req.usuario.id

    try {
        const consumoDb = await Consumos.create(body)
        res.status(200).json(consumoDb)
    } catch (error) {
        return res.status(500).json({
            mensaje: 'Ocurrio un error'
        })
    }
})

// Get con parametros
router.get('/consumos/:id', async(req, res) => {

    const id = req.params.id

    try {
        const consumoDb = await Consumos.findOne({ id })
        res.status(200).json(consumoDb)
    } catch (error) {
        return res.status(400).json({
            mensaje: 'Ocurrio un error'
        })
    }
})

// Mostrar todo
router.get('/consumos', auth, async(req, res) => {

    const usuarioId = req.usuario.id

    try {
        const consumoDb = await "SELECT * FROM vista_consumos WHERE usuarioId = '" + usuarioId + "'"
        con.query(consumoDb, (err, result, fields) => {
            //const consumoDb = await Consumos.findAll({ where: { usuarioId }})
            res.send(result)
        })
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