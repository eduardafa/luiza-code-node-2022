import fetch from 'node-fetch';

setTimeout(() => console.log('Hello'), 10);

fetch('https://gorest.co.in/public/v2/users/3874')
    .then((response) => response.json())
    .then((data) => console.log(data));

console.log('what soup?');
