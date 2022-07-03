import { ListTemplate } from "./classes/ListTemplate.js";
import { Invoice } from "./classes/Invoice.js";
import { Payment } from "./classes/Payment.js";
import { HasFormatter } from "./interfaces/HasFormatter.js";

const form = document.querySelector('.new-item-form') as HTMLFormElement; // This is a type cast.

// inputs
const type = document.querySelector('#type') as HTMLSelectElement;
const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

// list template instance
const ul = document.querySelector('ul')!;
const list = new ListTemplate(ul);

form.addEventListener('submit', (e: Event) => {
  e.preventDefault();

  let values: [string, string, number];
  values = [tofrom.value, details.value, amount.valueAsNumber];
  let doc: HasFormatter;
  if (type.value === 'invoice') {
    doc = new Invoice(...values);
  } else {
    doc = new Payment(...values);
  }

  list.render(doc, type.value, 'end');
});

// Generics

const addUID = <T extends object>(obj: T) => {
  let uid = Math.floor(Math.random() * 100);
  return { ...obj, uid };
}

let docOne = addUID({ name: 'Max', age: 30 });

console.log(docOne.name);

// with Interfaces
interface Resource<T> {
  uid: number;
  resourceName: string;
  data: T;
}

// example 1
const docThree: Resource<object> = {
  uid: 1,
  resourceName: 'person',
  data: { name: 'John' }
}

const docFour: Resource<string[]> = {
  uid: 2,
  resourceName: 'people',
  data: ['Max', 'Anna', 'Chris']
}

console.log(docThree, docFour);

// Enums
enum ResourceType {
  BOOK, AUTHOR, PUBLISHER
}

interface Resources<T> {
  uid: number;
  resourceType: ResourceType;
  data: T;
}

const doc1: Resources<object> = {
  uid: 1,
  resourceType: ResourceType.BOOK,
  data: { name: 'Book 1' }
}

const doc2: Resources<object> = {
  uid: 4,
  resourceType: ResourceType.AUTHOR,
  data: { name: 'Mario' }
}

console.log(doc1, doc2);

// Tuples
let arr = ['Max', 30, true];
arr[0] = false;
arr[1] = 'Anna';
arr = [34, false, 'Mario'];

let tup: [string, number, boolean];
tup = ['Max', 30, true];
// tup[0] = 30; // error
// tup[1] = 'Anna'; // error
// tup = [34, false, 'Mario']; // error
tup[2] = false; // ok

let student: [string, number]; // This is a tuple type.
student = ['Max', 30];



const invOne = new Invoice('mario', 'work on the mario website', 250);
const invTwo = new Invoice('luigi', 'work on the luigi website', 300);
console.log(invOne, invTwo);

let invoices: Invoice[] = [];
invoices.push(invOne);
invoices.push(invTwo);

invoices.forEach(inv => {
  console.log(inv.client, inv.amount, inv.format());
});
interface IsPerson {
  name: string;
  age: number;
  speak(a: string): void;
  spend(a: number): number;
}

const me: IsPerson = {
  name: 'Max',
  age: 30,
  speak(text: string): void {
    console.log(text);
  },
  spend(amount: number): number {
    console.log('I spent', amount);
    return amount;
  }
};

let someone: IsPerson;
const greetPerson = (person: IsPerson) => {
  console.log('Hello ', person.name);
}

greetPerson(me);

