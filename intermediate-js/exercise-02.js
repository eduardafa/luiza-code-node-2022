/**
 * exercise 02 - destructuring
 * const person = {
 *  firstName: "John",
 *  lastName: "Doe"
 * };
 *
 * Dado o objeto acima, extraia cada propriedade com destructuring
 */

const person = {
    firstName: 'John',
    lastName: 'Doe',
};

const { firstName, lastName } = person;

console.log(firstName, lastName);
