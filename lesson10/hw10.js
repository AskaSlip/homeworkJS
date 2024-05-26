// Стоврити форму з трьома полями для name,surname,age та кнопкою. При натисканні на кнопку зчитати данні з полів, та вивести об'єкт в документ. Іншими словами : заповниои форму, натиснули кнопку, під формою з'явився блок з вашим об'єктом

let f1 = document.forms.f1;
let formBlock = document.getElementsByClassName('form')
f1.onsubmit = function (e) {
    e.preventDefault();
    let userName = f1.name.value;
    let userSurname = f1.surname.value;
    let userAge = f1.age.value;

    let userBlock = document.createElement('div')
    userBlock.innerText = `
    User name is ${userName}
    User surname is ${userSurname}
    User age - ${userAge}`

    document.body.appendChild(userBlock);
}

// ==========================
// є сторінка, на якій є блок, я кому знаходиьтся цифра. написати код, який при кожному перезавантажені сторінки буде додавати до неї +1

let blockWithNumber = document.getElementById('numberBlock')
let num = blockWithNumber.innerText = '0';

document.addEventListener("DOMContentLoaded", ev => {
    let value = localStorage.getItem('num');
    if (!value) {
        value = 0;
    }
    let changedValue = JSON.parse(value);
    changedValue += 1;
    localStorage.setItem('num', changedValue)
    blockWithNumber.innerText = changedValue;
});

// ==========================  окремо зроблено в sessions.html i index.html!!!!
// Є сторінка index.html (назва довільна), при відвідуванні якої в локальне
// сховще, в масив sessions зберігається інформація про дату та час
// відвідування сторінки. Є ще сторінка sessions.html (назва довільна),
// при відвідуванні якої потрібно відмалювати всю інформацію про
// відвідування сторінки index.html. Інфу НЕ виводити в консоль,
// а побудувати дом структуру під кожну сессію

console.log('зроблено в sessions.html i index.html');


// =========================
//     зробити масив на 100 об'єктів та дві кнопки prev next
// при завантажені сторінки з'являються перші 10 об'єктів.
//     При натисканні next виводяться настпні 10 об'єктів
// При натисканні prev виводяться попередні 10 об'єктів

//--спитати на консультації за цей таск, бо я якась тупіца :(

document.addEventListener('DOMContentLoaded', ()=>{
    let itemsBlock = document.getElementById('items')
    let previousButton = document.getElementById('prev')
    let nextButton = document.getElementById('next')

    let itemsArray = Array.from({length: 100}, (_,i) => `${i + 1}`);
    // console.log(itemsArray);
    let currPage = 0;
    const itemsAmount = 10;

    function createItems(page) {
        const start = page * itemsAmount;
        const end = start + itemsAmount;
        const tenItems = itemsArray.slice(start,end);

        itemsBlock.innerHTML = tenItems.map(item => `<div class="item">${item}</div>`).join('');

        //for buttons display
        previousButton.disabled = page === 0;
        nextButton.disabled = end >= itemsArray.length;

    }

    previousButton.addEventListener('click', () => {
        if (currPage > 0){
            currPage--;
            createItems(currPage);
        }
    });

    nextButton.addEventListener('click', () => {
        if ((currPage+1)*itemsAmount < itemsArray.length){
            currPage++;
            createItems(currPage);
        }
    });

createItems(currPage)

});



// - Створити довільний елемент з id = text та створити кнопку.Використовуючи
// JavaScript, зробіть так, щоб при натисканні на кнопку зникав елемент
// з id="text".



let blockWithId = document.getElementById('text')
let buttonForBlockWithId = document.createElement('button')
buttonForBlockWithId.classList = 'visible';
buttonForBlockWithId.innerText = 'Push me'

buttonForBlockWithId.addEventListener('click', ev => {
    let item = document.getElementById('text')
    item.classList.toggle('hide')
})

document.body.appendChild(blockWithId)
document.body.appendChild(buttonForBlockWithId)


//     - створити інпут який приймає вік людини та кнопку яка підтверджує
//     дію.При натисканні на кнопку зчитати інформацію з інпуту та
//     перевірити вік чи меньше він ніж 18, та повідомити про це
//     користувача

let formAge = document.forms.f2;

f2.onsubmit = function (e) {
    e.preventDefault();
    let userAge = f2.userAge.value;
    // let obj = {userAge};
    localStorage.setItem('age', JSON.stringify(userAge));

    let ageMessage = document.createElement('div')
    let ageFromStorage = +JSON.parse(localStorage.getItem('age'));
    ageFromStorage < 18 ? ageMessage.innerText = `Sorry, Bro. I gonna call you mom` : ageMessage.innerText = `You are an adult`;
    document.body.appendChild(ageMessage)

};


// *** Створити 3 інпута та кнопку. Один визначає кількість рядків,
// другий - кількість ячеєк, третій вмиіст ячеєк.
// При натисканні кнопки, вся ця інформація зчитується і
// формується табличка, з відповідним вмістом.
// (Додатковачастина для завдання)

document.addEventListener('DOMContentLoaded', () => {
    let form = document.forms.formTable;

    form.onsubmit = function (e) {
        e.preventDefault();
        let rows = form.rows.value;
        let columns = form.columns.value;
        let cells = form.cellsContent.value;
        let obj = {rows, columns, cells};

        let tableFromStorageArray = localStorage.getItem('table');
        if (!tableFromStorageArray) {
            localStorage.setItem('table', JSON.stringify([obj]));
        } else {
            let tableArray = JSON.parse(tableFromStorageArray);
            tableArray.push(obj);
            localStorage.setItem('table', JSON.stringify(tableArray));
        }

        createTable();
    };

    function createTable() {
        let valuesForCreateTable = JSON.parse(localStorage.getItem('table'));
        console.log(valuesForCreateTable);

        let table = document.createElement('table');

        valuesForCreateTable.forEach(value => {
            for (let i = 0; i < (+value.rows); i++) {
                let row = document.createElement('tr');
                table.append(row);
                for (let j = 0; j < (+value.columns); j++) {
                    let column = document.createElement('td');
                    column.innerText = value.cells;
                    row.append(column);
                }
            }
        });

        document.body.appendChild(table);
    }

    if (localStorage.getItem('table')) {
        createTable();
    }
});


// *** (подібне було вище, але...будьте уважні в другій частині) створити сторінку з довільним блоком, в середині якого є значення "100грн"
// при перезавантаженні сторінки до значаення додається по 10грн, але !!!
//     зміна ціни відбувається тільки на перезавантаження, які відбулись пізніше ніж 10 секунд після попереднього.
//     При перезавантаженні, яке відбулось раніше ніж минуло 10 секунд - нічого не відбувається