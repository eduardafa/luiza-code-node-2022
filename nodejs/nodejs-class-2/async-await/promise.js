import fetch from 'node-fetch';

const endPoints = [
    'https://gorest.co.in/public/v2/users/3874',
    'https://gorest.co.in/public/v2/users/3872',
    'https://gorest.co.in/public/v2/users/3871',
    'https://gorest.co.in/public/v2/users/3869',
];

const promises = endPoints.map((url) => fetch(url).then((res) => res.json()));

Promise.all(promises).then((response) => console.log(response));
