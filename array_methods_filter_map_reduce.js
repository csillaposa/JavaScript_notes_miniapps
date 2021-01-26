//filter

var weather = [72, 84, 34, 56, 92, 24, 47, 85, 72, 54];
 
var goOutside = [];
 
//with for loop
 
for (var i = 0; i < weather.length; i++) {
    if (weather[i] > 70) {
       goOutside.push(weather[i])
    }
}
 
// with filter method
 
//solution 1
 
var niceWeather = function(temp) {
    return temp > 70;
}
 
var goOutside = weather.filter(niceWeather);

console.log("Solution 1: " + goOutside);
 
//solution 2
 
var goOutside = weather.filter(function(temp) {
    return temp > 70;
})

console.log("Solution 2: " + goOutside);
 
//exercise 2
 
var forecast = [
    {day: 'Monday', sun: true},
    {day: 'Tuesday', sun: false},
    {day: 'Wednesday', sun: false},
    {day: 'Thirsday', sun: true},
    {day: 'Friday', sun: false},
    {day: 'Saturday', sun: true},
    {day: 'Sunday', sun: false}
]
 
var sunnyDays = [];
 
// with for loop
 
for (var i = 0; i < forecast.length; i++) {
    if (forecast[i].sun) {
        sunnyDays.push(forecast[i]);
    }
}

sunnyDays;
 
//with filter method
//we don't have to create an ampty array, because filter returns a new array anyway
 
var sunnyDays2 = forecast.filter(function(weather) {
    return weather.sun;
})
 
sunnyDays2;

//map

//map does not delete, but transforms every element
//builds a new array
 
var numbers = [2, 4, 6, 8, 10, 12];

//cascading functions
var double = numbers.map(function(mult) {
    return mult * 2;
}).map(function(mult) {
    return mult + 1;
})

console.log(double);
 
//exercise 2
 
var greetings = ['hi', 'hello', 'hey', 'thanks'];
 
var shout = greetings.map(function(salutation) {
    return salutation.toUpperCase();
})
 
console.log(shout);
 
//exercise 3
 
var whisper = shout.map(function(salutation) {
    return salutation.toLowerCase();
})
 
console.log(whisper);

//reduce

//exercise 1
 
var numbers = [5, 10, 15, 20, 25];
 
numbers.reduce(function(x, y) {
    console.log(x, y);
    return x + y;
})
 
numbers.reduce(function(x, y) {
    console.log(x, y);
    return x * y;
})
 
//exercise 2
 
var numbers2 = [10, 5, 20, 25, 15];
 
numbers2.reduce(function(acc, curr) {
    if (acc > curr) {
        return acc;
    } else {
        return curr;
    }
})
 
//exercise 3
 
var numbers3 = [1, 2, 3, 4];
 
var triples = numbers3.map(function(num) {
    return num * 3;
}).reduce(function(a,b) {
    console.log(a, b);
    return a + b;
}, 0);
 
triples;