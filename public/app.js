import { Invoice } from "./classes/Invoice.js";
import { Payment } from "./classes/Payment.js";
let docOne;
let docTwo;
docOne = new Invoice('Yoshi', 'web work', 250);
docTwo = new Payment('Mario', 'plumbing work', 200);
let docs = [];
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
const form3 = document.querySelector('.new-item-form'); // This is a type cast.
// console.log(form3.children);
// inputs
const type = document.querySelector('#type');
const tofrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
form3.addEventListener('submit', (e) => {
    e.preventDefault();
    let doc;
    if (type.value === 'invoice') {
        doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber);
    }
    else {
        doc = new Payment(tofrom.value, details.value, amount.valueAsNumber);
    }
    console.log(doc);
});
// Classes
const invOne = new Invoice('mario', 'work on the mario website', 250);
const invTwo = new Invoice('luigi', 'work on the luigi website', 300);
console.log(invOne, invTwo);
let invoices = [];
invoices.push(invOne);
invoices.push(invTwo);
// console.log(invoices);
invoices.forEach(inv => {
    console.log(inv.client, inv.amount, inv.format());
});
const me = {
    name: 'Max',
    age: 30,
    speak(text) {
        console.log(text);
    },
    spend(amount) {
        console.log('I spent', amount);
        return amount;
    }
};
console.log(me);
let someone;
const greetPerson = (person) => {
    console.log('Hello ', person.name);
};
greetPerson(me);
