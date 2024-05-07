// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині


let array1 = [
    "Hello, world!",
    "This is some text.",
    "Array item 3.",
    "Text for item 4.",
    "Fifth item here.",
    "Another text for the array.",
    "Item number seven.",
    "Eighth text in the array.",
    "Ninth item coming up.",
    "Last item, number ten."
];

for (let i = 0; i < 10; i++) {
    document.write(`<div> 
        ${array1[i]}
   </div> `)
}


// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині

let array2 = [
    {index: 1, text: "Object 1 text"},
    {index: 2, text: "Text for object 2"},
    {index: 3, text: "Third object's text"},
    {index: 4, text: "This is text for object 4"},
    {index: 5, text: "Fifth object's text here"},
    {index: 6, text: "Text for object number six"},
    {index: 7, text: "Seventh object text"},
    {index: 8, text: "Text for the eighth object"},
    {index: 9, text: "Ninth object's text goes here"},
    {index: 10, text: "Text for the tenth object"}
];

for (let i = 0; i < 10; i++) {
    const array2Item = array2[i];
    document.write(`   <div>
             ${array2Item.index} ${array2Item.text}
                   </div> `)
}


// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.

let titlesArray = [
    "The Enigma of Time",
    "Echoes of Eternity",
    "Whispers in the Mist",
    "Beyond the Horizon",
    "Shadows of Destiny",
    "A Symphony of Stars",
    "The Secret Garden",
    "Echoes from the Past",
    "Whispers of the Heart",
    "Sands of Serenity",
    "Beneath the Surface",
    "The Lost Chronicles",
    "Harmony of Souls",
    "Chronicles of Elysium",
    "Threads of Fate",
    "Echoes of Solitude",
    "Whispers in the Wind",
    "Realm of Reflections",
    "Eternal Echoes",
    "Legends of the Twilight"
];

let i = 0;
while (i < 20) {

    document.write(`
    <h1>${titlesArray[i]}</h1>
    
    `)
    i++;
}


// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.

let titlesArrayWithIndex = [
    {index: 1, title: "The Crimson Legacy"},
    {index: 2, title: "Whispers of the Void"},
    {index: 3, title: "Echoes of Destiny"},
    {index: 4, title: "Chronicles of the Unknown"},
    {index: 5, title: "Shadows of the Forgotten"},
    {index: 6, title: "A Symphony of Secrets"},
    {index: 7, title: "The Enchanted Garden"},
    {index: 8, title: "Echoes from Beyond"},
    {index: 9, title: "Whispers of Wisdom"},
    {index: 10, title: "Sands of Illusion"},
    {index: 11, title: "Beneath the Stars"},
    {index: 12, title: "The Forgotten Chronicles"},
    {index: 13, title: "Harmony of the Elements"},
    {index: 14, title: "Elysian Legends"},
    {index: 15, title: "Threads of Destiny"},
    {index: 16, title: "Echoes of Silence"},
    {index: 17, title: "Whispers in the Breeze"},
    {index: 18, title: "Realm of Reflection"},
    {index: 19, title: "Eternal Echoes"},
    {index: 20, title: "Legends of the Everlasting Twilight"}
];

let x = 0;
while (x < 20) {
    const arrayWithIndexItem = titlesArrayWithIndex[x];
    document.write(`
    <h1>${arrayWithIndexItem.index}  ${arrayWithIndexItem.title}</h1>
    `)
    x++;
}


// - Використовуючи данні з масиву, за допомоги document.write та циклу
// побудувати структуру по шаблону
// Масив:
//
//     let listOfItems = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];
//
// ШАБЛОН:
//     <ul>
//         <li>ITEM OF ARRAY</li>
//         <!--
//             і тд інші об'єкти масиву
//              ...
//              ...
//              ...
//         -->
//     </ul>
//
// замість 'ITEM OF ARRAY' підставити елемент з масиву щоб получився цілий список з даними з масиву

document.write(`<ul>`);

let listOfItems = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];
for (let i = 0; i < listOfItems.length; i++) {
    document.write(`
    <li>${listOfItems[i]}</li>
    `)
}


document.write(`</ul>`);


// -----------------------------------------------
//
//     Використовуючи данні з масиву, за допомоги document.write та циклу
// побудувати структуру по шаблону
// Великими літерами прописанні властивості об'єкту які потрібно впровадити в шаблон
//
// ШАБЛОН
// <div class="product-card">
//     <h3 class="product-title">TITLE. Price - PRICE</h3>
// <img src="IMAGE" alt="" class="product-image">
// </div>
// Замість TITLE PRICE IMAGE - підставити відповідні поля з об'єкту

let products = [
    {
        title: 'milk',
        price: 22,
        image: 'https://www.mcqueensdairies.co.uk/wp-content/uploads/2019/02/Mcqueens_1litre_whole_organic-300x300-3.jpg'
    },
    {
        title: 'juice',
        price: 27,
        image: 'https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg'
    },
    {
        title: 'tomato',
        price: 47,
        image: 'https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74'
    },
    {
        title: 'tea',
        price: 15,
        image: 'https://yogiproducts.com/wp-content/uploads/2009/03/YT-US-CAR-RelaxedMind-C23-202201-V2-3DFront_withGlow-300DPI-1.png'
    },
];

for (const product of products) {
    document.write(`<div class="product-card">
        <h3 class="product-title">${product.title} Price - ${product.price}</h3>
        <img src="${product.image}" alt="" class="product-image"/>
    </div>`)
}


// --------------------
//     є масив
let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];
// за допомоги циклу вивести:
//     - користувачів зі статусом true
for (const user of users) {
    for (const key in user) {
        if (user[key] === true) {
            console.log(user);
        }
    }
}
// - користувачів зі статусом false
console.log(' ');
for (const user of users) {
    for (const key in user) {
        if (user[key] === false) {
            console.log(user);
        }
    }
}

// - користувачів які старші за 30 років
console.log(' ');
for (const user of users) {
    for (const key in user) {
        if (user[key] > 30) {
            console.log(user);
        }
    }
}