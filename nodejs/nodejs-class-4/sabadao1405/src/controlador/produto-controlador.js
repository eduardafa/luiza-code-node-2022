const httpStatus= require('http-status')
const { FaltaCampoExcecao } = require('../utils/excecao')
const produtoServico = require('../servico/produto-servico')
const { ProdutoEsquemaControlador } = require('./produto-esquema-controlador')
const controladorValidador = require('./controlador-validador')

const logger = require('../utils/logging').iniciar('produto-controlador')

// const validarProdutoNovo = (req, res, next) => {
//     const produto = req.body 
//     if (!produto.codigo) {
//         return res.status(httpStatus.UNPROCESSABLE_ENTITY).json({
//             mensagem: 'Falta código..'
//         })
//     }
//     // Outras validações.
//     next()
// }

const inserirProdutoNoControlador = (req, res, next) => {
    const produto = req.body
    try {
        produtoServico.inserirProdutoNoServico(produto)
    } catch (excecao) {
        if (excecao instanceof FaltaCampoExcecao) {
            return res.status(httpStatus.UNPROCESSABLE_ENTITY).json({
                mensagem: '' + excecao
            })
        }
        logger.informarErro('Nao sei o que aconteceu', excecao)
        return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
            mensagem: 'Entre com o contato suporte'
        })
    }
    return res.status(httpStatus.CREATED).json({
        codigo: produto.codigo
    })
} 

module.exports = (appExpress) => {
    const rotaPadrao = '/api/produtos'
    appExpress.post(
        rotaPadrao,
        // validarProdutoNovo,
        controladorValidador.validar(ProdutoEsquemaControlador),
        inserirProdutoNoControlador,
    )
    appExpress.post(
        rotaPadrao + "/v2",
        (req, resp) => {
            console.log(">>>>>>", req.body)
            resp.json({})
        }
    )
}