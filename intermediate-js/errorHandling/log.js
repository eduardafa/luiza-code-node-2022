const fs = require('fs');

const saveError = (errorObject) => {
    const date = new Date().toJSON();
    const errorString = JSON.stringify(errorObject, null, 2);
    fs.writeFile(`${date}.json`, errorString, (err) => {
        if (err) return console.log(err);
    });
};
