function lerRegistroCSV() {
    const registroCSV =
        // nome produto,codigo(SKU)
        'secador cabelo,a123\n' + 'myfone,mf4-444\n';
    return registroCSV;
}
function transformarCsvEmRegistro(linhaCSV) {
    const informacoes = linhaCSV.split(',');
    // const [nome , codigo] = informacoes
    const nomeCsv = informacoes[0];
    const codigoCsv = informacoes[1];
    const registro = {
        nome: nomeCsv,
        codigo: codigoCsv,
    };
    return registro;
}
function transformarEmRegistros(registrosCSV) {
    const listaRegistrosCSV = registrosCSV.split('\n');
    const listaRegistros = [];
    for (let i = 0; i < listaRegistrosCSV.length; i++) {
        const linhaCSV = listaRegistrosCSV[i];
        if (!linhaCSV) {
            continue;
        }
        const registro = transformarCsvEmRegistro(linhaCSV);
        listaRegistros.push(registro);
    }
    return listaRegistros;
}
function transformarEmJSON(registros) {
    return JSON.stringify(registros);
}
// Pegar o registro CSV e transformá-lo em um registro JSON
function executar() {
    const registroCSV = lerRegistroCSV();
    const registros = transformarEmRegistros(registroCSV);
    const registroJSON = transformarEmJSON(registros);
    console.log(registroJSON);
}
executar();
