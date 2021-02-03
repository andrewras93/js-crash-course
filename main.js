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

// Object literals

const person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 30,
    hobbies: ['music', 'movies', 'sports'],
    address: {
        street: '50 main st',
        city: 'Boston',
        state: 'MA'
    }
}

person.email = 'john@gmail.com';

console.log(person);
console.log(person.firstName, person.lastName);
console.log(person.hobbies.indexOf('movies'));
console.log(person.hobbies[1]);
console.log(person.address.city);

// Destructuring
const {firstName, lastName, address: {city}} = person; // Trækker firstName, lastName og city værdierne ud af person, så vi kan tilgå dem direkte.

console.log(firstName);
console.log(city);

// Array of objects
const todos = [
    {
        id: 1,
        text: 'Take out trash',
        isCompleted: true
    },
    {
        id: 2,
        text: 'Meeting with boss',
        isCompleted: true
    },
    {
        id: 3,
        text: 'Dentist appt',
        isCompleted: false
    },
];

console.log(todos);
console.log(todos[1].text);

// JSON - data format, bruges oftes til fullstack development i form af API'er. Når man sender og modtager data fra en server er det typisk i JSON format.
// Skal have "" om variablerne og strings, i stedet for ''.

const todoJSON = JSON.stringify(todos); // Måde man kan sende data til en server på.

console.log(todoJSON);