import { ListTemplate } from "./classes/ListTemplate.js";
import { Invoice } from "./classes/Invoice.js";
import { Payment } from "./classes/Payment.js";
const form = document.querySelector('.new-item-form'); // This is a type cast.
// inputs
const type = document.querySelector('#type');
const tofrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
// list template instance
const ul = document.querySelector('ul');
const list = new ListTemplate(ul);
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let values;
    values = [tofrom.value, details.value, amount.valueAsNumber];
    let doc;
    if (type.value === 'invoice') {
        doc = new Invoice(...values);
    }
    else {
        doc = new Payment(...values);
    }
    list.render(doc, type.value, 'end');
});
// Generics
const addUID = (obj) => {
    let uid = Math.floor(Math.random() * 100);
    return Object.assign(Object.assign({}, obj), { uid });
};
let docOne = addUID({ name: 'Max', age: 30 });
console.log(docOne.name);
// example 1
const docThree = {
    uid: 1,
    resourceName: 'person',
    data: { name: 'John' }
};
const docFour = {
    uid: 2,
    resourceName: 'people',
    data: ['Max', 'Anna', 'Chris']
};
console.log(docThree, docFour);
// Enums
var ResourceType;
(function (ResourceType) {
    ResourceType[ResourceType["BOOK"] = 0] = "BOOK";
    ResourceType[ResourceType["AUTHOR"] = 1] = "AUTHOR";
    ResourceType[ResourceType["PUBLISHER"] = 2] = "PUBLISHER";
})(ResourceType || (ResourceType = {}));
const doc1 = {
    uid: 1,
    resourceType: ResourceType.BOOK,
    data: { name: 'Book 1' }
};
const doc2 = {
    uid: 4,
    resourceType: ResourceType.AUTHOR,
    data: { name: 'Mario' }
};
console.log(doc1, doc2);
// Tuples
let arr = ['Max', 30, true];
arr[0] = false;
arr[1] = 'Anna';
arr = [34, false, 'Mario'];
let tup;
tup = ['Max', 30, true];
// tup[0] = 30; // error
// tup[1] = 'Anna'; // error
// tup = [34, false, 'Mario']; // error
tup[2] = false; // ok
let student; // This is a tuple type.
student = ['Max', 30];
const invOne = new Invoice('mario', 'work on the mario website', 250);
const invTwo = new Invoice('luigi', 'work on the luigi website', 300);
console.log(invOne, invTwo);
let invoices = [];
invoices.push(invOne);
invoices.push(invTwo);
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
let someone;
const greetPerson = (person) => {
    console.log('Hello ', person.name);
};
greetPerson(me);
