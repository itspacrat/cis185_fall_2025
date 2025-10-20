function countLeaves(days) {

    let total = 0;

    if (days <= 0) {
        // no leaves have fallen yet
        total = 0;
    } else {
        // initial offset + 10x each day,
        // minus the first day
        total = 10 + (10 * (days - 1))
    }

    return total;
}

function categorizeLeafColors(leaves) {

    let colorCount = {}; // will be a KVP structure

    for (i = 0; i < leaves.length; i += 1) { // instead of i++ for fun
        if (leaves[i] in colorCount) {
            colorCount[leaves[i]] += 1
        } else {
            colorCount[leaves[i]] = 1
        }
    }

    return colorCount;
}

// console.log(countLeaves(4)); // debug, works

// let leafcolors = ["red", "yellow", "brown", "green", "yellow", "brown", "red", "orange", "chartreuse", "orange", "yellow", "red", "brown"];
// console.log(categorizeLeafColors(leafcolors)); // debug, works
