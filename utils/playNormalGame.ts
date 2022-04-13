const { displayResults } = require("./displayResults");
const { getWinner } = require("./getWinner");

async function playNormalGame(p1: number[], p2: number[]): Promise<void> {
    while (Math.abs(p1[2] - p2[2]) < 2 || (p1[2] < 4 && p2[2] < 4)) {
        await getWinner(p1, p2);
        //  DISPLAY RESULTS OF POINTS
        displayResults(p1, p2);
    }
    console.log(`GAME WON BY ${p1[2] > p2[2] ? 'PLAYER 1' : 'PLAYER 2'}`);
}

export { playNormalGame };
