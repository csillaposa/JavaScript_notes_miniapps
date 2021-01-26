//create a function
 
function goodMorningNeighbor() {
    return 'Good morning, neighbor!';
}
 
//to call the function
goodMorningNeighbor();
 
//with parameters and arguments
function goodMorning(name) {
    return 'Good morning ' + name + '!';
}
 
goodMorning('Jane');
goodMorning('John');
 
//with more parameters and arguments
function goodMorning(name, task) {
    return 'Good morning, ' + name + '! Thanks for ' + task + '!';
}
 
goodMorning('Mary', 'feeding the cat');

//functions part 2

function knockKnock() {
    return 'Who\'s there?';
}
 
knockKnock();
 
//turn it into a function expression
 
var knockKnock = function() {
    return 'Who\'s there?';
}
 
//returns the function that hasn't been called yet
knockKnock;
 
//returns Who's there?
knockKnock();
 
function dogWalker(person, dog) {
    return person + ' is taking ' + dog + ' for a walk.';
}
 
dogWalker('Paul', 'Charlie');
 
//turn it into an IIFE (doesn't need to assign it to a variable)
var dogWalker = (function(person, dog) {
    return person + ' is taking ' + dog + ' for a walk.';
}('Rian', 'Monty'));
 
//to call it, the variable name is enough
dogWalker;

//scope

function roadTrip() {
    var gallons = 12;
    var mpg = 34;
    return gallons * mpg;
}
 
//move the variables to the global scope
 
var gallons = 15;
var mpg = 20;
 
function roadTrip() {
    return gallons * mpg;
}
 
roadTrip();
 
//nested functions
 
//local scope
var height = 10;
 
function volume() {
    //parent scope
    var width = 10;
    var length = 10;
    var volumeOfObj = function() {
        //child or local scope
        return length * width * height;
    }
    //return value of function expression volumeOfObj
    return volumeOfObj();
}
 
volume();