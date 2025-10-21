function createPyramid(height) {
    // Build a centered pyramid of asterisks (*)
    // Example: height = 4 →
    //    *
    //   ***
    //  *****
    // *******
    // Return as a string with \n between lines
    for (i = 0; i < height; i++) {

    }
}

function createNumberStaircase(steps) {

    let out = ""

    for (i = 0; i < steps; i++) {
        // create each step iteratively
        let step = "";
        for (j = 1; j <= i + 1; j++) {
            step += j;
        }
        // add the created step at the bottom
        out += step + "\n";
    }
    return out;
}

function createCheckerboard(size) {

    // store an empty board to modify
    // with our even-odd checks
    let checkerboard = "";

    // Square the size to fit the whole board
    for (i = 1; i < size * size + 1; i++) {
        for (j = 0; i < size + 1; j++) {
            if (i % 2 == 0 && j % 2 == 0) {
                checkerboard += "O";
            } else {
                checkerboard += "X";
            }
        }
        // check if we break the line here as well
        if (i > 0 && i % (size) == 0) {
            checkerboard += "\n";
        }
    }
    return checkerboard;
}

//console.log(createCheckerboard(7));
//console.log(createNumberStaircase(60));