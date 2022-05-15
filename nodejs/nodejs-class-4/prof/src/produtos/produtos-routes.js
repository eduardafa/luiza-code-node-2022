import express from 'express'

const router = express.Router()

import ProdutoController from './produtos-controller'
const produtoController = new ProdutoController()

// buscar todos os produtos da base
/**
 * @openapi
 * /:
 *   get:
 *      description: Buscar produtos cadastrados
 *      responses:
 *       '200':
 *         description: ok
 *         content:
 *           application/json:
 *             schema:
 *                    type: array
 *                    items:
 *                          type: object
 *                          properties:
 *                             _id:
 *                               type: string
 *                               example: "6263225591ddd026a01c7df2"
 *                               description: Código do Produto 
 *                             name:
 *                               type: string
 *                               example: "Bicicleta"
 *                               description: Nome do produto
 *                             description:
 *                               type: string
 *                               example: "Bicicleta Vermelha"
 *                               description: Descrição do produto
 *                             price:
 *                               type: double
 *                               example: 123.45
 *                               description: Valor do produto
 *                             active:
 *                               type: boolean
 *                               example: true
 *                               description: Indica se o produto está ativo
 */
router.get('/', (req, res, next) => {
    produtoController.listarProduto()
    .then(produtos => res.status(200).send(produtos))
    .catch(next)
})

//buscar um produto pelo identificador
router.get('/:_id', (req, res) => {
    produtoController.listarProdutoPorId(req.params._id)
    .then(produto => res.status(200).send(produto))
})

// cadastrar novo produto
router.post('/', (req, res, next) => {
    produtoController.cadastrarProduto(req.body)
    .then(produto => res.status(200).send(produto))
    .catch(next)
})

// atualizar produto
router.put('/:_id', (req, res, next) => {
    produtoController.atualizarProduto(req.params._id, req.body)
    .then(produto => res.status(200).send(produto))
    .catch(next)
})

// remover produto
router.delete('/:_id', (req, res, next) => {
    produtoController.removerProduto(req.params._id)
    .then(produto => res.status(200).send(produto))
    .catch(next)
})

export default router