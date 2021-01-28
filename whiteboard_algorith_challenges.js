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

//alphabetize string letters with SORT METHOD

function alpahbetizeString(word) {
    var alpahbetizeString = word.split('').sort().join('');
    return alpahbetizeString;
}

console.log(alpahbetizeString("flower"));

//alphabetize string letters with SORT METHOD and SPREAD SYNTAX

function alpahbetizeString2(word) {

    //spreads the elements
    return [...word].sort().join('');
}

console.log(alpahbetizeString2("plant"));

//filter numbers or strings in an array

function filterArray(array) {
    return array.filter( item => typeof item === "number")
}

console.log(filterArray([1,2,'a','b']));

function filterArray2(array) {
    return array.filter( item => typeof item === "string")
}

console.log(filterArray2([1,2,'a','b']));

//find the largest number in an array

function findLargestNumber(array) {
    return Math.max(...array);
}

console.log(findLargestNumber([1,2,3,4,5]));

//reverse a string

function reverseString(word) {
    return word.split('').reverse().join('');
}

console.log(reverseString("flower"));

//reverse a string with SPREAD SYNTAX

function reverseString2(word) {
    return [...word].reverse().join('');
}

console.log(reverseString2("plant"));

//reverse a string with FOR LOOP

function reverseString3(word) {
    var reverseString = '';
    for (var i = word.length - 1; i >= 0; i--) {
        reverseString += word[i];
    }
    return reverseString;
}

console.log(reverseString3("dog"));

//reverse a string with FOR OF LOOP

function reverseString4(word) {
    var reverseString = '';
    for (var count of word) {
        reverseString = count + reverseString;
    }
    return reverseString;
}

console.log(reverseString4("cat"));

//check if a sentence is palindrome

function isPalindrome(sentence) {
    var noSpecialChar = sentence.replace(/\W/g, '');
    var noUpperCase = noSpecialChar.toLowerCase();
    var reverseSentence = noUpperCase.split('').reverse().join('');
    if (noUpperCase === reverseSentence) {
        return true;
    } else {
        return false;
    }
}

console.log(isPalindrome("A nut for a jar of tuna?"));