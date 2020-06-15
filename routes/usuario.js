const express = require('express')
const router = express.Router()
const bcrypt = require('bcryptjs')

const salt = 10;

const Usuario = require('../models/Usuario')

router.post('/nuevo-usuario', async(req, res) => {

    const body = {
        usuario: req.body.usuario,
        password: req.body.password,
        rol: req.body.rol,
        estado: req.body.estado
    }

    body.password = bcrypt.hashSync(req.body.password, salt)

    try {
        const usuarioDb = await Usuario.create(body)
        res.json(usuarioDb)
    } catch (error) {
        return res.status(500).json({
            mensaje: 'Ocurrio un error'
        })
    }
})

router.get('/usuario', async(req, res) => {



    try {
        const usuarioDb = await Usuario.findAll({ usuario: req.body })
        res.json(usuarioDb)

    } catch (error) {
        return res.status(400).json({
            mensaje: 'Ocurrio un error'
        })
    }
})

module.exports = router