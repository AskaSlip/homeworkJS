// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)


function User(id, name, surname, email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}

let userArr = [
    new User(1455, "eddy", "brown", "kkk@gmail.com", "+380973271118"),
    new User(2886, "vasya", "bhah", "hrdvhhg@gmail.com", "+38097364567"),
    new User(2564, "petya", "kizuch", "ijhfghu22@gmail.com", "+380934574688"),
    new User(4006, "anna", "cintf", "jfffgyv@gmail.com", "+380975897009"),
    new User(5557, "lola", "pringls", "lololo@gmail.com", "+380978877766"),
    new User(6131, "bob", "dilan", "bobez@gmail.com", "+380554567987"),
    new User(7335, "rick", "grayms", "opoppo@gmail.com", "+38097866700"),
    new User(8364, "ella", "mingun", "lllrla@gmail.com", "+380973333443"),
    new User(2299, "kirk", "loni", "ghhgvvbhhb@gmail.com", "+380936766444"),
    new User(1008, "mina", "pinl", "okookok@gmail.com", "+3809732668677")
]
console.log(userArr);

// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
console.log('-----even id----');
let evenFilter = userArr.filter(value => value.id % 2 === 0);
console.log(evenFilter);

// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
console.log('----sort----');
let sort = userArr.sort((a, b) => {
    return a.id - b.id;
});
console.log(sort);


// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client

let clientArr = [];

console.log('----class array----');
class Client {
    constructor(id, name, surname, email, phone, order) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;
    }
}

clientArr = [
    new Client(1, 'petya', 'petrov', 'djdjdj@gmail.com', '+38094832711', ['item','item','item','item']),
    new Client(2, 'manya', 'steshko', 'sdfsdf@gmail.com', '+38094564564', ['item','item','item']),
    new Client(3, 'tanya', 'modna', 'jnkcvj@gmail.com', '+38094874777', ['item']),
    new Client(4, 'bob', 'kort', 'ddkkd@gmail.com', '+38094987900', ['item','item','item']),
    new Client(5, 'sasha', 'pulya', 'oogfgf@gmail.com', '+3809252552', ['item','item']),
    new Client(6, 'anna', 'frank', 'wscmdm@gmail.com', '+3809445757', ['item','item','item','item','item']),
    new Client(7, 'rick', 'jorn', 'papaap@gmail.com', '+380948333333', ['item','item']),
    new Client(8, 'ira', 'hrush', 'nfjdkrl@gmail.com', '+38094837575', ['item','item','item','item']),
    new Client(9, 'olia', 'coroka', 'shooo@gmail.com', '+38094833463', ['item','item','item']),
    new Client(10, 'vova', 'jger', 'covovov@gmail.com', '+380988465456', ['item','item','item','item','item'])
]

console.log(clientArr);

// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
console.log('---client sort---');
let sortOrders = clientArr.sort((a,b) => {
    return a.order.length - b.order.length;
} )
console.log(sortOrders);


// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість,
// об'єм двигуна. додати в об'єкт функції:
console.log('----car---');

function Car(model, producer, releaseYear, maxSpeed,engineVolume){
    this.model = model;
    this.producer = producer;
    this.releaseYear = releaseYear;
    this.maxSpeed = maxSpeed;
    this.engineVolume = engineVolume;

// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
    this.drive = function() {
        return `їдемо зі швидкістю ${this.maxSpeed}km на годину`;
    }
    console.log(this.drive());

// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
    console.log('--info--'); //якась дічь з цим була :(
    this.info = function() {
        console.log(`model - ${this.model}`);
        console.log(`producer - ${this.producer}`);
        console.log(`releaseYear - ${this.releaseYear}`);
        console.log(`maxSpeed - ${this.maxSpeed}`);
        console.log(`engineVolume - ${this.engineVolume}`);

    }
    this.info();

// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
    console.log('---max speed---');
    this.increaseMaxSpeed = function(newSpeed) {
        return this.maxSpeed + newSpeed;
    }
    console.log(`Max speed was increased and now it's ${this.increaseMaxSpeed(10)}`);

// -- changeYear (newValue) - змінює рік випуску на значення newValue

    this.changeYear = function (newValue) {
        return this.releaseYear = newValue;
    }
    this.changeYear(2023)

// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

this.addDriver = function (driver){
        return this.driver = driver;
}
    console.log(this.addDriver({name: 'Bob', license: ['B1', 'B'], experienceYears: 15}));

}

