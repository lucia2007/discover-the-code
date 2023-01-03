function countBlacks(secret, guess) {
    let blackCounter = 0;

    for (let i = 0; i < secret.length; i++)
        if (secret[i] === guess[i]) {
            blackCounter += 1;
        }

    return blackCounter;
}

// https://www.freecodecamp.org/news/how-to-start-unit-testing-javascript/
module.exports = {
    countBlacks,
}