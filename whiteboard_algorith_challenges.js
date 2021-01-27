//name swap

function changeNameOrder(name) {
    var reverse = name.split(' ').reverse().join(' ');
    console.log(reverse);
}

changeNameOrder("Csilla Posa");

//remove odd numbers from array 

function removeOdd(array) {
    var evenNumbers = [];
    for (var i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0) {
            array[i] = evenNumbers.push(array[i]);
        }
    }
    console.log(evenNumbers);
}

//removeOdd([1,2,3,4,5,6]);

//remove odd numbers from array with FILTER METHOD

function removeOddWithFilter(array) {
    return array.filter(function(number) {
        if (number % 2 === 0) {
            return number;
        }
        console.log(array);
    });
}

removeOddWithFilter([10,9,8,7]);

//repeat a string with for loop

function repeatString(word, count) {
    wordArray = [];
    for (var i = 0; i < count; i++) {
        wordArray.push(word);
    }
    return wordArray.join('');
}

console.log(repeatString("car", 5));

//repeat a string with for loop solution 2

function repeatString2(word, count) {
    var repeatString = "";
    for (var i = 0; i < count; i++) {
        repeatString += word;
    }
    return repeatString;
}

console.log(repeatString2("cat", 9));