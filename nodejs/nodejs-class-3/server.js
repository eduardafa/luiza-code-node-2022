import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';

const mongoDB = 'mongodb://127.0.01/my_database';

mongoose.connect(mongoDB, { useNewUrlParse: true });

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Erro na conexão com o MongoDB'));

// const app = express();
// const port = 3000;

// app.use(bodyParser.json());

// http://localhost:3000/
// hostgator.com/minha-app/

// const myLogger = (req, res, next) => {
//     console.log('Logando alguma informação');
//     next();
// };

// const verificarIdentidade = (req, res, next) => {
//     console.log('Estou verificando sua identidade');
//     next();
// };

// // app.use(myLogger);
// // app.use(verificarIdentidade);

// app.get('/', myLogger, (req, res) => {
//     res.send('Ola, Luiza code!');
// });

// app.get('/products', (req, res) => {
//     res.send('meu produto');
// });

// app.get('/xpto', (req, res) => {
//     res.send('meu xpto');
// });

// app.post('/products', (req, res) => {
//     console.log(req.body);
//     res.send('ola luiza code');
// });

app.listen(port, () => {
    console.log('The server is running at http://localhost:3000');
});
