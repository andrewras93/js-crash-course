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

// Loops
for(let i=0; i<=10; i++){
    console.log(`For Loop Number ${i}`);
}

let i = 0;

while (i < 10){
    console.log(`While Loop Number ${i}`);
    i++;
}

for(let i = 0; i < todos.length; i++){
    console.log(todos[i].text);
}

for(let todo of todos){
    console.log(todo.id);
}

// High order array methods - anbefales når der skal arbejdes med arrays.

// forEach
todos.forEach(function(todo){
    console.log(todo.text);
});

// map
const todoText = todos.map(function(todo){
    return todo.text;
});

console.log(todoText);

// filter
/*const todoCompleted = todos.filter(function(todo){
    return todo.isCompleted === true;
});

console.log(todoCompleted);*/

const todoCompleted = todos.filter(function(todo){
    return todo.isCompleted === true;
}).map(function(todo){
    return todo.text;
});

console.log(todoCompleted);

// Conditions
const x2 = 20;
const y2 = 11;

if(x2 == 10){ // '==' kigger ikke på data typen, men kun værdien, så hvis x2 var en string ville den stadig gå igennem. Derfor vigtigt at bruge '==='.
    console.log(`x2 is 10`);
}

if(x2 === 10){
    console.log(`x2 is 10`);
} else if(x2 > 10){
    console.log(`x2 is greater than 10`)
} else {
    console.log(`x2 is less than 10`);
}

if(x2 > 5 || y2 > 10){
    console.log(`x2 is more than 5 or y2 is more than 10`);
}

if(x2 > 5 && y2 > 10){
    console.log(`x2 is more than 5 and y2 is more than 10`);
}

// Ternary operator
const x3 = 10;

const color = x3 > 10 ? 'red' : 'blue';

console.log(color);

// Switches
switch (color){
    case 'red':
        console.log(`Color is red`);
        break;
    case 'blue':
        console.log(`Color is blue`);
        break;
    default:
        console.log(`Color is NOT red or blue`);
        break;
}

// Functions
function addNums(num1 = 1, num2 = 1){
    return num1 + num2;
}

console.log(addNums(5,5));

const subtNums = (num3 = 1, num4 = 1) => num3 - num4;

console.log(subtNums(5, 5));