async function playGame(p1, p2, playNormalGame, playTieBreak) {
    console.log(`GAME SCORE: ${p1[1]} - ${p2[1]}`);
    p1[2] = p2[2] = 0; //reset game points



    //if it's not a tiebreak game
    if (p1[1] != 6 || p2[1] != 6) {
        await playNormalGame(p1, p2);
    } else { //if it is a tiebreak game
        await playTieBreak(p1, p2);
    }
    if (p1[2] > p2[2]) {
        p1[1]++;
    } else {
        p2[1]++;
    }
}
exports.playGame = playGame;
