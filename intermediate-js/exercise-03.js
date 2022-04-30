/**
 * exercise 03 - spread and rest operator
 * const person = {
 *  firstName: "John",
 *  lastName: "Doe",
 *  age: 30,
 *  country: "Brazil",
 *  city: "São Paulo"
 *  state: "SP",
 *  postalCode: "01001001",
 *  neighbohur: "Centro"
 * }
 *
 * Dado o objeto acima, extraia os dados pessoais de John e todo restante (endereço) em uma variável
 * chamada endereco, ao final desse exercício, você deve ter apenas 4 variáveis
 */

const person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 30,
    country: 'Brazil',
    city: 'São Paulo',
    state: 'SP',
    postalCode: '01001001',
    neighborhood: 'Centro',
};

const { firstName, lastName, age, ...address } = person;

console.log(firstName, lastName, age, address);
