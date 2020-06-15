const express = require('express')
const router = express.Router()

// Importando el modelo Consumos
const Serie = require('../models/Serie')

const { auth, admin } = require('../middlewares/auth')

// Agregar Consumo
router.post('/serie-nuevo', async(req, res) => {

    const body = req.body


    try {
        const serieDb = await Serie.create(body)
        res.status(200).json(serieDb)
    } catch (error) {
        return res.status(500).json({
            mensaje: 'Ocurrio un error'
        })
    }
})


// Mostrar todo
router.get('/serie', async(req, res) => {



    try {
        const serieDb = await Serie.findAll(req.body)
        res.json(serieDb)

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