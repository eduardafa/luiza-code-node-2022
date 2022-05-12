class Livro {
    constructor(livros = []) {
        this.livros = livros;
    }
    add(nomeDoLivro) {
        this.livros.push(nomeDoLivro);
    }
    pop() {
        this.livros.pop();
    }
}
function binarySearch(listaLivros, start, end, nomeDoLivro) {
    const mid = start + Math.floor((end - start) / 2);
    console.log(mid)
    if (start <= end) {
        if (listaLivros[mid] == nomeDoLivro) {
            return mid;
        }
        if (nomeDoLivro < listaLivros[mid]) {
            return binarySearch(listaLivros, start, mid - 1, nomeDoLivro);
        }
        if (nomeDoLivro > listaLivros[mid]) {
            return binarySearch(listaLivros, mid + 1, end, nomeDoLivro);
        }
    }
    // return null;
}
const listaLivros = new Livro();
listaLivros.add('Dom Casmurro');
listaLivros.add('O poder do hábito');
listaLivros.add('O milagre da manhã');
console.log(listaLivros);
console.log(binarySearch(listaLivros, 0, listaLivros.length, 'Dom Casmurro'));
