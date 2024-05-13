/// --створити масив з
//     - з 5 числових значень
// - з 5 стрічкових значень
// - з 5 значень стрічкового, числового та булевого типу
// - та вивести його в консоль
//
 let array1 = [
     [5,4,88,-2,69],
     ['smthing', 'one more', 'pivko', 'another one', 'last one'],
     [99, 'blahblha',true, 'banana', false]
 ]
console.log(array1);

for (const arrayInArray1 of array1) {
    for (const array1Element of arrayInArray1) {
        console.log(typeof array1Element);
    }
}


// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль
//
let emptyArray = [];
emptyArray[0] = 'first item';
emptyArray[1] = 666;
emptyArray[2] = true;
emptyArray[3] = 'borshik';
emptyArray[4] = -87;
console.log(emptyArray);



// // - є масив [2,17,13,6,22,31,45,66,100,-18] :
let array2 = [2,17,13,6,22,31,45,66,100,-18];
//
// // 1. перебрати його циклом while
console.log('loop while');
console.log(array2);
let i = 0;
while (i < array2.length){
    console.log(array2[i]);
    i++;
}
// //     2. перебрати його циклом for
console.log('loop for');
console.log(array2);

for (let i = 0; i <array2.length; i++){
    console.log(array2[i]);
}

//     3. перебрати циклом while та вивести  числа тільки з непарним індексом

console.log('odd index with while');
console.log(array2);
let y=0;
while (y < array2.length){
    if (y % 2 === 1){
        console.log(array2[y]);
    }
    y++;
}

// 4. перебрати циклом for та вивести  числа тільки з непарним індексом
console.log('odd index with for');
console.log(array2);
for (let i = 0; i < array2.length; i++) {
    if (i % 2 === 1){
        console.log(array2[i]);
    }
}

// 5. перебрати циклом while та вивести  числа тільки парні  значення
console.log('even value with while ');
console.log(array2);
let x = 0;
while (x < array2.length){
    let array2ItemX = array2[x];
    if (array2ItemX % 2 === 0){
        console.log(array2ItemX);
    }
    x++;
}

// 6. перебрати циклом for та вивести  числа тільки парні  значення
console.log('even value with for');
console.log(array2);
for (let i = 0; i <array2.length; i++){
    if (array2[i] % 2 === 0){
        console.log(array2[i]);
    }
}


// 7. замінити кожне число кратне 3 на слово "okten"
console.log('replace with okten ');
console.log(array2);
for (let i = 0; i < array2.length; i++){
    let oktenItem = array2[i];
    if (oktenItem % 3 === 0){
        oktenItem = 'okten';
    }
    console.log(oktenItem);
}

// 8. вивести масив в зворотньому порядку.
console.log('reverse');
let arrayReverse = [];
let p = array2.length - 1;
while (p >= 0){
    const even = array2[p];
    arrayReverse[arrayReverse.length] = even;
    p--;
}
console.log(arrayReverse);


// 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)


// //9. 1. перебрати його циклом while але в зворотньому циклі (с заду на перед)
console.log('loop while reverse');
console.log(arrayReverse);
let z = array2.length - 1;
while (z > -1 ) {
    console.log(array2[z]);
    z--;
}

/// 9.2. перебрати його циклом for але в зворотньому циклі (с заду на перед)

console.log('loop for reverse');
console.log(arrayReverse);

for (let i = array2.length - 1; i >= 0; i--) {
    console.log(array2[i]);
}


//    9.  3. перебрати циклом while та вивести  числа тільки з непарним індексом але в зворотньому циклі (с заду на перед)

console.log('odd index with while reverse');
console.log(arrayReverse);

let Rp = 0;
while (Rp < arrayReverse.length){
    if (Rp % 2 === 1){
        console.log(arrayReverse[Rp]);
    }
    Rp++;
}

// 9.4 перебрати циклом for та вивести  числа тільки з непарним індексом  але в зворотньому циклі (с заду на перед)


console.log('odd index with for reverse');

console.log(arrayReverse);
for (let i = 0; i < arrayReverse.length; i++) {
        if (i % 2 ===1){
            console.log(arrayReverse[i]);
        }
}

// 9. 5. перебрати циклом while та вивести  числа тільки парні  значення  але в зворотньому циклі (с заду на перед)


console.log('even values with while reverse');
console.log(arrayReverse);
let Rx = 0;
while (Rx < arrayReverse.length){
    if (arrayReverse[Rx] % 2 === 0){
        console.log(arrayReverse[Rx]);
    }
    Rx++;
}


// 9.6. перебрати циклом for та вивести  числа тільки парні  значення але в зворотньому циклі (с заду на перед)
console.log('even values with for reverse');
console.log(arrayReverse);

for (let i = 0; i < arrayReverse.length; i++) {
    if (arrayReverse[i] % 2 === 0){
        console.log(arrayReverse[i]);
    }
}



// 9. 7. замінити кожне число кратне 3 на слово "okten" але в зворотньому циклі (с заду на перед)
console.log('replace with okten reverse');
console.log(arrayReverse);

for (let i = 0; i < arrayReverse.length; i++) {
    let oktenItemR = arrayReverse[i];
    if (oktenItemR % 3 === 0){
        oktenItemR = 'okten';
    }
    console.log(oktenItemR);
}


// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.

console.log('----numbers----');
let numbersArray = [17, 23, 45, 6, 12, 33, 8, 50, 9, 27];
for (let number of numbersArray) {
    console.log(number);
}

// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.

