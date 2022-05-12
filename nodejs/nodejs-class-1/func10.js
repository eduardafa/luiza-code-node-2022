// comissao
// se a pessoa for um vendedor - comissao = 10% da venda
// se for supervisor - comissao = 20% da venda

function executar() {
    const tipoVendedor = 'vendedor'; // supervisor
    const valorVenda = 1000;
    const valorDaComissao = calcularComissao(tipoVendedor, valorVenda);
    console.log('Valor da comissao: ', valorDaComissao);
}

function calcularComissao(tipoVendedor, valorVenda) {
    if (tipoVendedor === 'vendedor') {
        return valorVenda * 0.1;
    }
    return valorVenda * 0.2;
}

executar();
