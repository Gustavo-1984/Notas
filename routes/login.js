const express = require('express')
const router = express.Router()
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')



const Usuario = require('../models/Usuario')
const { auth, admin } = require('../middlewares/auth')

router.post('/login', async(req, res) => {

    const body = req.body

    try {
        // Evaluando el usuario
        const usuarioDb = await Usuario.findOne({ where: { usuario: body.usuario } })
        if (!usuarioDb) {
            return res.status(400).json({
                mensaje: 'Usuario no encontrado'
            })
        }

        // Evaluar contraseña
        if (!bcrypt.compareSync(body.password, usuarioDb.password)) {
            return res.status(400).json({
                mensaje: 'Constraseña no encontrada'
            })
        }

        // Generar token
        const token = jwt.sign({ data: usuarioDb }, 'secret', { expiresIn: '6d' })

        res.json({
            usuarioDb,
            token
        })


    } catch (error) {
        return res.status(400).json({
            mensaje: 'Ocurrio un error'
        })
    }
})

module.exports = router