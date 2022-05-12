const fs = require('fs');

function processFile(error, data) {
    if (error) {
        console.error('Fail to process file...', error);
        return;
    }
    console.log('File loaded successfully...', data);
    register = JSON.parse(data);
    console.log('In register: ', register);
}

fs.readFile('file.json', 'utf-8', processFile);
