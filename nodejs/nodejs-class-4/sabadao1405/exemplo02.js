const Joi = require('joi')

const Produto01 = Joi.object({
    codigo: Joi.string().required()
    
})

const resultado = Produto01.validate({
    codigo1: 'a'
})
if (resultado.error) {
    console.log('Deu ruim')
}
console.log('resultado', resultado)