//this game is similar to rock paper scissors
//possible outcomes:
//bear mauls human
//human disarms gun
//gun shoots bear

//get the user's choice
function getUserChoice(userInput) {
    userInput = userInput.toLowerCase();
    if (userInput === "bear" || userInput === "human" || userInput === "gun") {
        return userInput;
    } else {
        return "Please enter a valid word!";
    }
}

//get the computer's choice
function getComputerChoice() {
    var randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber) {
        case 0:
            console.log("bear");
            break;
        case 1:
            console.log("human");
            break;
        case 2:
            console.log("gun");
            break;
    }
}

//compare the choices and choose the winner
function determineWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        return "It is a tie";
    }
    if (userChoice === "human") {
        if (computerChoice === "bear") {
            return "You have been mauled by a bear.";
        } else {
            return "You have disarmed a gun.";
        }
    }
    if (userChoice === "bear") {
        if (computerChoice === "gun") {
            return "You have been shot by a gun.";
        } else {
            return "You have mauled a human.";
        }
    }
    if (userChoice === "gun") {
        if (computerChoice === "human") {
            return "Your gun has been disarmed";
        } else {
            return "You have shot a bear.";
        }
    }
}

//start the program and display results
function playGame() {
    var promptUserChoice = prompt("Please choose bear, human or gun!");
    var userChoice = getUserChoice(promptUserChoice);
    var computerChoice = getComputerChoice();
    console.log(userChoice);
    console.log(computerChoice);
    console.log(determineWinner(userChoice, computerChoice));
}

playGame();