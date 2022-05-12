// bruna
function somResultPar(numero1, numero2) {
    return new Promise(function (resolve, reject) {
        let result = numero1 + numero2;
        if (result % 2 === 0) {
            resolve(
                'Operação concluída ',
                console.log(`O resultado da soma é:  ${result}`)
            );
        } else {
            reject('O resultado da soma não é par, erro na operação');
        }
    });
}
async function executar(num1, num2) {
    try {
        const somaRecebida = await somResultPar(num1, num2);
        console.log(somaRecebida);
    } catch (error) {
        console.log(error);
    }
}
executar(1, 20);
