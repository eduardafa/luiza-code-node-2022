// closure
function geradorInc(base) {
    return function (valor) {
        return valor + base;
    };
}

function executar() {
    const inc1 = geradorInc(1);
    const inc2 = geradorInc(2);
    console.log(inc1(1));
    console.log(inc2(2));
}

executar();
