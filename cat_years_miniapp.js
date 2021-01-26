//App to find out how old would you be, if you were a cat

function myAgeInCatYears (myAge) {
    //the first two years of a cat's life count as 25

    var earlyYears = 2;
    earlyYears *= 25;

    //to count further
    var laterYears = myAge - 2;
    laterYears *= 4;

    //to calculate the final cat years
    var myAgeInCatYears = earlyYears + laterYears;

    var myName = "Csilla";

    return "My name is " + myName + ", I am " + myAge + " years old in human years and " + myAgeInCatYears + " years old in cat years.";
}

console.log(myAgeInCatYears(36));