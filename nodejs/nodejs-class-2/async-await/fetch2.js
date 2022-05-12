import fetch from 'node-fetch';

// setTimeout(() => console.log('Hello'), 10);

fetch('https://gorest.co.in/public/v2/users/3874')
    .then((response) => response.json())
    .then((data) => console.log('Result...', data))
    .then(() => {
        throw new Error('Erro forçado');
    })
    .catch((err) => {
        console.log('Erro...', err);
    });

// console.log('what soup?');
