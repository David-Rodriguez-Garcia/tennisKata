(async function () {
    //libraries
    const { playSet} = require("./utils/playSet");
    const { rl } = require('./utils/rl');
    //the players points - [sets won, games won, gamePoints]
    let p1 = [0, 0, 0];
    let p2 = [0, 0, 0];
    //while neither one of them has reached 2 sets
    while (p1[0] != 2 && p2[0] != 2) {
        console.log(`SET SCORE: ${p1[0]} - ${p2[0]}`)
        p1[1] = p2[1] = 0;//reset games for new set
        await playSet(p1, p2);
    }
    console.log(`MATCH WON BY ${p1[0] > p2[0] ? 'PLAYER ONE': 'PLAYER TWO'}\nFINAL SCORE: ${p1[0]} - ${p2[0]}`)
    rl.close();
    rl.on('close', function () {
        process.exit(0);
    })
})()
