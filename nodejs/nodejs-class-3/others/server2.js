import express from 'express';
import bodyParser from 'body-parser';

const app = express();

// app.use(bodyParser.json());

// app.use(bodyParser.urlencoded({ extended: false }));

const json = bodyParser.json();

const urlEncoded = bodyParser.urlencoded({ extended: false });

const myLogger = (req, res, next) => {
    console.log('Executing the log...');
    next();
};

app.get('/', json, myLogger, (req, res, next) => {
    res.send('Hello, Luiza code!');
});

app.get('/test', (req, res, next) => {
    res.send('Hello... Testing...');
});

app.get('/test2', urlEncoded, myLogger, (req, res, next) => {
    console.log('Request content: ', req.body);
    res.send('Hello... Testing...');
});

app.listen(3000, () => {
    console.log('The server is running at http://localhost:3000');
});
