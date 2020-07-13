// let, const
/*const name = 'mitaly';

// name = 'shruti';

{
    var age = 12;
    let year = 1902;
    const job = 'fisher';
}

    // console.log(age);
    // console.log(year);
    // console.log(job);

function driversLicense(passedTest) {
    // console.log(firstName);
    let firstName;
    const age = 24;

    if(passedTest) {
        firstName = 'mitaly';
    }

    console.log(firstName + ' has passed the test. She is ' + age + ' years old.');
}

driversLicense(true);

var i = 23;

for(var i = 0; i<10; i++) {
    console.log('i', i);
}
console.log(i);

// var fn = 12;
// var fn  = 90;
// console.log(fn);

{
    let a = 12;
}
console.log('a', a);
*/


// String enhancements
/*var john = {
    firstName: 'JOhn',
    'lastName': 'Smith',
    yearBirth: 1990,
    calAge: function() {
        return 2020 - this.yearBirth;
    }
};

// template literal backticks
console.log(`My name is ${john.firstName} ${john['lastName']}. Im ${john.calAge()} years old.`);

// new String methods
let fullName = `${john.firstName} ${john.lastName}`;
console.log(fullName.startsWith('JO'));
console.log(fullName.endsWith('ith'));
console.log(`${fullName} `.repeat(4))
console.log(fullName.includes('n S'))
*/

//Arrow functions
/*var years = [2019, 1983, 2011, 1935];

var ages = years.map(year => 2020 - year);

console.log(ages);

let ages6 = years.map((year, index) => `Age element at ${index+1} is ${2020 - year}`);
console.log(ages6);


var ages = years.map((year, index) => {
    const now = new Date();
    const curYear = now.getFullYear();
    return `Age element ${index+1} : ${curYear - year}`;
});
console.log(ages);*/

// this keyword in Arrow functions -> Lexical
/*let green = {
    color: 'green',
    position: 1,
    clickMe: function() {
        document.getElementsByClassName('green')[0]
            .addEventListener('click', function() {
                // this points to global object - because it is used inside a function
                alert(`The box is ${this.color} and at position ${this.position}.`);
            }.bind(this));
    },
    clickMe1: function() {
        var self = this;
        document.getElementsByClassName('green')[0]
            .addEventListener('click', function() {
                alert(`The box is ${self.color} and at position ${self.position}`);
            });
    },
    clickMe2: function() {
        document.getElementsByClassName('green')[0]
            .addEventListener('click', () => {
                alert(`The box is ${this.color} and at position ${this.position}`);
            });
    },
    // here method is written in arrow function format, which uses this keyword of the surrounding whcih is
    // pointing to global object(WINDOW).
    clickMe3: () => {
        document.getElementsByClassName('green')[0].addEventListener('click', () => {
            alert(`This box is ${this.color} and at position ${this.position}`);
        })
    }
}
green.clickMe();
// green.clickMe1();
// green.clickMe2();
// green.clickMe3();*/

/*function Person(name) {
    this.name = name;
}

Person.prototype.myFriends = function(friends) {
    console.log(this);
    var arr = friends.map(function(curr) {
        return `${this.name} is friends with ${curr}`;
    }.bind(this));
    console.log(arr);
}

// Person.prototype.myFriends = function(friends) {
//     var arr = friends.map(curr => `${this.name} is friends with ${curr}`);
//     console.log(arr);
// }

let john = new Person('John');
john.myFriends(['Bob','Mary']);*/


// Destructuring
/*var johnarr = ['John', 23];
// var name = johnarr[0];
// var age = johnarr[1];

// console.log(name, age);

let [name, age] = johnarr;
console.log(name, age);

var jane =  {
    firstName: 'Jane',
    lastName: 'Smith'
};

let {firstName, lastName} = jane;
console.log(firstName, lastName);

let {firstName: fN, lastName: lN} = jane;
console.log(fN, lN);

// function calAgeRetirement(birthYear) {
//     let age = new Date().getFullYear() - birthYear;
//     return [age, 65 - age];
// }
// let [age2, retirementYears] = calAgeRetirement(1995);
// console.log(age2, retirementYears);


function calAgeRetirement(birthYear) {
    let age = new Date().getFullYear() - birthYear;
    return {
        age2: age,
        retirementYears: 65 - age
    };
}

let {age2: a, retirementYears: b} = calAgeRetirement(1997);
console.log(a, b);
*/

