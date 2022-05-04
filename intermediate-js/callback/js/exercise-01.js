function showConsole(result, operation) {
    console.log(`The result of the ${operation} is ${result}.`);
}

function showAlert(result, operation) {
    alert(`The result of the ${operation} is ${result}.`);
}

function sum(value1, value2, myFunction, operation = 'sum') {
    let sumResult = value1 + value2;
    myFunction(sumResult, operation);
}

function multi(value1, value2, myFunction, operation = 'multiplication') {
    let multiResult = value1 * value2;
    myFunction(multiResult, operation);
}

//
sum(10, 20, showConsole);
multi(50, 2, showAlert);
