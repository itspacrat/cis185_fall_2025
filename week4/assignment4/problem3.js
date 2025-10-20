function calculateAverage(scores) {
    // Calculate and return the average of an array of scores
    // Handle empty array case (return 0)

    // look for error

    let scoresAvg = 0
    if (scores.length > 0) {
        for (i = 0; i < scores.length; i++) {
            // initially, let scoresAvg store the sum
            // of all grades
            scoresAvg += scores[i];
        }
        // then use clever single divide-assign for
        // average calculation!
        scoresAvg /= scores.length
    }

    return scoresAvg;

}

function dropLowestScore(scores) {

    // to sort without modification, clone scores
    // into another local array using the "spread"
    // operator during assignment
    let scoresCopy = [...scores]; // unique object

    /* .sort() is intended for character sorting
    originally, so we have to throw it an arrow
    fn as a comparitor, so that it behaves
    correctly on an array of numbers */
    return scoresCopy.sort((a, b) => a - b).slice(1, scoresCopy.length);

}

function getLetterGrade(score) {
    // Return letter grade based on score
}

function curveGrades(scores, curveAmount) {
    // Add curveAmount to each score
    // Cap all scores at 100 (no score above 100)
    // Return new array, don't modify original

    let curvedGrades = []; // initialize empty

    for (i = 0; i < scores.length; i++) {

        if (scores[i] + curveAmount > 100.) {
            // clamp to 100
            curvedGrades.push(100.);
        } else {
            // add curved grade to out array
            curvedGrades.push(scores[i] + curveAmount);
        }

    }

    return curvedGrades;

}

/* DEBUG ZONE */
// use this list as our inout
//let listOfScores = [80., 50., 33., 21., 73., 100., 23., 100., 98., 95., 30.]; // make sure all behave like floats

// console.log(calculateAverage(listOfScores)); // debug, works

// console.log(dropLowestScore(listOfScores)); // debug, works

// console.log(curveGrades(listOfScores, 3)); // debug, works

// check that listOfScores is not modified
// console.log(listOfScores); // debug