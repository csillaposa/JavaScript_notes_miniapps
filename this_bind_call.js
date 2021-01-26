//this and bind

//exercise 1
 
let person1 = {
    name: 'Alex'
};
 
let person2 = {
    name: 'Alexis'
};
 
function namer() {
     return this.name;
};
 
console.log(namer.bind(person1)());

console.log(namer.bind(person2)());

//exercise 2
 
let number = {
    x: 24,
    y: 22
};
 
let count = function() {
    console.log(this.x + this.y);
}
 
let countBind = count.bind(number);
 
countBind();

//this and call

//exercise 1
 
var pers1 = {
    name: 'Alex'
};
 
var pers2 = {
    name: 'Sara'
};

var myLanguages = function(lang1, lang2, lang3) {
    console.log('My name is ' + this.name + ' and I know ' + lang1 + ' ' + lang2 + ' and ' + lang3);
};
 
myLanguages.call(pers1, 'Java', 'CSS', 'HTML');
 
myLanguages.call(pers2, 'English', 'Norwegian', 'Japanese');

//exercies 2
 
var pers3 = {name: 'Xila'};

//arrays are objects too
var languages = ['English', 'Spanish', 'German'];
 
myLanguages.call(pers3, languages[0], languages[1], languages[2]);