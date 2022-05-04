function showConsole(result) {
    console.log(`The sum result is ${result}.`);
}

function showAlert(result) {
    alert(`The sum result is ${result}.`);
}

function doSum(valueOne, valueTwo, callback) {
    let result = valueOne + valueTwo;
    callback(result);
}

doSum(10, 20, showAlert);
doSum(1352, 1524, showConsole);
doSum(1, 1, showConsole);
