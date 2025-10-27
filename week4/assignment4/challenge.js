function decimalToBinary(decimal) {

    let binStr = ""

    if (decimal == 0) {
        binStr = "0" // handle base case 
        return binStr;
    }

    while (decimal > 0) {
        let bit = decimal % 2;
        binStr = bit + binStr; // append but leftwards...
        decimal = Math.floor(decimal / 2);
    }

    return binStr;
}


// console.log(decimalToBinary(5.)); // debug, works