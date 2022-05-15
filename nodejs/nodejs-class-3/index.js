import express from 'express';
import productsRoutes from '../src/routes/productsRoutes.js';

const router = express.Router();

app.get('/', (req, res, next) => res.send('Ola luiza code. '));

app.get('/teste', (req, res, next) => res.send('Ola teste.'));

app.post('/teste2', (req, res, next) => {
    console.log('Conteudo da requisicao.', req.body);
    res.send('Ola teste.');
});

export default router;