console.log(new Car('Porsche', 'Germany', 2020, 290, 3996));

// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:

class CarS {

    constructor(model,producer,releaseYear,maxSpeed,engineVolume) {
        this.model = model;
        this.producer = producer;
        this.releaseYear = releaseYear;
        this.maxSpeed = maxSpeed;
        this.engineVolume = engineVolume;
    }


// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`

    drive() {
        return `їдемо зі швидкістю ${this.maxSpeed}km на годину`;
    }

    // -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`


    info() {
        // console.log(`model - ${this.model}`);
        // console.log(`producer - ${this.producer}`);
        // console.log(`releaseYear - ${this.releaseYear}`);
        // console.log(`maxSpeed - ${this.maxSpeed}`);
        // console.log(`engineVolume - ${this.engineVolume}`);
        for (const key in car) {
                console.log(`${key} - ${car[key]}`);
        }
    };

    // -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed

    increaseMaxSpeed(newSpeed) {
        return this.maxSpeed + newSpeed;
    }

    // -- changeYear (newValue) - змінює рік випуску на значення newValue

    changeYear (newValue) {
        return this.releaseYear = newValue;
    }

// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

    addDriver (driver){
        return this.driver = driver;
    }

}

let car = new CarS('MiniCooper', 'USA', 2022, 235, 3486);
console.log(car);
console.log(car.drive());
console.log('--info--');
car.info();
console.log('---max speed---');
console.log(`Max speed was increased and now it's ${car.increaseMaxSpeed(20)}`);
car.changeYear(2019)
console.log('----changed release year---');
console.log(car);
console.log(car.addDriver({name: 'Stepan', license: ['B1', 'B', 'C'], experienceYears: 24}));



// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
console.log('-------Cinderella--------');
function Cinderella(name, age, feetSize){
    this.name = name;
    this.age = age;
    this.feetSize = feetSize;
}

let arrayOfCinderellas = [
    new Cinderella('Amara', 23, 36),
    new Cinderella('Galya', 48, 39),
    new Cinderella('Helen', 26, 37.5),
    new Cinderella('Anton', 25, 43),
    new Cinderella('Jane', 29, 37),
    new Cinderella('Marian', 22, 36.5),
    new Cinderella('Katarina', 20, 38),
    new Cinderella('Lola', 22, 38.5),
    new Cinderella('Karen', 27, 40),
    new Cinderella('Chloe', 26, 39.5),
];
console.log(arrayOfCinderellas);


// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.

class Prince {
    constructor(name, age, sizeOfFoundShoe){
        this.name = name;
        this.age = age;
        this.sizeOfFoundShoe= sizeOfFoundShoe;
    }
}

const prince = new Prince('Bob', 30, 43);
console.log(prince)


//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.

function findFeet (arr1, arr2){
    for (const cinderella of arr1){
        for(const item in arr2){
            if(cinderella.feetSize === arr2.sizeOfFoundShoe){
                console.log(`His princess is ${cinderella.name}`);
                return cinderella.name;

            }
        }
    }
}

findFeet(arrayOfCinderellas, prince);


//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку

let findFeetMethod = arrayOfCinderellas.find((value)=> value.feetSize === prince.sizeOfFoundShoe);
console.log(`His beautiful princess is ${findFeetMethod.name}`);



// Через Array.prototype. створити власний foreach, filter, map

console.log('------prototype forEach----');
let array = ['kotletka', 'sosisochka', 'pureshka', 'tortuk','makaroshku'];


Array.prototype.addToAll = function(){
    this.forEach(value => {
        console.log(value = value.toUpperCase() + `:)`);
    })
}
array.addToAll()

console.log('------prototype filter----');

const users = [
    { name: 'Alice', age: 28 },
    { name: 'Bob', age: 14 },
    { name: 'Charlie', age: 22 },
    { name: 'Diana', age: 31 },
    { name: 'Fiona', age: 25 },
    { name: 'George', age: 17 },
    { name: 'Hannah', age: 30 },
    { name: 'Julia', age: 18 }
];

Array.prototype.adultContent = function () {
    this.filter(value => value.age >= 18 ? console.log(value): console.log(`${value.name}, your mom not gonna accept it`));
}
users.adultContent()

console.log('------prototype map----');

const mixedArray = [44,3,21,76,32,7,9];
const PI = 3.14;
Array.prototype.AreaOfCircle = function (){
    this.map((value) => console.log(PI*(value**2)));
}
mixedArray.AreaOfCircle()


