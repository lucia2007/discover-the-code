function countBlacks(secret, guess) {
    let blackCounter = 0;

    for (let i = 0; i < secret.length; i++)
        if (secret[i] === guess[i]) {
            blackCounter++;
        }

    return blackCounter;
}

// my husband guided me through this function and encouraged me to write the logic doing test/write approach
function countWhites(secret, guess) {
    let whiteCounter = 0;
    let secretWithoutBlacks = [];
    let guessWithoutBlacks = [];

    for (let i = 0; i < secret.length; i++) {
        if (secret[i] !== guess[i]) {
            secretWithoutBlacks.push(secret[i]);
            guessWithoutBlacks.push(guess[i]);
        }
    }

    while (guessWithoutBlacks.length > 0) {
        if (secretWithoutBlacks.includes(guessWithoutBlacks[0])) {
            whiteCounter++;
            let x = secretWithoutBlacks.indexOf(guessWithoutBlacks[0])
            secretWithoutBlacks.splice(x, 1);
        }
        guessWithoutBlacks.shift();
    }
    return whiteCounter;
}

// https://www.freecodecamp.org/news/how-to-start-unit-testing-javascript/
// https://solaaremupelumi.medium.com/using-es6-import-and-export-statements-for-jest-testing-in-node-js-b20c8bd9041c
export default {
    countBlacks,
    countWhites
}