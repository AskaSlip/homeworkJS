// 1. Створити пустий масив та :

//     a. заповнити його 50 парними числами за допомоги циклу.

console.log('50 even numbers');
let evenArray = [];
for (let i = 1; evenArray.length < 50; i++) {
    if (i % 2 === 0){
        evenArray.push(i);
    }
}
console.log(evenArray);

//     b. заповнити його 50 непарними числами за допомоги циклу.

console.log('50 odd numbers');
let oddArray = [];
for (let i = 1;oddArray.length < 50; i++) {
    if (i % 2 === 1){
        oddArray.push(i);
    }
}
console.log(oddArray);

//     c. Заповнити масив 20ма рандомними числами. (Google: Generate random number JS)

console.log('20 random numbers');
let randomArray = [];
for (let i = 0; i < 20; i++) {
    let randomNumber = Math.floor(Math.random()*100) + 1;
    randomArray.push(randomNumber);
}
console.log(randomArray);


//     d. Заповнити масив 20ма рандомними чисалами в діапазоні від 8 до 732 (Google: Generate random number JS)

console.log('20 random numbers with range');
let randomArrayRange = [];
for (let i = 0; i < 20; i++) {
    let randomNumberRange = Math.floor(Math.random()*725) + 8;
    randomArrayRange.push(randomNumberRange);
}
console.log(randomArrayRange);


// 2. Вивести за допомогою console.log кожен третій елемен

console.log('third element');
console.log(randomArrayRange);
for (let i = 2; i < randomArrayRange.length; i += 3) {
    console.log(randomArrayRange[i]);

}

// 3. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним. (не вдуплила, типу парний індекс чи значення, але вивела значення)

console.log('third element even');
console.log(randomArrayRange);
for (let i = 2; i < randomArrayRange.length; i += 3) {
    if(randomArrayRange[i] % 2 === 0){
        console.log(randomArrayRange[i]);
    }

}

// 4. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним та записати їх в новий масив

console.log('third element even in new array');
console.log(randomArrayRange);
let newArrayForThirdEven = [];
for (let i = 2; i < randomArrayRange.length; i += 3) {
    if(randomArrayRange[i] % 2 === 0){
        newArrayForThirdEven = randomArrayRange[i]
        console.log(newArrayForThirdEven);
    }
}

// 5. Вивести кожен елемент масиву, сусід справа якого є парним
// EXAMPLE: [ 1, 2, 3, 5, 7, 9, 56, 8, 67 ] -> Має бути виведено 1, 9, 56

console.log('even neighbor');
console.log(randomArrayRange);
for (let i = 0; i < randomArrayRange.length; i++) {
    if (randomArrayRange[i+1] % 2 === 0){
        console.log(randomArrayRange[i]);
    }
}

// 6. Є масив з числами [100,250,50,168,120,345,188], Які характеризують вартість окремої покупки. Обрахувати середній чек.
console.log('purchases');
let purchasesArray = [100,250,50,168,120,345,188];
let sumPurchases = 0;
for (let i = 0; i < purchasesArray.length; i++) {
    sumPurchases += purchasesArray[i];
}
let averageBill = sumPurchases / purchasesArray.length;
console.log(sumPurchases);
console.log(averageBill);


// 7. Створити масив з рандомними значеннями, помножити всі його елементи на 5 та перемістити їх в інший масив.

console.log('multiply array');
let arrayForMultiple = []
let arrayMultiplied = []
for (let i = 0; i < 10; i++) {
    let randomNumber = Math.floor(Math.random()*200) + 1;
    arrayForMultiple.push(randomNumber)
    arrayMultiplied[arrayMultiplied.length] = arrayForMultiple[i]*5;
}
console.log('Primary array: ' + arrayForMultiple);
console.log('Multiplied array: ' + arrayMultiplied);


// 8. Створити масив з будь якими значеннями (стрінги, числа, і тд...). пройтись по ньому, і якщо елемент є числом - додати його в інший масив.

console.log('array for numbers');
let mixedArray = ["apple","banana", "orange", 42, true, "dog", "cat", "bird", null, undefined, 3.14, "grape", 25, false, "New York"];
let arrayForNumbers = [];

for (let i = 0; i < mixedArray.length; i++) {
    if (typeof mixedArray[i] === 'number'){
        arrayForNumbers[arrayForNumbers.length] = mixedArray[i];
    }
}
console.log('Primary array: ' + mixedArray);
console.log('Numbers array: ' + arrayForNumbers);



// - Дано 2 масиви з рівною кількістю об'єктів.
// Масиви:
    let usersWithId = [
        {id: 1, name: 'vasya', age: 31, status: false},
        {id: 2, name: 'petya', age: 30, status: true},
        {id: 3, name: 'kolya', age: 29, status: true},
        {id: 4, name: 'olya', age: 28, status: false}
    ];

let citiesWithId = [
    {user_id: 3, country: 'USA', city: 'Portland'},
    {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
    {user_id: 2, country: 'Poland', city: 'Krakow'},
    {user_id: 4, country: 'USA', city: 'Miami'}
];

// З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" .
//     Записати цей об'єкт в новий масив
// Example:
//     let usersWithCities = [
//             {
//                 id: 1, // <===
//                 name: 'vasya',
//                 age: 31,
//                 status: false,
//                 address: {
//                     user_id: 1, // <===
//                     country: 'Ukraine',
//                     city: 'Ternopil'
//                 }
//             },
//             // TO BE CONTINUED .....
//         ]

console.log('---create main array----');
// крім map ніц не було такого, тому спитати на консультації
let usersWithCities = usersWithId.map(user => {
    let city = citiesWithId.find(city => city.user_id === user.id);
    return {
        ...user,
        address: {
            user_id: city.user_id,
            country: city.country,
            city: city.city
        }
    };
});
console.log(usersWithCities);



//         - Взяти масив з 10 чисел або створити його. Вивести в консоль тільки ті елементи, значення яких є парними.
console.log('array with 10 elements even');
let emptyArray = [];
for (let i = 0; i <10; i++) {
    let randomNumber = Math.floor(Math.random()*100)+ 1;
    emptyArray.push(randomNumber);
}
console.log(emptyArray);
for (let i = 0; i < emptyArray.length; i++) {
    if (emptyArray[i] % 2 === 0){
        console.log(emptyArray[i]);
    }

}


// - Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу скопіювати значення одного масиву в інший.

console.log('copy one array in the other one');
let firstArray = [];
let secondArray = [];
for (let i = 0; i <10; i++) {
    let randomNumber = Math.floor(Math.random()*500)+1;
    firstArray.push(randomNumber);
}
console.log('Primary array: ' +firstArray);

for (let i = 0; i < firstArray.length; i++) {
    secondArray[secondArray.length] = firstArray[i];
}
console.log('Copied array: '+secondArray);


// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for зібрати всі букви в слово.
console.log('create word for');
let lettersArray = [ 'a', 'b', 'c'];
let word = '';
for (let i = 0; i < lettersArray.length; i++) {
    word += lettersArray[i];
}
console.log(word)

// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу while зібрати всі букви в слово.
console.log('create word while');

let lettersArray2 = [ 'a', 'b', 'c'];
let word2 = '';
let l = 0;
while (l < lettersArray2.length){
    word2 += lettersArray2[l];
    l++;
}
console.log(word2);


// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.

console.log('create word for of');
let letterArray3 =  [ 'a', 'b', 'c'];
let word3 = '';
for (const letter of letterArray3) {
    word3 += letter;
}
console.log(word3);

