// isis
const verificarEhPar = (number) =>
    new Promise((resolve, reject) =>
        number % 2 === 0
            ? resolve('Operação concluída. O número somado é ' + number)
            : reject(error)
    );
const somarNumeros = async (number1, number2) => {
    const soma = number1 + number2;
    try {
        let numeroPar = await verificarEhPar(soma);
        console.log(numeroPar);
    } catch (error) {
        console.log('A operação deu erro. A soma não resultou um número par.');
    }
};
somarNumeros(10, 1);
