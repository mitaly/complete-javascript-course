//function constructor
/*
var Person = function(name, yearOfBirth, job){
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
}

Person.prototype.calculateAge = function() {
    return 2020 - this.yearOfBirth
}

Person.prototype.lastName = 'Smith';

var john = new Person('John', 1934, 'teacher');

console.log(john.calculateAge())
*/

//Object.create()
/*
var personProto = {
    calculateAge: function() {
        return 2020 - this.birthYear;
    }
}

var john = Object.create(personProto);
john.name = 'John';
john.job = 'teacher';
john.birthYear = 1938;

console.log(john)

var jane = Object.create(personProto, {
    name : {value: 'Jane'},
    job: {value: 'dancer'},
    birthYear: {value: 1945}
})

console.log(jane)*/

//Primitives vs objects
/*
var a = 23;
var b = a;
a = 99;
console.log('b', b);

var obj1 = {
    thing: 'ball'
}

var obj2 = obj1;
obj2.thing = 'desk'
console.log('obj1.thing', obj1.thing)

//functions
var prim = 2;
var obj = {
    'name':'john'
}
function change(a, b){
    a = 90;
    b.name = 'jane';
}
change(prim, obj)
console.log(prim, obj)*/


//Passing functions as arguments
/*
var years = [1989, 1992, 1971, 1929, 2009];

function arrayCalulcate(arr, fn) {
    var resArr = [];
    for(var i = 0; i<arr.length; i++) {
        resArr.push(fn(arr[i]));
    }
    return resArr;
}

function calculateAge(year) {
    return 2020 - year;
}

function isFullAge(age) {
    return age >= 18;
}

function calculateHeartRate(age) {
    if(age >= 18 && age <= 81)
        return Math.round(206.9 - (0.67 * age));
    return -1;
}

var ages = arrayCalulcate(years, calculateAge);
var fullAges = arrayCalulcate(ages, isFullAge);
var heartRates = arrayCalulcate(ages, calculateHeartRate);

console.log(ages);
console.log(fullAges);
console.log(heartRates);*/


// Return functions
/*
function giveQuestion(job) {
    if(job === 'sweeper') {
        return function (name) {
            console.log(name, ',Where do you sweep?');
        }
    }else if(job === 'master') {
        return function(name) {
            console.log(name, ', In which field you are master at?');
        }
    }else {
        return function(name) {
            console.log(name, ', What is your job?');
        }
    }
}

var questionForMaster = giveQuestion('master');
questionForMaster('John');
var questionForSweeper = giveQuestion('sweeper');
questionForSweeper('Mike');
var questionWithNoJob = giveQuestion('noJob');
questionWithNoJob('Neha');

giveQuestion('master')('Kriti');    
*/

//Immediately Invoked Function Expressions(IIFE)
// function printRandomNumber() {
//     var random = Math.random() * 10;
//     console.log(random);
// }

// printRandomNumber();

/*
(function(name) {
    var random = Math.random() * 10;
    console.log(name, random);
})('mitaly');


//Closures
function giveQuestion(job) {
    //job is accessible within the next function even though outer function returns.
    return function(name) {
        if(job === 'teacher') {
            console.log(name, ', What do you teach?');
        }else if(job === 'doctor') {
            console.log(name, 'In which hospital did you serve?');
        }else {
            console.log(name, 'what is your job?');
        }
    }
}

giveQuestion('doctor')('maria')
*/

// Bind, call, apply
/*
var john = {
    name : 'JOhn',
    job : 'teacher',
    greet : function(typeOfGreet, meetingTime, meetingHours) {
        if(typeOfGreet === 'formal') {
            console.log('Have a very good', meetingTime, '! I am', this.name, '.I am a', this.job, 'by profession.',
            'This meeting would last for', meetingHours, 'hours');
        }else {
            console.log('Hey! Good', meetingTime, 'I\'m', this.name, 'working as', this.job, 'Bear me for another',
            meetingHours, 'hours');
        }
    }
}

john.greet.call(mark, 'formal', 'afternoon', 3);


john.greet('casual', 'morning', 2);

var mark = {
    name : 'Mark',
    job : 'attendent'
}

// mark.greet = john.greet;
mark.greet('formal', 'afternoon', 3);

john.greet.call(mark, 'formal', 'afternoon', 3);
john.greet.apply(mark, ['formal', 'afternoon', 3]);

var markGreet = john.greet.bind(mark, 'casual', 'evening', 4);

markGreet();

// bind
var years = [1989, 1992, 1971, 1929, 2009];

function arrayCalulcate(arr, fn) {
    var resArr = [];
    for(var i = 0; i<arr.length; i++) {
        resArr.push(fn(arr[i]));
    }
    return resArr;
}

function calculateAge(year) {
    return 2020 - year;
}

function isFullAge(limit, age) {
    return age >= limit;
}

var ages = arrayCalulcate(years, calculateAge);
console.log(ages);

var isFullAgeJapan = isFullAge.bind(this, 20);
var fullAgesJapan = arrayCalulcate(ages, isFullAgeJapan);
console.log(fullAgesJapan);*/


