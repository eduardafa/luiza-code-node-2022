// etl (extract, transform, load)
const fs = require('fs');

function lerRegistroCSV() {
    const registroCSV =
        // nome_produto, codigo(SKU)
        'secador cabelo,a123\n' + 'myfone,mf4-444\n';
    return registroCSV;
}

function transformarCsvEmRegistro(linhaCSV) {
    const informacoes = linhaCSV.split(',');
    const nomeCsv = informacoes[0];
    const codigoCsv = informacoes[1];
    const registro = {
        nome: nomeCsv,
        código: codigoCsv,
    };
    return registro;
}

function transformarEmRegistros(registrosCSV) {
    const listaRegistrosCSV = registrosCSV.split('\n');
    console.log(listaRegistrosCSV);
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

// pegar o registro CSV e transforma-lo em um registro JSON
function executar() {
    const registroCSV = lerRegistroCSV();
    const registros = transformarEmRegistros(registroCSV);
    const registroJSON = transformarEmJSON(registros);
    console.log(registroJSON);
}

executar();

// const registroCSV =
//     // nome_produto, codigo(SKU)
//     'secador cabelo,a123\n' + 'myfone,mf4-444\n';

// const registroJSON =
//     '[{"nome": "secador cabelo", "codigo": "a123"},\n' +
//     '{"nome": "secador cabelo", "codigo": "a123"}]';
