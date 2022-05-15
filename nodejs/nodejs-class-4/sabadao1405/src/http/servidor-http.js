const express = require('express')

const configuracaoHttp = require('./configuracao-http')

const iniciarServidorHttp = () => {
    const app = express()
    configuracaoHttp.configurarServidorHttp(app)
    return app
}

const executarServidorHttp = (app, portEscuta=3000) => {
    console.log('Servidor iniciado na porta ', portEscuta)
    app.listen(portEscuta)
}

module.exports = {
    iniciarServidorHttp,
    executarServidorHttp
}