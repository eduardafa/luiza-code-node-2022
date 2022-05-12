const fs = require('fs');

fs.appendFile('output.txt', 'this is a test', (err) => {
    if (err) throw err;
    console.log('The "message.txt" was appended to file!');
});
