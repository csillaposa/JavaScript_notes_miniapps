//arrays are for storing similar values
//arrays are untyped, they can store every JS primitive
 
var animals = ['cat', 'dog', 'fish', 'bird', 'frog'];
 
//add a value to the end of the arrays
animals[5] = 'monkey';
 
//turn dog into horse
animals[1] = 'horse';
 
//access the cat value and save it as myFavoriteAnimal
var myFavoriteAnimal = animals[0];
 
//access the length of the arrays
console.log(animals.length);

console.log(animals);

//array methods: unshift, push, shift, pop

var shoppingList = ['apples', 'pizza', 'chicken', 'mushrooms', 'oranges', 'beef'];

//insert 'crackers' at the front
shoppingList.unshift('crackers');

//insert 'grapes' at the end
shoppingList.push('grapes');

//remove the first item
shoppingList.shift();

//remove the last items
shoppingList.pop();

console.log(shoppingList);

//pop and shift first return the value, then remove it
//capturing values: assigning them to variables
var firstItem = shoppingList.shift();

console.log(firstItem);
 
var lastItem = shoppingList.pop();

console.log(lastItem);

console.log(shoppingList);

//array methods: concat, reverse, slice

var colors = ['red', 'orange', 'yellow', 'green'];
 
var colors2 = ['blue', 'black', 'white'];

//add the two arrays together
var allColors = colors.concat(colors2);

console.log(allColors);

//sort the elements alphabetically
var sortColors = allColors.sort();

console.log(sortColors);

//reverse the order of the elements
var reverseColors = allColors.reverse();

console.log(reverseColors);

//return the last 4 items
var lastFourItems = allColors.slice(-4);

console.log(lastFourItems);