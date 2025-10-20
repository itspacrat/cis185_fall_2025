// Complete these functions

const { Fragment } = require("react/jsx-runtime");

function celsiusToFahrenheit(celsius) {

    return (celsius * (9 / 5)) + 32;
}

function fahrenheitToCelsius(fahrenheit) {

    return (fahrenheit - 32) * (5/9);
}

function getTemperatureDescription(fahrenheit) {

    if (fahrenheit < 32) {
        return "Freezing";
    } else if (fahrenheit >= 32 && fahrenheit < 51) {
        return "Cold";
    } else if (fahrenheit >= 51 && fahrenheit < 71) {
        return "Cool";
    } else if (fahrenheit >= 71 && fahrenheit <= 85){
        return "Warm";
    } else /* otherwise > 85 */ {
        return "Hot";
    }
}
