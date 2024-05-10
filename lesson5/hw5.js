// ВСЕ ЗРОБИТИ СТРІЛОЧНИМИ ФУНКЦІЯМИ!
//     - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
console.log('area of rectangle');
const areaRectangle = (a ,b) => a * b;
console.log(areaRectangle(4,5));

// - створити функцію яка обчислює та повертає площу кола з радіусом r

console.log('area of circle');
const areaCircle = (r) => {
    const PI = 3.14;
    return areaC = PI * (r ** 2);

}
console.log(areaCircle(2));


// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

console.log('area of cylinder');
const areaCylinder = (r,h) => {
    const PI = 3.14;
    return areaCy = 2 * PI * r * (r + h);

}

console.log(areaCylinder(2,4));


// - створити функцію яка приймає масив та виводить кожен його елемент

console.log('items of array');
const allItems = (arr) => {
    for (const item of arr) {
        console.log(item);
    }
};
allItems([11,22,33,44,55])


// - створити функцію яка створює параграф з текстом. Текст задати через аргумент

const createParagraph = (text) => document.write(`<p>${text}</p>`);
createParagraph('meow meow')

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

const createListItems = (text) => {
    document.write(`<ul>`)
    for (let i = 0; i < 3; i++) {
            document.write(`<li>${text}</li>`)
    }
    document.write(`</ul>`)
};
createListItems('kokoko')

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

const creatListItemWithAmount = (index, text) => {
    document.write(`<ul>`)
    for (let i = 0; i < index; i++) {
        document.write(`<li>${text}</li>`)
    }
    document.write(`</ul>`)
}
creatListItemWithAmount(6, 'woof')

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

const primitivesList = (arr) => {
    document.write(`<ul>`)
    for (let i = 0; i < arr.length; i++) {
        document.write(`<li>${arr[i]}</li>`)
    }
    document.write(`</ul>`)
};
primitivesList([true, 69, 'blahblah', 'smthg', 44, false])

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.

const userBlock = (arr) => {
    for (const user of arr) {
        document.write(`<div class = "user-block">`)
        document.write(`${user.id} - ${user.name} - ${user.age}`)
        document.write(`</div>`)
    }
}

let usersArr =  [
    { id: 1, name: "John", age: 30 },
    { id: 2, name: "Alice", age: 25 },
    { id: 3, name: "Bob", age: 35 },
    { id: 4, name: "Eva", age: 28 }
];
userBlock(usersArr)

// - створити функцію яка повертає найменьше число з масиву

console.log('the lowest number');
const theLowestNumber = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        let smallNumber = arr[0];
        if (arr[i] < smallNumber){
            smallNumber = arr[i];
            document.write(`The lowest number is:  ${smallNumber}`)
            console.log(smallNumber);
            return smallNumber;
        }
    }
}
theLowestNumber([13,55,2,888,4])


// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13
console.log('sum');
const sum = (arr) => {
    let summary = 0;
    for (let i = 0; i < arr.length; i++) {
        summary += arr[i];
    }
    console.log(summary);
    document.write(`<br> The sum is:  ${summary}`)
    return summary;
}
sum([11,26,5,33])

// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]

console.log('swap');
const swap = (arr, index1, index2) => {
    let extraItem = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = extraItem;

    return console.log(arr);
}
swap([11,22,33,44],1,2)

// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250

console.log('money exchange');
const exchange = (sumUA,currencyValues,exchangeCurrency ) => {
    let moneyChange;
    for (const item of currencyValues) {
        if (item.currency === exchangeCurrency){
            moneyChange = sumUA / item.value;
            moneyChange = moneyChange.toFixed(2);
            console.log(moneyChange + ' ' + exchangeCurrency);
        }
    }
}
exchange(9000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'EUR')
