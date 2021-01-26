//key-value pairs

var person = {
    name: "Csilla",
    age: 36,
    hungry: true
};

//declare an object and add properties with dot notation

var pizza = {};

pizza.cheese = "mozarella";
pizza.dough = "wheat";
pizza.sauce = "marinara";
pizza.toppings = "ham, mushrooms, olives, onions";
pizza["for whom"] = "me";

console.log(pizza);

//dot and bracket notation

var snowMan = {
    isSnow: true,
    color: "white",
    madeOfSnowballs: 3,
    "first name": "Frosty"
};

//to access the color property:

//dot notation
console.log(snowMan.color);

//bracket notation
console.log(snowMan["first name"]);

//object constructor function
function Home(rooms, color, state, city) {
    this.rooms = rooms;
    this.color = color;
    this.state = state;
    this.city = city;
};

var home1 = new Home(4, "blue", "CA", "Sacramento");
var home2 = new Home(5, "green", "GA", "Atlanta");
var home3 = new Home(6, "red", "NY", "New York");

console.log(home1);

//to assign one of the properties to a variable
var colorHome2 = home2.color;

console.log(colorHome2);