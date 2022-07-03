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
}

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
}

// explicit types
let character: string;
let age: number;
age = 30.32;

// arrays
let ninjas: string[] = [];
let ages: number[] = [];

// union types
let mixedArray: (string | number)[] = [];
mixed.push('sam');
mixed.push(2);

// objects
let ninjaOne: object;
ninjaOne = { name: 'ken', age: 30 };
ninjaOne = [];

let ninjaTwo: {
  name: string,
  age: number,
  belt: string
}

// any type
let ageOne: any;
ageOne = 30;
ageOne = '30';
ageOne = true;
ageOne = [];
ageOne = {};

// tss congifuration
let name2: string = 'ken';
console.log(name2);

// Type function
let greet = () => {
  console.log("Hello World!");
}

let greet2: Function;
greet2 = () => {
  console.log("Hello World 2");
}

const add = (a: number, b: number, c?: number | string) => {
  console.log(a + b);
  return a + b;
}

add(5, 10);

const minus = (a: number, b: number) => {
  return a - b;
}

let result = minus(10, 7);
console.log(result);

// Type alias
type StringOrNumber = string | number;
const logDetails = (uid: StringOrNumber, item: string) => {
  console.log(`${item} has a uid of ${uid}`);
}

const greeting = (user: { name: string, uid: string | number}) => {
  console.log(`Hello ${user.name}`);
}

type objWithName = { name: string, uid: StringOrNumber };

const greetingAgain = (user: objWithName) => {
  console.log(`Hello ${user.name}`);
}

// Function signature
let f: (a: string, b: string) => void;
// example 1
f = (name: string, greeting: string) => {
  console.log(`${name} says ${greeting}`);
}

// example 2
let calc: (a: number, b: number, c: string) => number;

calc = (numOne: number, numTwo: number, operation: string) => {
  if (operation === 'add') {
    return numOne + numTwo;
  } else {
    return numOne - numTwo;
  }
}

// example 3
let logDetail: (obj: {name: string, age: number}) => void;

logDetail = (user: { name: string, age: number }) => {
  console.log(`${user.name} is ${user.age} years old`);
}

// in other words, we can use the same function signature for different types of functions
type person = { name: string, age: number };

logDetail = (user: person) => {
  console.log(`${user.name} is ${user.age} years old`);
}
