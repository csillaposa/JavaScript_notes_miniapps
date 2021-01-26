//to determine how much calories you ate in one week

function caloriesPerWeek() {

    var daysOfTheWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

    var caloriesPerWeek = 0;
    
    for (var i = 0; i < 7; i++) {
        var caloriesPerDay = parseInt(prompt("Calorie intake on " + daysOfTheWeek[i]));
        caloriesPerWeek += caloriesPerDay;
    }
    
    return caloriesPerWeek;
}

function calculateHealthPlan() {
    var actualCalories = caloriesPerWeek();
    var idealCalories = 2000 * 7;

    if (actualCalories === idealCalories) {
        return "You ate right!";
    } else if (actualCalories > idealCalories) {
        return "Go hit the gym!";
    } else {
        return "You can eat more!";
    }
}