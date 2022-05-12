// closure
function fachadaMongo(configuracao) {
    const configuracaoMongo = configuracao;
    return function (colecao, registro) {
        console.log(
            'Salvar Mongo (',
            configuracaoMongo,
            '): ',
            colecao,
            registro
        );
    };
}

const salvarMongo = fachadaMongoSalvar({
    url: 'mongodb',
    conectarPreguicoso: true,
});
salvarMongo('pessoa', { nome: 'aline vianna', idade: 18 });
