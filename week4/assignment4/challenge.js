function decimalToBinary(decimal) {
    /* uses recursion & Math.floor() to simulate "integer" division */
    if (Math.floor(decimal / 2) == 0) {
        // clamp to 0 to prevent infinite recursion
        return decimal % 2; // the final zero
    } else {
        return parseInt(/* resulting partial decimal string */ , 10)
    }

}

function binaryToDecimal(binary) {
    // Convert binary string to decimal number
    // Don't use parseInt(binary, 2)!
}

function decimalToHexadecimal(decimal) {
    // Convert decimal to hexadecimal string
    // Use 0-9 and A-F for digits
    // Don't use toString(16)!
    //decimal = decimal.floor(); // make sure its all int
}

console.log(decimalToBinary(1.));