import express from 'express';
import ProductController from '../products/productController.js';

const router = express.Router();

const productController = new ProductController();

router.get('/', (req, res) => productController.get(req, res));

export default router;
