let base = 1;

function duplicar(array) {
    const arrayNovo = [...array];
    for (let i = 0; i < array.length; i++) {
        arrayNovo[i] *= 2;
    }
    return arrayNovo;
}

const array = [1, 2];
const array2 = duplicar(array);

console.log(array);
console.log(array2);
