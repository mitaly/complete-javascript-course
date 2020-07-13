///////////////////////////////////////
// Lecture: Hoisting

/*
//hoisted - that's why we can execute the function before declaration
calculateAge(1982);

//function declaration - gets hoisted
function calculateAge(year){
    console.log(2020 - year)
}

// console.log(getFirstName())

//function expression - does not get hoisted
var getFirstName = function(){
    return "mitaly";
}
console.log(getFirstName());

//hoisting variables
console.log(age)
var age = 89;

function printAge(){
    console.log(age)
    var age = 2;
    console.log(age);
}
printAge();
console.log(age);
*/




///////////////////////////////////////
// Lecture: Scoping


// First scoping example

/*
var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        console.log(a + b + c);
    }
}
*/



// Example to show the differece between execution stack and scope chain

/*
var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        third()
    }
}

function third() {
    var d = 'John';
    console.log(a + b + c + d);
}
*/

///////////////////////////////////////
// Lecture: The this keyword

// console.log(this)

function random(){
    console.log(this)
}

random()

var john = {
    firstname: 'john',
    yearOfBirth: 1983,
    calculateAge: function(){
        console.log(this)
        console.log(2020 - this.yearOfBirth)

        printSomething()
        function printSomething(){
            console.log('something')
            console.log(this)
        }
    }
}

john.calculateAge()

var mike = new Object({
    firstName: 'mike',
    yearOfBirth: 1934
})

mike.calculateAge = john.calculateAge
mike.calculateAge()







