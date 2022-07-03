import { Invoice } from "./classes/Invoice.js";
import { Payment } from "./classes/Payment.js";
import { HasFormatter } from "./interfaces/HasFormatter.js";

let docOne: HasFormatter;
let docTwo: HasFormatter;

docOne = new Invoice('Yoshi', 'web work', 250);
docTwo = new Payment('Mario', 'plumbing work', 200);

let docs: HasFormatter[] = [];
docs.push(docOne);
docs.push(docTwo);

console.log(docs);

// const anchor = document.querySelector('a');
// console.log(anchor);

// console.log(anchor.href); // This is an error, because anchor could be null and there is no href property on null

// if(anchor) {
//   console.log(anchor.href); // This is fine.
// }

// To eliminate the error we can use !
// const anchor2 = document.querySelector('a')!;
// console.log(anchor2);

// const form = document.querySelector('form')!;
// const form2 = document.querySelector('.new-item-form')!; // In this case TS doesn't know what type of element it is.
const form3 = document.querySelector('.new-item-form') as HTMLFormElement; // This is a type cast.

// console.log(form3.children);

// inputs
const type = document.querySelector('#type') as HTMLSelectElement;
const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

form3.addEventListener('submit', (e: Event) => {
  e.preventDefault();

  let doc: HasFormatter;
  if (type.value === 'invoice') {
    doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber);
  } else {
    doc = new Payment(tofrom.value, details.value, amount.valueAsNumber);
  }

  console.log(doc);
});

// Classes

const invOne = new Invoice('mario', 'work on the mario website', 250);
const invTwo = new Invoice('luigi', 'work on the luigi website', 300);
console.log(invOne, invTwo);

let invoices: Invoice[] = [];
invoices.push(invOne);
invoices.push(invTwo);
// console.log(invoices);

invoices.forEach(inv => {
  console.log(inv.client, inv.amount, inv.format());
});

// access modifiers
// readonly
// private
// public, default

// Interfaces
// Interfaces are a way to describe the shape of an object.
// They are used to describe the shape of an object, but not the object itself.
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

console.log(me);

let someone: IsPerson;
const greetPerson = (person: IsPerson) => {
  console.log('Hello ', person.name);
}

greetPerson(me);

