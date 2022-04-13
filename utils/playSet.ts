const { playGame } = require("./playGame");

async function playSet(p1: number[], p2: number[]): Promise<void> {
    while ((p1[1] != 7 && p2[1] != 7) && (Math.abs(p1[1] - p2[1]) < 2 || (p1[1] != 6 && p2[1] != 6))) {
        await playGame(p1, p2);
    }
    console.log(`SET WON BY PLAYER ${p1[1] > p2[1] ? 'ONE' : 'TWO'}`);
    if (p1[1] > p2[1]) {
        p1[0]++;
    } else {
        p2[0]++;
    }
}

export { playSet };