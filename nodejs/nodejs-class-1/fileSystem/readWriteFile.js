const fs = require('fs');
// ler do arquivo produto.csv
// transformar e salvar no arquivo produto.json
function lerRegistroCSV(processarRegistroCSV) {
    const nomeArquivoCSV = 'produtos.csv';
    fs.readFile(nomeArquivoCSV, processarRegistroCSV);
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
function gravarArquivoJSON(textoJSON) {
    const fnErro = (erro) => {
        if (erro) {
            console.error('Erro escrever JSON', errr);
        }
    };
    fs.writeFile('produtos.json', textoJSON, fnErro);
}
function processarRegistroCSV(erro, textoCSV) {
    if (erro) {
        console.error('Falha abrir arquivo CSV:', erro);
        return;
    }
    const registros = transformarEmRegistros('' + textoCSV);
    const registroJSON = transformarEmJSON(registros);
    gravarArquivoJSON(registroJSON);
}
// Pegar o registro CSV e transformá-lo em um registro JSON
function executar() {
    lerRegistroCSV(processarRegistroCSV);
}
executar();
