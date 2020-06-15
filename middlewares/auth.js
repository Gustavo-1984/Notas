const jwt = require('jsonwebtoken')

const auth = (req, res, next) => {

    const token = req.get('token')

    jwt.verify(token, 'secret', (err, decoded) => {
        if (err) {
            return res.status(400).json({
                mensaje: 'Usuario no valido'
            })
        }

        req.usuario = decoded.data

        next()
    })
}

const admin = (req, res, next) => {

    const rol = req.usuario.rol
    if (rol === 'admin') {
        next()
    } else {
        return res.status(401).json({
            mensaje: 'Usuario no valido'
        })
    }
}


module.exports = { auth, admin }