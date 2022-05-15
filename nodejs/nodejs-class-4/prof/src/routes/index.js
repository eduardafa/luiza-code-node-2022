import express from 'express'
import RouterProdutos from '../produtos/produtos-routes'

const router = express.Router()

router.use('/produtos', RouterProdutos)

export default router