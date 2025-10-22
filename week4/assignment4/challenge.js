function decimalToBinary(decimal) {
    let out = ""

    while (Math.floor(decimal / 2) != 0) {
        out = out + (decimal % 2);
        decimal = Math.floor(decimal / 2);
    }
    return out;
}


// console.log(decimalToBinary(1.));
// BROKEN, did not finish in time :((