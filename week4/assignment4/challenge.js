function decimalToBinary(decimal) {

    let binStr = ""

    if (decimal == 0) {
        binStr = "0" // handle base case 
        return binStr;
    }

    while (decimal > 0) {
        let bit = decimal % 2;
        binStr += bit;
        Math.floor(decimal /= 2);
    }

    return binStr.split('').reverse().join('');
}


console.log(decimalToBinary(1.));
// BROKEN, did not finish in time :((