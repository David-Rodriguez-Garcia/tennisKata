const { getWinner } = require("./getWinner");


async function playTieBreak(p1, p2) {
    console.log('TIEBREAK GAME');
    //while the difference is smaller than 2 or both of them are smaller than 7
    while (Math.abs(p1[2] - p2[2]) < 2 || (p1[2] < 7 && p2[2] < 7)) {
        await getWinner(p1, p2);
        //  DISPLAY RESULTS OF POINTS
        console.log(`Current Result: p1: ${p1[2]} p2: ${p2[2]}`);
    }
    console.log(`TIE BREAK WON BY ${p1[2] > p2[2] ? 'PLAYER 1' : 'PLAYER 2'}`);
}
exports.playTieBreak = playTieBreak;
