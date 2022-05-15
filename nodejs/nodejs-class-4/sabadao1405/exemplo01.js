class Produto {
    static MAXIMO_PESO = 1000  // Produto.MAXIMO_PESO
    // Método construtor
    constructor(nomeInformado = null) {
        this.nome = nomeInformado
    }
    // Métodos de acesso
    get nomeMaiusculo() {
        return this.nome.toUpperCase()
    }
    // Métodos modificadores
    set nomeMinusculo(valor) {
        this.nome = valor.toLowerCase()
    } 
    // Métodos da instância (do objeto)
    informarNome() {
        return this.nome
    }
    // Métodos da classe (não precisa do objeto)
    static criarPessoaComNome(novoNome) {
        return new Produto
        (novoNome)
    }   
}

class Comestico extends Produto {
    constructor(nomeInformado, setor) {
        super(nomeInformado)
        this.setor = setor
    }
    informaNomeSetor() {
        return this.setor
    }
}

const p = new Produto()
console.log('Antes,', p.nome)
p.nome = 'po de rosto da Lorel'
console.log('Depois', p.nome)
console.log(p.nomeMaiusculo)
// console.log('mostrando nminusculo', p.nomeMinusculo)
p.nomeMinusculo = 'BATOM DA IVETE'
console.log('Evidência do minúsculo:', p.nome)
console.log('Mostrar nome(): ', p.informarNome())
const p2 = Produto.criarPessoaComNome('Maria')
console.log('P2.nome', p2.nome)

// function nomeMaiusculo2() {
//     return this.nome.toUpperCase()
// }
// p.nm2 = nomeMaiusculo2
// console.log('>>>', p.nm2())


c = new Comestico('xampu','setor 001')
console.log('Xampu é um comestico?', c instanceof Comestico)
console.log('Xampu é um produto?', c instanceof Produto)
console.log('Nome do produto', c.informarNome())
// console.log('PROduto: ', p.informaNomeSetor())
console.log('Comestico: ', c.informaNomeSetor())