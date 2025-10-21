function createPyramid(height) {

    let pyr = "";

    /**
     * This uses a marching approach, rather than
     * cutting down a max-width string.
     */

    for (i = 0; i < height; i++) {
        // dynamically add spaces to each layer "i"
        for (spaces = 0; spaces < (height - (1 + i)); spaces++) {
            pyr += " ";
        }
        // dynamically add asterisks to each layer "i"
        for (stars = 0; stars < (1 + (2 * i)); stars++) {
            pyr += "*";
        }
        pyr += "\n"
    }

    return pyr;
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
    if (!(size > 0)) {
        // no board
        return "";
    }
    for (row = 0; row < size; row++) {

        for (col = 0; col < size; col++) {

            /* we can get the position at [row][col] 
            with simple addition */
            if ((row + col) % 2 == 0) {

                /* if this "position" is even along
                both the row and column, use O */
                checkerboard += "O";

            } else {
                checkerboard += "X";
            }


        }
        checkerboard += "\n"; // newline after every row 
    }

    return checkerboard;
}

// console.log(createCheckerboard(5));
//console.log(createNumberStaircase(7));
//console.log(createPyramid(5));