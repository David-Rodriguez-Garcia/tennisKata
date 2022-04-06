const { getWinnerPlayer } = require("./getWinnerPlayer");


async function getWinner(p1, p2) {
    let winner;
    winner = await getWinnerPlayer();
    while (winner != '1' && winner != '2') {
        console.log('Error - Type 1 or 2');
        winner = await getWinnerPlayer();
    }
    if (winner == '1') {
        p1[2]++;
    } else {
        p2[2]++;
    }
}
exports.getWinner = getWinner;
