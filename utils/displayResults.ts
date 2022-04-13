const { results } = require("./utils");

function displayResults(p1: number[], p2: number[]): void {
    //if both are still under 4 points display them
    if (p1[2] < 4 && p2[2] < 4 && (p1[2] != 3 || p2[2] != 3)) {
        if (p1[2] == p2[2]) { //adding the -all if they both have the same points
            console.log(`Current Result: ${results[p1[2]]}-all`);
        } else {
            console.log(`Current Result: p1: ${results[p1[2]]} p2: ${results[p2[2]]}`);
        }
    } else {
        if (Math.abs(p1[2] - p2[2]) < 2) {
            if (p1[2] == p2[2]) {
                console.log('Current result: Deuce');
            } else if (p1[2] > p2[2]) {
                console.log('Current result: Advantage for player 1');
            } else {
                console.log('Current result: Advantage for player 2');
            }
        }
    }
}

export { displayResults };
