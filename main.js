// Variables

// var, let, const
// var = globally scoped
// let & const = block-level scope

// Data types
// String, Numbers, Boolean, null, undefined, Symbol

const name = 'John';
const age = 30;
const rating = 4.5;
const isCool = true;
const x = null;
const y = undefined;
let z;

// Concatenation
console.log('My name is ' + name + ' and I am ' + age);
// Template String
const hello = `My name is ${name} and I am ${age}`

console.log(hello);

// String property & methods
const s = 'Hello World';

console.log(s.length);
console.log(s.toUpperCase());
console.log(s.toLowerCase());
console.log(s.substring(0, 5)); // Trækker noget af stringen fra, starter ved 0 og slutter ved 5, så der kommer kun til at stå Hello (med mellemrum).
console.log(s.substring(0, 5).toUpperCase());
console.log(s.split('')); // Laver et array med 11 'felter' og hvert bogstav i sit eget felt.

// Arrays - variables that hold multiple values

const numbers = new Array(1,2,3,4,5); // 'new' betyder det er en constructer.
const fruits = ['apples', 'oranges', 'pears'];

console.log(numbers);
console.log(fruits);

console.log(fruits[1]); // Arrays starter altid fra 0 (apples = 0, oranges = 1, pears = 2).

fruits[3] = 'grapes';
fruits.push('mangos'); // Indsætter værdien til sidst i arrayet.

fruits.unshift('strawberries'); // Indsætter værdien i starten af arrayet.

fruits.pop(); // Fjerner den sidste værdi i arrayet.

console.log(Array.isArray(fruits));

console.log(fruits);

console.log(fruits.indexOf('oranges'));