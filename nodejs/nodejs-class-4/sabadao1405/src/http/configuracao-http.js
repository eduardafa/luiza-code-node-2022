/*
 Arquivo responsável pelas configurações do Express/Http
 */
const express = require('express')

const saudeControlador = require('../controlador/saude-controlador')
const produtoControlador = require(
    '../controlador/produto-controlador'
)

const configurarRotas = (app) => {
    saudeControlador(app)
}

/**
 * Prinicpal função para configurar o servidor HTTP.
 * @param {*} app App do express.
 */
const configurarServidorHttp = (app) => {
    app.use(express.json())
    configurarRotas(app)
    produtoControlador(app)
}

module.exports = {
    configurarServidorHttp
}