//creating an array with body parts
var randomBodyParts = ["butt", "nose", "ear", "toe"];

//array with adjectives
var randomAdjectives = ["smelly", "fishy", "oversized", "tiny"];

//array with random words
var randomWords = ["rat", "dog", "cat", "horse", "boot"];

//choosing a random item from the body parts array
var randomBodyPart = randomBodyParts[Math.floor(Math.random() * 4)];

//choosing a random adjective from the random adjective array
var randomAdjective = randomAdjectives[Math.floor(Math.random() * 4)];

//choosing a random word from the words array
var randomWord = randomWords[Math.floor(Math.random() * 5)];

console.log("Your " + randomBodyPart + " is like a(n) " + randomAdjective + " " + randomWord + "!");