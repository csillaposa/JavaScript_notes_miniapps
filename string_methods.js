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