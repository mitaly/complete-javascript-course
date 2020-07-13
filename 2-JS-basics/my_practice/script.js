/**
 * Variables and types
 */
/*
var firstName = 'John'
console.log(firstName)

var lastName = 'Smith'
var age = 28

var job;
console.log(job);

job = 'Teacher'
console.log(job)

//invalid
// var #abd;
//reserved keyword
// var function = 'hello'
// var if  =23 ;        

*/


/**
 * Variable mutation and type coercion
 */
//declaring multiple vairables in single line, and defining then later
 /*var firstName, age;
 firstName = 'Mitaly';
 age = 23;
// Age is automatically converted to string while printing in console
 console.log(firstName +' is of age '+age);
 
 var job = 'teacher';
 alert(firstName + "'s profession is " + job + ' and is of ' + age + ' years old.')

 //type mutation
 age = 'twenty three'
 var lastName = prompt('Enter lastName of '+firstName);
 console.log(firstName + ' ' + lastName);
*/


/**
 * Operators
 */
/*var johnYear, markYear;
now = 2020;
johnYear = now - 28
markYear = now - 27;
console.log(johnYear - markYear);
console.log(johnYear > markYear)

//typeof
console.log(typeof johnYear)
*/


/***
 * Operator precedence
 */
/*
now = 2020;
var johnYear = 2018, fullAge = 20, markYear = 1983;
if(now - johnYear >= fullAge)
    console.log('John is of full age');
else
    console.log('Sorry! Entry not permitted.You have to be old enough');

var markAge = now - markYear;
var johnAge = now - johnYear;
var avgOfAges = (markAge + johnAge)/2;
console.log('Avg age '+avgOfAges);

//multiple assignment
x = y = 10 - 8 * 2;
console.log(x, y)

//more operators
x += 10;
console.log(x);

console.log(++x + y);
*/

/***
 * Coding challenge 1
 */
/*
var massMark, massJohn, heightMark, heightJohn;
massMark = 56, massJohn = 33, heightJohn = 23, heightMark = 12;
var bmiJohn = massJohn /(heightJohn * heightJohn);
var bmiMark = massMark /(heightMark * heightMark);

var isBmiGreater = bmiMark > bmiJohn;
console.log('Is Mark\'s BMI greater than that of John\'s? ', isBmiGreater);
*/

/***
 * ternary/conditional
 */
/*
var isMarried = false;
var statement = isMarried ? 'yes' : 'no';
console.log(statement);

var ageJohn = 1;
ageJohn < 13 ? console.log('John is boy') : ageJohn < 20 ? console.log('John is teenager') : console.log('John is man')
*/

/***
 * swicth
 */
/*
var job = 'soldier'
switch(job){
    case 'teacher':
        console.log('he goes school')
        break;
    case 'soldier':
        console.log('he goes to army base')
        break;
    default:
        console.log('he goes nowhere')
}

var ageJohn = null;
// null evaluates to 0 in following at=rithmetic computation.
// undefined value will execute the default block
switch(true){
    case ageJohn < 13:
        console.log('John is boy')
        break;
    case ageJohn < 20:
        console.log('John is teenager');
        break;
    default:
        console.log('John is man')
}
*/

/***
 * Truthy Falsy values
 */
/*
var ubiqutous = null;
ubiqutous ? console.log('true') : console.log('false')
var height = 23;
if(height || height == 0)
    console.log('height is defined')
else
    console.log('height is NOT defined')

if(height == '23')
    console.log('\'==\' does type coercion')
*/


/***
 * Coding 2
 */
/*
var johnTeamScoreAvg = (89+120+103)/3;
var markTeamScoreAvg = (116+94+123)/3;
var maryTeamScoreAvg = (97+134+105)/3;

if(johnTeamScoreAvg > markTeamScoreAvg && johnTeamScoreAvg > maryTeamScoreAvg)
    console.log('John\'s team won with avg score', johnTeamScoreAvg)
else if(markTeamScoreAvg < johnTeamScoreAvg && markTeamScoreAvg > maryTeamScoreAvg)
    console.log('Mark\'s team won with avg score', markTeamScoreAvg)
else if(maryTeamScoreAvg > johnTeamScoreAvg && maryTeamScoreAvg > markTeamScoreAvg)
    console.log('Mary\'s team won with avg score', maryTeamScoreAvg)
else
    console.log('Game draw')*/

/***
 * Functions
 */
/*
function calculateAge(birthYear){
    return 2020 - birthYear
}
var johnBirthYear = 1995;
console.log('John\'s age is', calculateAge(johnBirthYear))

function calculateRetirementYears(birthYear, firstName){
    var retirementYearsLeft = 65-calculateAge(birthYear);
    if(retirementYearsLeft > 0){
        console.log(firstName, 'has', retirementYearsLeft, 'years left to retire')
        return;
    }
    console.log(firstName, 'is already retired')
}
calculateRetirementYears(1995, 'Mitaly')
calculateRetirementYears(1924, 'sonia')*/


/***
 * Expression function
 */
