const Joi = require('joi')

const ProdutoEsquemaControlador = Joi.object({
    codigo: Joi.string().alphanum().min(3).required(),
    nome: Joi.string().alphanum().required()
})

module.exports = {
    ProdutoEsquemaControlador
}