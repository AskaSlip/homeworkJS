// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
console.log('area of rectangle');
function areaOfRectangle(a, b) {
    let areaRectangle = a * b;
    console.log(areaRectangle);
    document.write(`Area of Rectangle: ${areaRectangle} <br>`)
    return areaRectangle;
}

areaOfRectangle(5, 10);


// - створити функцію яка обчислює та повертає площу кола з радіусом r
console.log('area of circle');
function areaOfCircle(r) {
    const PI = 3.14;
    let areaCircle = PI * (r ** 2);
    console.log(areaCircle);
    document.write(`Area of Circle: ${areaCircle} <br>`)
    return areaCircle;
}

areaOfCircle(2)

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
// 2πr(r + h)
console.log('area of cylinder');
function areaOfCylinder(r, h) {
    const PI = 3.14;
    let areaCylinder = 2 * PI * r * (r + h);
    console.log(areaCylinder);
    document.write(`Area of Cylinder: ${areaCylinder} <br>`)
    return areaCylinder;
}

areaOfCylinder(2, 4)

// - створити функцію яка приймає масив та виводить кожен його елемент
console.log('array elements');
let mixedArray = [
    42,
    3.14,
    "Hello, World!",
    true,
    [1, 2, 3],
    "value",
    null,
    undefined,
    6666,
    'banana'
];

function arrayElements(arr) {
    for (const arrElement of arr) {
        console.log(arrElement);
    }
}

arrayElements(mixedArray)

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент

function createParagraph (text){
    document.write(`<p>${text}</p>`)
}
createParagraph('smthg for test')

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

function createList (listItem){
    document.write(`<ul>`)
        let i = 0;
    while (i <3){
        document.write(`<li>${listItem}</li>`)
        i++;
    }
    document.write(`</ul>`)
}
createList('bark')

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

function createListWithAmountItem (amountItem,listItem){
    document.write(`<ul>`)
    let i = 0;
    while (i < amountItem){
        document.write(`<li>${listItem}</li>`)
        i++;
    }
    document.write(`</ul>`)
}
createListWithAmountItem(7,'meow')

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

let arrayWithPrimitives = [
    "apple",
    42,
    true,
    "banana",
    3.14,
    false,
    'one more'
];

function createListFromArray(arr){
    document.write(`<ul>`)
    for (let i = 0; i < arr.length; i++) {
        document.write(`<li>${arr[i]}</li>`)
    }
    document.write(`</ul>`)
}
createListFromArray(arrayWithPrimitives)

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.

let usersArray = [
    { id: 1, name: "John", age: 30 },
    { id: 2, name: "Alice", age: 25 },
    { id: 3, name: "Bob", age: 35 },
    { id: 4, name: "Eva", age: 28 },
];

function createUserBlock(arr){

    for (const user of arr) {
        document.write(`<div class="user-block">`)
        document.write(`${user.id} - ${user.name} - ${user.age} `)
        document.write(`</div>`)
    }
}
createUserBlock(usersArray)

// - створити функцію яка повертає найменьше число з масиву
console.log('the lowest number');
let numbersArray = [127, 99, 375, 8, 59, 82, 68, 84];
function searchTheLowestNumber(arr){
    let smallNumber = arr[0];
    for (const item of arr) {
        if (item < smallNumber){
            smallNumber = item;
        }
    }
    document.write(`The lowest number is:  ${smallNumber}`)
    console.log(smallNumber);
    return smallNumber;
}
searchTheLowestNumber(numbersArray)

// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13

console.log('sum array');
let arrayForSum = [44,6,2,88,34,76]
function sum(arr){
    let sum =0
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    console.log(sum);
    document.write(`<br> The sum is:  ${sum}`)
    return sum;
}
sum(arrayForSum)

// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]

console.log('swap');
let swapArray = [35,22,664,23,77,32]
console.log(swapArray);
function swap(arr,index1,index2){

        const extraItem = arr[index1]
        arr[index1] = arr [index2];
        arr[index2] = extraItem;

}
swap(swapArray,0,5)
console.log(swapArray);


// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250

console.log('exchange');

function exchange(sumUAH,currencyValues,exchangeCurrency){
    let moneyExchange;
    for (const currencyItem of currencyValues) {
        if (currencyItem.currency === exchangeCurrency){
            moneyExchange = sumUAH / currencyItem.value;
            moneyExchange = moneyExchange.toFixed(2); //чисто для красоти
            console.log('You gonna get: '+ moneyExchange + ' ' + currencyItem.currency);
        }
    }
}
exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD')
