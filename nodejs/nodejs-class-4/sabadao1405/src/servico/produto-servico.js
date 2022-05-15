const { FaltaCampoExcecao } = require('../utils/excecao')
const validarProduto = (produto) => {
    // Existir o código
    // if (produto.codigo === undefined || produto.codigo === null)
    if (!produto.codigo) {
        throw new FaltaCampoExcecao('codigo')
    }
    // Existir o nome do produto
    if (!produto.nome) {throw new FaltaCampoExcecao('nome')}
    // o código precisa ser única.
}

const inserirProdutoNoBanco = (produtoParaoOBanco) => {
    // SALVA NO BANCO!!!
}


const inserirProdutoNoServico = (produto) => {
    const produtoParaOBanco = validarProduto(produto)
    inserirProdutoNoBanco(produtoParaOBanco)
    return produtoParaOBanco
}

module.exports = {
    inserirProdutoNoServico
}