let name = 'John Doe';
let age = 30;
let isMarried = false;
let hobbies = ['reading', 'writing', 'coding'];

console.log(name);
console.log(age);
console.log(isMarried);
console.log(hobbies);

// Conditional Statements
let hour = 12;
if (hour < 12) {
    console.log('Good morning!');
} else if (hour === 12) {
    console.log('Good noon!');
} else {
    console.log('Good evening!');
}

// Loops
for (let i = 0; i < 5; i++) {
    console.log(i);
}

let j = 0;
while (j < 5) {
    console.log(j);
    j++;
}

// Functions
function greet(name) {
    console.log(`Hello, ${name}!`);
}

greet('John');

function add(a, b) {
    return a + b;
}

console.log(add(2, 3));

// Arrays
let numbers = [1, 2, 3, 4, 5];
console.log(numbers);

numbers.push(6);
console.log(numbers);

numbers.pop();
console.log(numbers);

// Objects
let person = {
    name: 'John Doe',
    age: 30,
    occupation: 'Software Developer'
};

console.log(person);

person.country = 'USA';
console.log(person);

delete person.age;
console.log(person);

// DOM Manipulation
document.querySelector('h1').innerHTML = 'New Heading';

document.querySelector('button').addEventListener('click', function() {
    alert('Button clicked!');
});

// Event Listeners
document.addEventListener('DOMContentLoaded', function() {
    console.log('Document loaded!');
});

// Classes
class Car {
    constructor(brand, model, year) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }

    startEngine() {
        console.log('Engine started!');
    }
}

let myCar = new Car('Toyota', 'Camry', 2020);
console.log(myCar);

myCar.startEngine();

// Async/Await
async function fetchData() {
    try {
        let response = await fetch('https://jsonplaceholder.typicode.com/posts');
        let data = await response.json();
        console.log(data);
    } catch (error) {
        console.error(error);
    }
}
