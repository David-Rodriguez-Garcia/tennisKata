const { rl } = require("./rl");

//get input from command line
function getWinnerPlayer() {
    return new Promise((resolve, reject) => {
        rl.question("Winner: ", function (response: string) {
            resolve(response);
        })
    })
}

export { getWinnerPlayer };
