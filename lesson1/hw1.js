// - Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
// Вивести кожну змінну за допомогою: console.log

let greeting = 'hello';
console.log(greeting);
let school = 'owu';
console.log(school);
let dom  = 'com';
console.log(dom);
let country  = 'ua';
console.log(country);
let x = 1;
console.log(x);
let y = 10;
console.log(y);
let z = -999;
console.log(z);
let num = 123;
console.log(num);
const PI = 3.14;
console.log(PI);
let num1 = 2.7;
console.log(num1);
let num2 = 16;
console.log(num2);
let pros = true;
console.log(pros);
let cons = false;
console.log(cons);




//- Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ. З'єднати їх в одну змінну person (Не об'єкт, просто за допомоги конкатенації)

let firstName = 'Hanna';
let middleName = 'Volodumurivna';
let lastName = 'Slipchenko';
let person = lastName + ' ' + firstName + ' ' + middleName;
console.log(person);


//- За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
//   let a = 100; let b = '100'; let c = true;

let a = 100;
console.log(typeof a);
let b = '100';
console.log(typeof b);
let c = true;
console.log(typeof c);



//- За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками. та вивести в консоль

let name = prompt('enter your name');
let fName = prompt('enter your middle name');
let age = prompt('enter your age')
console.log(name, fName, age);