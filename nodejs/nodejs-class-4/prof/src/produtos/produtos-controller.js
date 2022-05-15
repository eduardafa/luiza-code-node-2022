import ProdutoSerice from './produtos-service'

class ProdutoController {

    listarProdutoPorId(idProduto) {
        const produtoService = new ProdutoSerice()
        return produtoService.listarProdutos(idProduto)
    }

    listarProduto() {
        const produtoService = new ProdutoSerice()
        return produtoService.listarProdutos()
    }

    cadastrarProduto(produto) {
        console.log('cadastrando um novo produto...', produto)
        const produtoService = new ProdutoSerice()
        return produtoService.cadastrarProduto(produto)
    }

    atualizarProduto(idProduto, produto) {
        console.log('atualizando produto com id: ', idProduto)
        const produtoService = new ProdutoSerice()
        return produtoService.atualizarProduto(idProduto, produto)
    }

    removerProduto(idProduto) {
        console.log('removendo produto com id: ', idProduto)
        const produtoService = new ProdutoSerice()
        return produtoService.removerProduto(idProduto)
    }


}


export default ProdutoController