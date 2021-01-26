//Challange: convert any given temperature in Kelvin to Fahrenheit

function kelvinToFahrenheit(kelvinTemp) {
    //temperature in Celsius
    var celsiusTemp = kelvinTemp - 273.15;

    //temperature in Fahrenheit
    var fahrenheitTemp = celsiusTemp * (9/5) + 32;

    //to round down the Fahrenheit temperature
    fahrenheitTemp = Math.floor(fahrenheitTemp);

    return "The temperature is " + fahrenheitTemp + " degrees Fahrenheit.";
}

console.log(kelvinToFahrenheit(301));