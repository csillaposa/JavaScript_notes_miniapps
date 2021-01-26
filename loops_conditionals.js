//if else

var temp = 74;
var rainy = true;
 
if (temp > 90) {
    console.log('I am going swimming');
} else if (temp > 80) {
    console.log('Time for a tan');
} else if ((temp > 70) && (!rainy)) {
    console.log('I am going for a walk');
} else if ((temp > 70) && (rainy)) {
    console.log('I need my umbrella')
} else {
    console.log('I am staying home')
}

//switch

var number = Math.floor(Math.random() * 7);
//we can also pass it as an argument to the switch statement
//like this: switch(Math.floor(Math.random() * 7))
switch(number) {
    case 0:
        console.log('Please roll the dice!');
        break;
    case 1:
        console.log('You have rolled 1');
        break;
    case 2:
        console.log('You have rolled 2');
        break;
    case 3:
        console.log('You have rolled 3');
        break;
    case 4:
        console.log('You have rolled 4');
        break;
    case 5:
        console.log('You have rolled 5');
        break;
    case 6:
        console.log('You have rolled 6');
        break;
}

//while loop
 
var i = 0;
 
while (i < 5) {
    console.log('The counter has run ' + (i + 1) + ' times.');
    i++;
}
 
// do while loop
 
var counter = 5;
 
do {
    console.log('Loop has run even with false expression');
    counter++;
} while (counter < 5);
 
//for loop
 
var numbers = [56, 44, 39, 81, 92, 16, 23, 55, 49, 27];
 
for (i = 0; i < numbers.length; i++) {
    if (numbers[i] < 50) {
        console.log('Sorry, you have failed!');
    } else if (numbers[i] > 65) {
        console.log('Your grade is satisfactory');
    } else if ((numbers[i] > 75) && (numbers.length[i] < 85)) {
        console.log('Your grade is good');
    } else {
        console.log('Your grade is excellent');
    }
}
 
numbers.length;