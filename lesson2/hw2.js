// //Масиви та об'єкти:
// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль

let array1 = [9, -13, 'something', 2.4, true, 'kotletka', 666, false, 33, 'pivko'];
console.log(array1[0]);
console.log(array1[1]);
console.log(array1[2]);
console.log(array1[3]);
console.log(array1[4]);
console.log(array1[5]);
console.log(array1[6]);
console.log(array1[7]);
console.log(array1[8]);
console.log(array1[9]);


// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.

let book1 = {
    title: 'Jane Air',
    pageCount: 450,
    genre: 'drama'
}
let book2 = {
    title: 'Fight Club',
    pageCount: 376,
    genre: 'satirical novel'
}
let book3 = {
    title: 'Harry Potter and Secret Chamber',
    pageCount: 639,
    genre: 'fantasy'
}

console.log(book1, book2, book3);


// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - являється  масивом. Кожен автор має поля name та age.

let firstBook = {
    title: 'Mister Mercedes',
    pageCount: 730,
    genre: 'horror',
    authors: [{
        name: 'Stephen',
        age: 62
    },
        {
            name: 'Bob',
            age: 47
        }]
}

let secondBook = {
    title: 'House of Dragon',
    pageCount: 928,
    genre: 'fantasy',
    authors: [{
        name: 'George',
        age: 64
    },
        {
            name: 'Martin',
            age: 33
        }]
}


let thirdBook = {
    title: 'Witcher',
    pageCount: 537,
    genre: 'fantasy',
    authors: [{
        name: 'Andjey',
        age: 42
    },
        {
            name: 'Lukash',
            age: 31
        }]
}


console.log(firstBook,secondBook,thirdBook);



// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача


let users = [
    {name:'mukola', username:'nagibator666', password:'171272'},
    {name:'bob', username:'bombas', password:'8473362'},
    {name:'ketty', username:'kittykitty', password:'696969'},
    {name:'anna', username:'annajaja', password:'3728498548'},
    {name:'olya', username:'olenish', password:'1111111'},
    {name:'misha', username:'mishasho', password:'585898982'},
    {name:'vasya', username:'vananas', password:'000094'},
    {name:'tanya', username:'pizzapizza', password:'123455678'},
    {name:'pasha', username:'pahan', password:'9876'},
    {name:'lena', username:'lanos', password:'01010101000'}
]

console.log(users[0].password);
console.log(users[1].password);
console.log(users[2].password);
console.log(users[3].password);
console.log(users[4].password);
console.log(users[5].password);
console.log(users[6].password);
console.log(users[7].password);
console.log(users[8].password);
console.log(users[9].password);



////- описати масив, в якому буде зберігатись інформація про температуру вранці, вдень і ввечері за термін в 7 днів. Як зробити цей масив - вам потрібно подумати. Нормальних варіантів опису - 2. Варіант, коли в вас буде одновимірний масив з 21 значенням вичключаємо одразу


let temperature = [
    {day: 1, morning: 14, afternoon: 19, evening: 15},
    {day: 2, morning: 16, afternoon: 22, evening: 17},
    {day: 3, morning: 11, afternoon: 12, evening: 9},
    {day: 4, morning: 13, afternoon: 14, evening: 8},
    {day: 5, morning: 7, afternoon: 17, evening: 12},
    {day: 6, morning: 17, afternoon: 23, evening: 17},
    {day: 7, morning: 21, afternoon: 27, evening: 20}
];

console.log(temperature);



////Логічні розгалуження:

//     - Є змінна х, якій ви надаєте довільне числове значення.
//     Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3

let x = 0;
if (x !== 0){
    console.log('Вірно');
} else {
    console.log('Невірно');
}


// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).

let time = 17;

if (time < 0 || time > 59){
    console.log('error');
}else if ( time < 16) {
    console.log('first quarter');
}else if (time < 31){
    console.log('second quarter');
}else if ( time < 46){
    console.log('third quarter');
}else if ( time < 60){
    console.log('forth quarter');
}


// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).

let day = 27;
if(day <= 0){
    console.log('error');
}else if ( day <= 11){
    console.log('first decade');
}else if (day <= 21){
    console.log('second decade');
}else if (day <= 31){
    console.log('third decade');
}else {
    console.log('too many days');
}


// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).


let weekday = 3;
switch (weekday){
    case 1:
        console.log('Monday');
        break;
    case 2:
        console.log('Tuesday');
        break;
    case 3:
        console.log('Wednesday');
        break;
    case 4:
        console.log('Thursday');
        break;
    case 5:
        console.log('Friday');
        break;
    case 6:
        console.log('Saturday');
        break;
    case 7:
        console.log('Sunday');
        break;
    default:
        console.log('default');
}


//     - Користувач вводить або має два числа.
//         Потрібно знайти та вивести максимальне число з тих двох .
//         Також потрібно врахувати коли введені рівні числа.


let num1 = +prompt('enter the first number');
let num2 = +prompt('enter the second number');

if (num1 > num2){
    console.log(num1 + ' ' + 'is the highest number');
}else if (num2 > num1){
    console.log(num2 + ' ' + 'is the highest number');
}else if (num1 === num2){
    console.log('the numbers are equal');
}


// - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
//     буде присвоювати змінній х значення "default"  якщо ви намагаєтесь присвоїти в неї falsy-значення (хибноподібні, тобто ті, які приводиться до false, а це 0 null undefined і тд).


let valueX = 0;
let X = !!valueX === false ? 'default' : valueX;
console.log(X);


// - з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray.
// За допомоги іф перевірити кожен його елемент на тривалість навчання. У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

if (coursesAndDurationArray[0].monthDuration > 5){
    console.log(coursesAndDurationArray[0].title + ' ' + 'Супер');
}
if (coursesAndDurationArray[1].monthDuration > 5){
    console.log(coursesAndDurationArray[1].title + ' ' + 'Супер');
}
if (coursesAndDurationArray[2].monthDuration > 5){
    console.log(coursesAndDurationArray[2].title + ' ' + 'Супер');
}
if (coursesAndDurationArray[3].monthDuration > 5){
    console.log(coursesAndDurationArray[3].title + ' ' + 'Супер');
}
if (coursesAndDurationArray[4].monthDuration > 5){
    console.log(coursesAndDurationArray[4].title + ' ' + 'Супер');
}
if (coursesAndDurationArray[5].monthDuration > 5){
    console.log(coursesAndDurationArray[5].title + ' ' + 'Супер');
}

