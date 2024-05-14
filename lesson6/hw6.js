// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'
console.log('---strings length---');
console.log('hello world'.length);
console.log('lorem ipsum'.length);
console.log('javascript is cool'.length);

// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'

console.log('----strings upper case----');
console.log('hello world'.toUpperCase());
console.log('lorem ipsum'.toUpperCase());
console.log('javascript is cool'.toUpperCase());


// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'

console.log('----strings lower case----');
console.log('HELLO WORLD'.toLowerCase());
console.log('LOREM IPSUM'.toLowerCase());
console.log('JAVASCRIPT IS COOL'.toLowerCase());


// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
console.log('---dirty string---');
let str = ' dirty string   ';
console.log(str.substring(1, 13));
// console.log(str.trim()); чисто спробувати

// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Ревуть воли як ясла повні';
// let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']

const stringToArray = (str) => str.split(' ');
let arr = stringToArray('Ревуть воли як ясла повні');
console.log(arr);

// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об'єкти в масиві на стрінгові.
console.log('---numbers to string---');
let numsArr = [10, 8, -7, 55, 987, -1011, 0, 1050, 0];
console.log(numsArr.map(value => value.toString()));


// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
//     let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]

console.log('---sort---');
let nums = [11, 21, 3, 33, 2];
const sortNums = (nums, direction) => {
    if (direction === 'ascending') {
        nums.sort((item1, item2) => item1 - item2);
        console.log(nums);

    } else if (direction === 'descending') {
        nums.sort((item1, item2) => item2 - item1);
        console.log(nums);
    }
}
sortNums(nums, 'ascending')
sortNums(nums, 'descending')


// ==========================
// - є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// -- відсортувати його за спаданням за monthDuration
console.log('----sort---');
let sort = coursesAndDurationArray.sort((c1, c2) => {
    return c2.monthDuration - c1.monthDuration;
});
console.log(sort);

// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
console.log('--filter---');
let filter = coursesAndDurationArray.filter(value => {
    if (value.monthDuration > 5) {
        console.log(value);
    }
})

// -- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}
console.log('----add id---');
console.log(coursesAndDurationArray.map((value, index) => {
    return {id: index + 1, title: value.title, monthDuration: value.monthDuration}
}));


// =========================
//     описати колоду карт (від 6 до туза без джокерів)
// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//         value: '', // '6'-'10', 'ace','jack','queen','king','joker'
//     color:'', // 'red','black'
// }


console.log('----create desk---');
const CreateDesk = () => {
    const Suits = [
        {name: 'spade', color: 'black'},
        {name: 'diamond', color: 'red'},
        {name: 'heart', color: 'red'},
        {name: 'clubs', color: 'black'}
    ];
    const Values = ['6', '7', '8', '9', '10', 'jack', 'queen', 'king', 'ace'];
    let desk = [];
    for (const suit of Suits) {
        for (const value of Values) {
            desk.push({value: value, cardSuit: suit.name, color: suit.color});
        }
    }
    return desk;
}
console.log(CreateDesk());

// - знайти піковий туз
console.log('----Ace of clubs---');
let findAce = CreateDesk().find(value => value.cardSuit === 'clubs' && value.value === 'ace');
console.log(findAce);

// - всі шістки
console.log('----all six---');
let findSix = CreateDesk().filter(value => value.value === '6');
console.log(findSix);


// - всі червоні карти
console.log('----all red cards---');
let findRed = CreateDesk().filter(value => value.color === 'red');
        console.log(findRed);


// - всі буби
console.log('----all diamonds---');
let findDiamonds = CreateDesk().filter(value => value.cardSuit === 'diamond')
        console.log(findDiamonds);

// - всі трефи від 9 та більше
console.log('----spade over 9---');
let findSpade = CreateDesk().filter(value => value.cardSuit === 'spade' && value.value >= '9' || value.value === '10' && value.cardSuit === 'spade');
        console.log(findSpade)// може не правильно, але ascii code 10 походу менше за 9 :(



// =========================
//
//     Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//         diamonds:[],
//     hearts:[],
//     clubs:[]
// }
console.log('---packing by cardSuit----');

console.log(CreateDesk().reduce((accumulator, card) => {
    switch (card.cardSuit) {
        case 'spade':
            accumulator.spades.push(card);
            break;
        case 'diamond':
            accumulator.diamonds.push(card);
            break;
        case 'heart':
            accumulator.hearts.push(card);
            break;
        case 'clubs':
            accumulator.clubs.push(card);
            break;
    }
    return accumulator;
}, {spades: [], diamonds: [], hearts: [], clubs: []}));


// =========================
//     взяти з arrays.js (який лежить в папці 2023 plan) масив coursesArray

let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];

// --написати пошук всіх об'єктів, в який в modules є sass
console.log('---search for sass-----');

// let findSass = coursesArray.filter(value => {
//     for (let i = 0; i < value.modules.length; i++) {
//         if (value.modules[i] === 'sass') {
//             console.log(value);
//         }
//     }
// })

let findSass = coursesArray.find(value => {
    if(value.modules.includes('sass')){
        console.log(value);
    }
})


// --написати пошук всіх об'єктів, в який в modules є docker

console.log('---search for docker-----');

// let findDocker = coursesArray.filter(value => {
//     for (let i = 0; i < value.modules.length; i++) {
//         if (value.modules[i] === 'docker') {
//             console.log(value);
//         }
//     }
// });

let findDocker = coursesArray.find(value => {
    if (value.modules.includes('docker')){
        console.log(value);
    }
});