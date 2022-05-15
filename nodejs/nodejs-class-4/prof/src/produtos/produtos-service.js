import mongoose from 'mongoose'
import config from '../config'

mongoose.connect(config.connectionString)

import Produto from './produto-model'

class ProdutoService {
    cadastrarProduto(produto) {
        console.log('inserindo novo produto no mongodb....')
        const novoProduto = new Produto(produto)
        return novoProduto.save()
    }

    atualizarProduto(idProduto, produto) {
        return Produto.findOneAndUpdate({_id: idProduto}, produto)
    }

    removerProduto(idProduto) {
        return Produto.findOneAndDelete({_id: idProduto})
    }

    listarProdutos(idProduto) {
        console.log('listando todos os produtos...', idProduto)
        const params = {}
        
        if (idProduto !== undefined && idProduto !== null) {
            params._id = idProduto
        }
        return Produto.find(params)
    }
}

export default ProdutoService