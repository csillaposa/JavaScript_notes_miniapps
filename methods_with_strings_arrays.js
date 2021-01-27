//check if first and last instances of character are the same 
 
function unique(str) {
    for (var i = 0; i < str.length; i++) {
        if (str.indexOf(str[i]) !== str.lastIndexOf(str[i])) {
            return false;
        } else {
            return true;
        }
    }
}
 
console.log(unique("door"));

//given a string find the length of the longest word in the string
 
function maxWord(str) {
    var words = str.split(' ');
    var biggestWord = 0;
    for (var i = 0; i < words.length; i++) {
        if (words[i].length > biggestWord) {
            biggestWord = words[i].length;
        }
    }
    return biggestWord;
}
 
console.log(maxWord("the longest word"));

//determine if two strings are a permutation of each other
 
function isPermutation(str1, str2) {
    return str1.split('').sort().join('') == str2.split('').sort().join('');
}
 
console.log(isPermutation('door','odor')); 

//add together all numbers in a range

function addAll(array) {
    var total = 0;
    var i = 0;
    while (i < array.length) {
        total += array[i];
        i++;
    }
    return total;
}

console.log(addAll([1,2,3,4,5,6]));

//find the smallest and biggest number in a range

function findMin(array) {
    var min = Number.MAX_VALUE;
    for (var i = 0; i < array.length; i++) {
        if (array[i] < min) {
            min = array[i];
        }
    }
    console.log("The smallest number is: " + min);
}

function findMax(array) {
    var max = Number.MIN_VALUE;
    for (var i = 0; i < array.length; i++) {
        if (array[i] > max) {
            max = array[i];
        }
    }
    console.log("The biggest number is: " + max);
}

function findMinAndMax(array) {
    var min = findMin(array);
    var max = findMax(array);
    return min + max;
}

findMinAndMax([1,2,3]);