console.log('---strings---');
let stringArray = ["apple", "banana", "cherry", "date", "elderberry", "fig", "grape", "honeydew", "kiwi", "lemon"];
for (let i = 0; i < 10; i++){
    console.log(stringArray[i]);
}

// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.

console.log('----mixed----');
let mixedArray = [42, "apple", true, 7, "banana", false, 3.14, "cherry", 99, "orange"];
let m = 0;
while(m < 10){
    console.log(mixedArray[m]);
    m++;
}

// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи

console.log('——boolean——');
let arrayForSearchBoolean = ["dog", 25, true, "cat", false, 3.14159, "bird", 100, "fish", "rabbit"];
console.log(arrayForSearchBoolean);
for (let i=0; i < 10; i++){
    if(typeof arrayForSearchBoolean[i] === 'boolean'){
        console.log(arrayForSearchBoolean[i]);
    }
}

// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи

console.log('----numbers search----');
let arrayForSearchNumbers = [42, "apple", true, 7.5, "banana", false, "codeway", 99, null, ["nested", "array"]];
console.log(arrayForSearchNumbers);
for (let i=0; i < 10; i++){
    if (typeof arrayForSearchNumbers[i] === 'number'){
        console.log(arrayForSearchNumbers[i]);
    }
}

// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи

console.log('-----string search----');
let arrayForSearchStrings = [55, "orange", false, 3.14, null, "apple", true, { key: "value" }, [1, 2, 3], undefined];
console.log(arrayForSearchStrings);
for(let i =0; i< 10; i++){
    if(typeof arrayForSearchStrings[i] === 'string'){
        console.log(arrayForSearchStrings[i]);
    }
}

// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.

console.log('---empty array items---');
let  emptyArray2 =[];
emptyArray2[0] = true;
emptyArray2[1] = 0;
emptyArray2[2] = 667;
emptyArray2[3] = 'some text';
emptyArray2[4] = 'one more';
emptyArray2[5] = false;
emptyArray2[6] = 3888;
emptyArray2[7] = 9292;
emptyArray2[8] = true;
emptyArray2[9] = 'bomber';
for (let emptyArray2Item of emptyArray2){
    console.log(emptyArray2Item);
}

// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write

console.log('----10 iters with step 1---');
document.write('10  ітерацій з кроком 1' + '<br>')
for (let i = 0; i <10; i++){
    console.log(i+1);
    document.write("Step: " + (i + 1) + "<br>");
}

// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write

console.log('----100 iters with step 1---');

document.write('100  ітерацій з кроком 1' + '<br>')
for (let i = 0; i < 100; i++) {
    console.log(i+1);
    document.write('Step: ' + (i+1) + '<br>');
}

// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write

console.log('----100 iters with step 2---');
document.write('100  ітерацій з кроком 2' + '<br>')
for (let i = 0; i < 100; i +=2) {
    console.log(i+1);
    document.write('Step: ' + (i+1) + '<br>');
}

// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write

console.log('----100 iters with even step ---');
document.write('100  ітерацій з парними кроками' + '<br>')
for (let i = 0; i < 100; i++) {
    if (i % 2 === 0){
        console.log(i);
        document.write('Step: ' + (i) + '<br>');

    }
}

// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write

console.log('----100 iters with odd step ---');
document.write('100  ітерацій з непарними кроками' + '<br>')
for (let i = 0; i < 100; i++) {
    if (i % 2 === 1){
        console.log(i);
        document.write('Step: ' + (i) + '<br>');

    }
}


// стоврити масив книжок (назва, кількість сторінок, автори , жанри).

let books = [
    {
        id: 1,
        title: "To Kill a Mockingbird",
        pageCount: 281,
        authors: ["Harper Lee"],
        genres: ["Fiction", "Classic", "Romance"]
    },
    {
        id: 2,
        title: "1984",
        pageCount: 328,
        authors: ["George Orwell", 'Unknown'],
        genres: ["Fiction", "Dystopian","Classic"]
    },
    {
        id: 3,
        title: "The Great Gatsby",
        pageCount: 180,
        authors: ["F. Scott Fitzgerald", "Zelda Fitzgerald"],
        genres: ["Fiction", "Classic"]
    },
    {
        id:4,
        title: "Harry Potter and the Sorcerer's Stone",
        pageCount: 320,
        authors: ["J.K. Rowling"],
        genres: ["Fantasy", "Young Adult"]
    }
];
console.log(books);

// -знайти наібльшу книжку.

let bigBook = books[0]
for (const book of books) {
    if (book.pageCount > bigBook.pageCount){
        bigBook = book;
    }
}
console.log('The biggest book: ' + bigBook.title);

// - знайти книжку/ки з найбільшою кількістю жанрів

let genres = [];
let moreGenres = books[0]
for (const book of books) {
    if (book.genres.length === moreGenres.genres.length){
        genres[genres.length] = book;
    }else if (book.genres.length > moreGenres.genres.length){
        moreGenres = book;
    }
}
console.log(genres);


// - знайти книжку/ки з найдовшою назвою


let bigTitle = books[0]
for (const book of books) {
    if(book.title.length > bigTitle.title.length){
        bigTitle = book;
    }
}
console.log('The longest title is: ' + bigTitle.title);

// - знайти книжку/ки які писали 2 автори

console.log('2 authors have: ');
for (const book of books) {
    if (book.authors.length === 2){
        console.log(book.title);
    }
}

// - знайти книжку/ки які писав 1 автор

console.log('1 author have: ');
for (const book of books) {
    if (book.authors.length === 1){
        console.log(book.title);
    }
}