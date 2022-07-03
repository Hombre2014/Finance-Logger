"use strict";
//  arrays
let names = ['John', 'Jane', 'Mary', 'Mark', 'Bob'];
names.push('Sam');
// names.push(3);
let mixed = ['ken', 3, 'jane', 'mark', 'bob'];
mixed.push('sam');
mixed.push(2);
mixed[0] = 5;
mixed[1] = 'sam';
// objects
let ninja = {
    name: 'mario',
    belt: 'black',
    age: 30
};
ninja.name = 'ken';
ninja.age = 40;
ninja.belt = 'green';
// ninja.name = 45;
// ninja.age = '40';
// ninja.skills = ['html', 'css', 'javascript'];
// ninja = 'object';
ninja = {
    name: 'ken',
    belt: 'orange',
    age: 40,
};
// explicit types
let character;
let age;
age = 30.32;
// arrays
let ninjas = [];
let ages = [];
// union types
let mixedArray = [];
mixed.push('sam');
mixed.push(2);
// objects
let ninjaOne;
ninjaOne = { name: 'ken', age: 30 };
ninjaOne = [];
let ninjaTwo;
// any type
let ageOne;
ageOne = 30;
ageOne = '30';
ageOne = true;
ageOne = [];
ageOne = {};
// tss congifuration
let name2 = 'ken';
console.log(name2);
// Type function
let greet = () => {
    console.log("Hello World!");
};
let greet2;
greet2 = () => {
    console.log("Hello World 2");
};
const add = (a, b, c) => {
    console.log(a + b);
    return a + b;
};
add(5, 10);
const minus = (a, b) => {
    return a - b;
};
let result = minus(10, 7);
console.log(result);
const logDetails = (uid, item) => {
    console.log(`${item} has a uid of ${uid}`);
};
const greeting = (user) => {
    console.log(`Hello ${user.name}`);
};
const greetingAgain = (user) => {
    console.log(`Hello ${user.name}`);
};
// Function signature
let f;
// example 1
f = (name, greeting) => {
    console.log(`${name} says ${greeting}`);
};
// example 2
let calc;
calc = (numOne, numTwo, operation) => {
    if (operation === 'add') {
        return numOne + numTwo;
    }
    else {
        return numOne - numTwo;
    }
};
// example 3
let logDetail;
logDetail = (user) => {
    console.log(`${user.name} is ${user.age} years old`);
};
logDetail = (user) => {
    console.log(`${user.name} is ${user.age} years old`);
};
