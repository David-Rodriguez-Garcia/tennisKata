const { playGame } = require("./playGame");
const { playNormalGame } = require("./playNormalGame");
const { playTieBreak } = require("./playTieBreak");


async function playSet(p1, p2) {
    while ((p1[1] != 7 && p2[1] != 7) && (Math.abs(p1[1] - p2[1]) < 2 || (p1[1] != 6 && p2[1] != 6))) {
        await playGame(p1, p2, playNormalGame, playTieBreak);
    }
    console.log(`SET WON BY PLAYER ${p1[1] > p2[1] ? 'ONE' : 'TWO'}`);
    if (p1[1] > p2[1]) {
        p1[0]++;
    } else {
        p2[0]++;
    }
}

exports.playSet = playSet;