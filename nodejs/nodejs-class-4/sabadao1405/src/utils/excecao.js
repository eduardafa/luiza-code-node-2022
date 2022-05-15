class AplicacaoExcecao extends Error {
}
class FaltaCampoExcecao extends AplicacaoExcecao {
    // Falta alguma campo para determinado cadastro 
    constructor(campoFaltante=null) {
        super(`Falta o campo ${campoFaltante}`)
        this.campoFaltante = campoFaltante
    }
}
module.exports = {
    FaltaCampoExcecao
}