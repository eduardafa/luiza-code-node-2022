// comissao
// se a pessoa for um vendedor - comissao = 10% da venda
// se for supervisor - comissao = 20% da venda

function calcularComissaoVendedor(valorVenda) {
    return valorVenda * 0.1;
}

function calcularComissaoSupervisor(valorVenda) {
    return valorVenda * 0.2;
}

function executar() {
    const tipoVendedor = 'vendedor'; // supervisor
    const valorVenda = 1000;
    const valorDaComissao = calcularComissao(tipoVendedor, valorVenda);
    console.log('Valor da comissao: ', valorDaComissao);
}

// function calcularComissao(tipoVendedor, valorVenda) {
//     if (tipoVendedor === 'vendedor') {
//         return calcularComissaoVendedor(valorVenda);
//     }
//     return calcularComissaoSupervisor(valorVenda);
// }

function calcularComissao(tipoVendedor, valorVenda) {
    return tipoVendedor === 'vendedor'
        ? calcularComissaoVendedor(valorVenda)
        : calcularComissaoSupervisor(valorVenda);
}

executar();