/*var whatGuyDoes = function(firstName, occupation){
    switch(occupation){
        case 'teacher':
            return firstName + ' teaches'
        case 'soldier':
            return firstName + ' fights'
        default:
            return firstName + ' is jobless'
    }
}

console.log(whatGuyDoes('rita', 'soldier'))
console.log(whatGuyDoes('sonia', 'nothing'))

var functionThatDoesNotReturn = function(firstName){
    console.log(firstName, 'executed the function')
}

functionThatDoesNotReturn('mitaly')*/

/***
 * Arrays
 */
/*
var johnDetails = ['John', 'Smith', 45, 1983, false]
johnDetails.push('teacher')
console.log(johnDetails)
johnDetails.pop()
console.log(johnDetails)
johnDetails.unshift('Mr.')
console.log(johnDetails)
johnDetails.shift()
console.log(johnDetails)
console.log(johnDetails.indexOf('John'))
*/

/***
 * Coding 3
 */
/*function tipCalculator(bills){
    var tips = [], finalAmnt = [];
    for(bill of bills){
        var tip;
        if(bill < 50)
            tip = bill * 0.2
        else if(bill < 200)
            tip = bill * 0.15
        else
            tip = bill * 0.1
        tips.push(tip)
        finalAmnt.push(bill + tip)
    }
    console.log(tips)
    console.log(finalAmnt)
}
var bills = new Array(124,48,268);
tipCalculator(bills)*/


/***
 * Object and properties
 */
/*var john = {
    firstName: 'John',
    'lastName': 'Smith',
    age: 23,
    isMarried: false,
    familyMembers: ['Mia', 'Roza']
}

console.log(john.firstName)
john['age'] = 89
console.log(john.age)

// new Object
// var ria = new Object({
//     firstName: 'Ria',
//     'lastName': 'Sharma',
//     age: 33,
//     isMarried: false,
//     familyMembers: ['Kim']
// })
var ria = new Object()
ria.firstName = 'Ria'
ria.lastName = 'Sharma'
ria.age = 23
ria.isMarried = false
console.log(ria['age'])*/

/****
 * Objects and Methods
 */
/*
var john = {
    firstName: 'John',
    lastName: 'Smith',
    birthYear: 1983,
    calculateAge: function(){
        this.age = 2020-this.birthYear
    }
}
// john.age = john.calculateAge()
john.calculateAge()
console.log(john)*/


/***
 * Coding 4
 */
/*
var john = {
    firstName: 'John',
    lastName: 'Smith',
    mass: 110,
    height: 1.95,
    calculateBMI: function(){
        this.BMI = this.mass/(this.height**2)
        return this.BMI
    }
}

var mark = {
    firstName: 'Mark',
    lastName: "Smit",
    mass: 34,
    height: 9.3,
    calculateBMI: function(){
        this.BMI = this.mass/this.height**2
        return this.BMI
    }
}

var johnBMI = john.calculateBMI()
var markBMI = mark.calculateBMI()

switch(true){
    case johnBMI > markBMI:
        console.log(john.firstName,john.lastName,'has BMI', john.BMI)
        break;
    case markBMI > johnBMI:
        console.log(mark.firstName, mark.lastName, 'has BMI', mark.BMI)
        break;
    default:
        console.log('They have same BMI')        
}
*/

/***
 * for and while
 */
/*
for(var index = 0; index < 10; index++){
    console.log('for',index,'printed')
}

var index = -1;
while(++index<10){
    if(index < 5)
        continue;
    console.log('while',index,'printed')
}*/


/***
 * Coding 5
 */
var billAndTip = {
    firstName: 'John',
    bills: [124, 48, 268, 180, 42],
    tips: [],
    finalAmnts: [],
    calculateTips: function(){
        for(var index = 0; index < this.bills.length; index++){
            var percentage;
            var bill = this.bills[index];
            if(bill < 50)
                percentage = 0.2;
            else if(bill < 200)
                percentage = 0.15
            else
                percentage = 0.1
            var tip = bill * percentage;
            this.tips.push(tip)
            this.finalAmnts.push(tip + bill)
        }
    }
}

billAndTip.calculateTips();
console.log('tips',billAndTip.tips)
console.log('finalAmnts', billAndTip.finalAmnts)

var billAndTipMark = {
    firstName: 'mark',
    bills: [77, 375, 110, 45],
    tips: [],
    finalAmnts: [],
    calculateTips: function(){
        for(var index = 0; index < this.bills.length; index++){
            var percentage;
            var bill = this.bills[index];
            if(bill < 100)
                percentage = 0.2;
            else if(bill < 300)
                percentage = 0.1
            else
                percentage = 0.25
            var tip = bill * percentage;
            this.tips.push(tip)
            this.finalAmnts.push(tip + bill)
        }
    }
}

billAndTipMark.calculateTips()

function calculateAvgTips(tips){
    var sum = 0;
    for(tip of tips){
        sum += tip
    }
    return sum/tips.length;
}

var johnTipsAvg = calculateAvgTips(billAndTip.tips)
var markTipsAbg = calculateAvgTips(billAndTipMark.tips)

var personWhoPaidMore = johnTipsAvg > markTipsAbg ? billAndTip : johnTipsAvg < markTipsAbg ? billAndTipMark : null;

if(personWhoPaidMore){
    console.log(personWhoPaidMore.firstName,'paid more')
}else
    console.log('Both paid equal')