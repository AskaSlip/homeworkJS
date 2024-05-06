// --створити масив з:    ???????
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
let i = 0;
while (i < array2.length){
    console.log(array2[i]);
    i++;
}
// //     2. перебрати його циклом for
console.log('loop for');
for (let i = 0; i <array2.length; i++){
    console.log(array2[i]);
}

//     3. перебрати циклом while та вивести  числа тільки з непарним індексом

console.log('odd index with while');
let y=0;
while (y < array2.length){
    if (y % 2 === 1){
        console.log(array2[y]);
    }
    y++;
}

// 4. перебрати циклом for та вивести  числа тільки з непарним індексом
console.log('odd index with for');
for (let i = 0; i < array2.length; i++) {
    if (i % 2 === 1){
        console.log(array2[i]);
    }
}

// 5. перебрати циклом while та вивести  числа тільки парні  значення
console.log('even value with while ');
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
for (let i = 0; i <array2.length; i++){
    if (array2[i] % 2 === 0){
        console.log(array2[i]);
    }
}


// 7. замінити кожне число кратне 3 на слово "okten"
console.log('%3 ');
for (let i = 0; i < array2.length; i++){
    let oktenItem = array2[i];
    if (oktenItem % 3 === 0){
        oktenItem = 'okten';
    }
    console.log(oktenItem);
}

// 8. вивести масив в зворотньому порядку. ( 9.2 перебрали його циклом for)
console.log('reverse');
for (let j = array2.length - 1; j >= 0; j--) {
    console.log(array2[j]);

}


// 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)


// //9. 1. перебрати його циклом while але в зворотньому циклі (с заду на перед)
console.log('loop while reverse');
let z = array2.length - 1;
while (z > -1 ) {
    console.log(array2[z]);
    z--;
}

//    9.  3. перебрати циклом while та вивести  числа тільки з непарним індексом але в зворотньому циклі (с заду на перед)

// console.log('odd index with while reverse');
// let p= array2.length -1;
// while (p > -1 ){
//     if (p % 2 === 1){
//         console.log(array2[p]);
//     }
//     p--;
// }






// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи
//
// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.
// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write
//
//
//
// стоврити масив книжок (назва, кількість сторінок, автори , жанри).
// -знайти наібльшу книжку.
// - знайти книжку/ки з найбільшою кількістю жанрів
// - знайти книжку/ки з найдовшою назвою
// - знайти книжку/ки які писали 2 автори
// - знайти книжку/ки які писав 1 автор