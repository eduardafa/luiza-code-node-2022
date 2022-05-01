/**
 * exercise 01 - regex
 * escreva uma função (arrow function) que irá receber os parâmetros cpf, data de nascimento e cep (todos em string)
 * e sem formatação, formate-os com regex e exiba no console
 */

// validation by groups
// CPF
const regCpf = /^(\d{3})(\d{3})(\d{3})(\d{2})$/gim;
// birth date
// This configuration returns the formatted date only if the input is a valid date. Otherwise, the output will be equal to the input, e.i., without formatting.
const regBirthDate = /^([0-2][0-9]|[3][0-1])([0][1-9]|[1][0-2])(\d{4})$/gim;
// CEP
const regCep = /^(\d{2})(\d{3})(\d{3})$/gim;

const person = (cpf, birthDate, cep) => {
    let formCpf = cpf.replace(regCpf, '$1.$2.$3-$4');
    let formBirthDate = birthDate.replace(regBirthDate, '$1/$2/$3');
    let formCep = cep.replace(regCep, '$1.$2-$3');

    console.log(
        `The CPF is ${formCpf}, the birth date is ${formBirthDate} and the CEP is ${formCep}!`
    );
};

// person('cpf', 'birthDate', 'cep')
person('12345678900', '15011994', '95630000');
// output: The CPF is 123.456.789-00, the birth date is 15/01/1994 and the CEP is 95.630-000!

// simulating a wrong input for the birth date (month: 15)
// input: person('12345678900', '15151994', '95630000');
// output: The CPF is 123.456.789-00, the birth date is 15151994 and the CEP is 95.630-000!
