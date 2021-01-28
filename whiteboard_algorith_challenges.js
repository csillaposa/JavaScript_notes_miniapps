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

//repeat a string with FOR LOOP

function repeatString(word, count) {
    if (count > 0) {
        wordArray = [];
    for (var i = 0; i < count; i++) {
        wordArray.push(word);
        }
    }
    return wordArray.join('');
}

console.log(repeatString("car", 5));

//repeat a string with FOR LOOP solution 2

function repeatString2(word, count) {
    if (count > 0) {
        var repeatString = "";
    for (var i = 0; i < count; i++) {
        repeatString += word;
        }
    }
    return repeatString;
}

console.log(repeatString2("cat", 9));

//repeat a string with WHILE LOOP

function repeatString3(word, count) {
    if (count > 0) {
        var repeatString = "";
    var i = 0;
    while (i < count) {
        repeatString += word;
        i++;
        }
    }
    return repeatString;
}

console.log(repeatString3("wow", 3));

//find the longest string with REPLACE METHOD and REGEX

function findLongestWord(sentence) {

    //to remove all non-word characters
    var stringWithoutSpecials = sentence.replace(/\W/g, ' ');
    var longestWord = 0;
    var arrayOfWords = stringWithoutSpecials.split(' ');

    for (var i = 0; i < arrayOfWords.length; i++) {
        if (arrayOfWords[i].length > longestWord) {
            longestWord = arrayOfWords[i].length;
        }
    }
    return longestWord;
}

console.log(findLongestWord("Hello my name is whatever."));

//find the longest string with REPLACE METHOD and REGEX and with FOR OF

function findLongestWord2(sentence) {

    var stringWithoutSpecials = sentence.replace(/\W/g, ' ');
    var longestWord = '';
    var arrayOfWords = stringWithoutSpecials.split(' ');

    for (var count of arrayOfWords) {
        if (count.length > longestWord.length) {
            longestWord = count;
        }
    }
    return longestWord.length;
}

console.log(findLongestWord2("Hello my name is whatever."));