// Arrays in ES6
/*// ES 5
// var boxes = document.querySelectorAll('.box');
// var boxesArr = Array.prototype.slice.call(boxes);
// boxesArr.forEach(function(crr){
//     crr.style.backgroundColor = 'dodgerblue';
// })

// ES6
// Below is HTMLCollection
// var boxes = document.getElementsByClassName('box');
// wrong
// boxes.forEach(el => console.log(el));

// right
// for(var index = 0; index< boxes.length; index++)
//     console.log(boxes[index]);

//right
// for(var el of boxes){
//     console.log(el)
// }

// Array.from(boxes).forEach(el => el.style.backgroundColor = 'dodgerblue');

// Below is NodeList
var boxes = document.querySelectorAll('.box');
Array.from(boxes).forEach(curr => curr.style.backgroundColor = 'dodgerblue');

// ES5
for(var i = 0; i<boxes.length; i++) {
    if(boxes[i].className === 'box blue')
        continue;
    boxes[i].textContent = `I'm blue too!`;
}

// ES6
// for-of loop
for(const box of boxes) {
    if(box.className.includes('blue'))
        continue;
    box.textContent = `i'm blue too!`;
}

// New methods in array
// find and findIndex
var names = ['John', 'Jane', 'Bob', 'Kristina'];
var res = names.findIndex(name => name.startsWith('n'));
console.log(res);*/

// Spread operator - expands elements of array/ NodeList
/*
function addFourAges(a,b,c,d) {
    return a+b+c+d;
}
console.log(addFourAges(10,23,45,67));

// apply method
// ES5
var ages = [10,23,45,67];
console.log(addFourAges.apply(null, ages));

// ES6 - ... expands the array into its arguments
console.log(addFourAges(...ages));

// joining arrays
let ar1 = [1,2];
let ar2 = [3,4];
let ar3 = [...ar1 , 10, ...ar2]
console.log(ar3)

let heading = document.querySelector('h1');
let boxes = document.querySelectorAll('.box');
let allElements = [heading, ...boxes];
allElements.forEach(el => el.style.color = 'purple')


let heading = document.getElementsByTagName('h1');
let boxes = document.getElementsByClassName('box');
let allElements = [...heading, ...boxes];
allElements.forEach(el => el.style.color = 'purple');*/

// Rest parameters
/*
// ES 5
// function isFullAge() {
//     console.log(arguments);
//     var argsArr = Array.prototype.slice.call(arguments);
//     var result = argsArr.map(function(curr) {
//         return new Date().getFullYear() - curr >= 18;
//     });
//     console.log(result);
// }

// isFullAge(1982, 1990, 2010, 2001, 2017);
// ES 6
// function isFullAge(...years) {
//     // true
//     console.log(years instanceof Array)
//     var result = years.map(el => {
//         return new Date().getFullYear() - el >= 18;
//     });
//     console.log(result);
// }

// isFullAge(1982, 1990, 1929, 2019, 2010);

// ES 5
// function isFullAge(ageLimit) {
//     var result = Array.prototype.slice.call(arguments, 1)
//         .map(function(curr){
//             return new Date().getFullYear() - curr >= ageLimit
//         });
//     console.log(result);
// }
// isFullAge(18, 1982, 2019, 1956);

// ES 6
function isFullAge(ageLimit, ...years) {
    let result = years.map(el => new Date().getFullYear() - el >= ageLimit);
    console.log(result);
}
isFullAge(29, 1982, 2019, 1956);*/


// Default parameters
/*// ES5
// function SmithPerson(firstName, birthYear, lastName, nationality) {
//     lastName = lastName === undefined ? 'Smith' : lastName;
//     nationality = nationality === undefined ? 'american' : nationality;

//     console.log(firstName, lastName, birthYear, nationality);
// }
// SmithPerson('John', 1923, 'Kim', 'indian');

function SmithPerson(firsName, birthYear, lastName = 'Smith', nationality = 'american') {
    console.log(firsName, lastName, birthYear, nationality);
}
SmithPerson('Jane', 1938)*/

// Maps
let quiz = new Map();
quiz.set('question', 'Views about coding?');
quiz.set(1, 'Cool');
quiz.set(2, 'Boring');
quiz.set(3, 'Fun');
quiz.set('answer', 3);
quiz.set(true, 'Yey! Correct answer');
quiz.set(false, 'Wrong!');

// console.log(quiz.size);
// if(quiz.has(3)){
//     console.log('we have 3rd option')
// }
// quiz.delete(2);

// quiz.forEach((v, k) => console.log(k, v));

// for(let key of quiz) {
//     console.log(`Key: ${key}, value: ${quiz.get(key)}`);
// }

// for(let [k, v] of quiz.entries()) {
//     console.log(`K: ${k}, v: ${v}`)
// }

console.log(quiz.get('question'));

for(let [k, v] of quiz.entries()) {
    if(typeof(k) === 'number'){
        console.log(`Option ${k} : ${v}`)
    }
}

let choiceByUser = parseInt(prompt(`Please answer the question.\n${quiz.get('question')}`));
console.log(quiz.get(choiceByUser === quiz.get('answer')));