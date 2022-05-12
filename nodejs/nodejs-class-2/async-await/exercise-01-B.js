// malu
function ehPar(numero) {
    return new Promise((res, rej) =>
        numero % 2 === 0 ? res(`Arrasou! O número ${numero} é par!`) : rej(erro)
    );
}

async function checkNumber(numero) {
    try {
        let numeroPar = await ehPar(numero);
        console.log(numeroPar);
    } catch (erro) {
        console.log('Deu errado :( Dá uma conferida onde você errou: \n', erro);
    }
}

checkNumber(20);
console.log('teste');