//Coding 7
// (function() {
//     function QuestionCons(question, options, correctOption) {
//         this.question = question;
//         this.options = options;
//         this.correctOption = correctOption;
//     }
    
//     QuestionCons.prototype.displayQuestion = function() {
//         console.log(this.question);
//         for(var index = 0; index < this.options.length; index++) {
//             console.log(index + ':' + this.options[index]);
//         }    
//     }

//     QuestionCons.prototype.checkCorrectOption = (function() {
//         var score = 0;
//         return function(optionChosen) {
//             if(optionChosen === questionChosen.correctOption) {
//                 console.log('Correct!');
//                 score++;
//             }else {
//                 console.log('Incorrect! You poor');
//             }
//             this.displayScore(score);
//         }
//     })();
    
//     QuestionCons.prototype.displayScore = function(score) {
//         console.log('Your current score is', score);
//         console.log('------------------------------');
//     }

//     var question1 = new QuestionCons('How is the climate of Ludhiana?', ['moderate', 'hot', 'cold'], 0);
//     var question2 = new QuestionCons('Is india a developed country?', ['Yes', 'No'], 1);
//     var question3 = new QuestionCons('Which earphones are best?', ['Sony', 'Realme', 'Mi'], 1);
//     var i = 0;

//     while(i <= 5){
//         var questionsArray = [question1, question2, question3];
//         var randomQuestionNum = Math.floor(Math.random() * questionsArray.length);
//         var questionChosen = questionsArray[randomQuestionNum];
//         questionChosen.displayQuestion();
//         var optionChosen = parseInt(prompt(questionChosen.question + '\nEnter option number.'));
//         questionChosen.checkCorrectOption(optionChosen);
//         i++;
//     }
// })();


// Coding 7 v2
(function() {
    function QuestionCons(question, options, correctOption) {
        this.question = question;
        this.options = options;
        this.correctOption = correctOption;
    }
    
    QuestionCons.prototype.displayQuestion = function() {
        console.log(this.question);
        for(var index = 0; index < this.options.length; index++) {
            console.log(index + ':' + this.options[index]);
        }    
    }

    QuestionCons.prototype.checkCorrectOption = function(optionChosen) {
            var score;
            if(optionChosen === questionChosen.correctOption) {
                console.log('Correct!');
                // score++;
                score = getScore(true);
            }else {
                console.log('Incorrect! You poor');
                score = getScore(false);
            }
            this.displayScore(score);
    };
    
    function score() {
        var score = 0;
        return function(isCorrectAnswer) {
            return isCorrectAnswer ? ++score : score;
        }
    }
    var getScore = score();

    QuestionCons.prototype.displayScore = function(score) {
        console.log('Your current score is', score);
        console.log('------------------------------');
    }

    var question1 = new QuestionCons('How is the climate of Ludhiana?', ['moderate', 'hot', 'cold'], 0);
    var question2 = new QuestionCons('Is india a developed country?', ['Yes', 'No'], 1);
    var question3 = new QuestionCons('Which earphones are best?', ['Sony', 'Realme', 'Mi'], 1);
    var i = 0;

    while(i <= 5){
        var questionsArray = [question1, question2, question3];
        var randomQuestionNum = Math.floor(Math.random() * questionsArray.length);
        var questionChosen = questionsArray[randomQuestionNum];
        questionChosen.displayQuestion();
        var optionChosen = parseInt(prompt(questionChosen.question + '\nEnter option number.'));
        questionChosen.checkCorrectOption(optionChosen);
        i++;
    }
})();
