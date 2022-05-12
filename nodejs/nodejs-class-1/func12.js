// comissao
// se a pessoa for um vendedor - comissao = 10% da venda
// se for supervisor - comissao = 20% da venda

function calcularComissaoVendedor(valorVenda) {
    return valorVenda * 0.1;
}

function calcularComissaoSupervisor(valorVenda) {
    return valorVenda * 0.2;
}

function geradorCalculadorComissao(tipoVendedor) {
    return tipoVendedor === 'vendedor'
        ? calcularComissaoVendedor
        : calcularComissaoSupervisor;
}

function executar() {
    const tipoVendedor = 'supervisor'; // supervisor
    const valorVenda = 1000;
    const calcularComissao = geradorCalculadorComissao(tipoVendedor);
    const valorDaComissao = calcularComissao(valorVenda);
    console.log('Valor da comissao: ', valorDaComissao);
}

executar();
