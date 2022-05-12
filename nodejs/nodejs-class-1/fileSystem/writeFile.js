const fs = require('fs');

const processAfterWrite = (err) => {
    console.log('The file was written!', err);
};

fs.writeFile('output.txt', 'I am a text!\n', processAfterWrite);
