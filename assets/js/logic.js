/** This function compares the elements in the secret code array with elements in the array made of the user's guesses
 * It takes in two parameters: the secret code array and an array of color chosen by the user
 * If the colors and their positions correspond, the number of blacks increases
 * The function returns the number of black circles to be later displayed in the clues
 */
function countBlacks(secret, guess) { // Laters the generated secret code and the users guess will be passed as argument into this function
    let blackCounter = 0;

    for (let i = 0; i < secret.length; i++)
        if (secret[i] === guess[i]) { // Here we are checking if elements in both arrays at a certain index position are identical
            blackCounter++; // If the elements at a certain index position are identical, we increase the number of black clues
        }

    return blackCounter; // The function returns the number of black clues
}

// My husband guided me through this function and encouraged me to write the logic using test/write (TDD) approach
/** This function returns the number of white clues
 * It takes in two parameters: secret and guess
 * Firstly, this function gets rid of the correct color guesses which are in the right position by creating arrays secretWithoutBlacks and guessWithoutBlacks
 * Secondly, it checks if colors in the user's guess are included in the secretWithoutBlacks. The include function is sufficient here, as we no longer worry about the position of the colors.
 * 
 */
function countWhites(secret, guess) {
    let whiteCounter = 0;
    let secretWithoutBlacks = [];
    let guessWithoutBlacks = [];

    for (let i = 0; i < secret.length; i++) {
        if (secret[i] !== guess[i]) { // This condition checks if the elements on a certain index position in secret code and the user's guess are not identical 
            secretWithoutBlacks.push(secret[i]); // If the elements at a certain index in both arrays are not identical, we add the element to an array secretWithoutBlacks
            guessWithoutBlacks.push(guess[i]); // If the elements at a certain index in both arrays are not identical, we also add the element to an array guessWithoutBlacks
        }
    }

    //Now we have two arrays without the guessed colors with corresponding index position
    while (guessWithoutBlacks.length > 0) {
        if (secretWithoutBlacks.includes(guessWithoutBlacks[0])) { // As now we don't care about the position of the elements being identical, we can use includes() which tells us if the element in one array is included in the other array
            whiteCounter++; // If a guessed color is included in the secretWithoutBlacks, we increase the counter of white clues
            let x = secretWithoutBlacks.indexOf(guessWithoutBlacks[0]);
            secretWithoutBlacks.splice(x, 1); // After an element has been checked, we take it out of the secretWithoutBlacks array so it wouldn't return an incorrect number of white clues
        }
        guessWithoutBlacks.shift(); // Here we take away the element which has been checked from the guessWithoutBlacks array so we don't check it repeatedly
    }
    return whiteCounter; // This returns the number of white clues
}

// https://www.freecodecamp.org/news/how-to-start-unit-testing-javascript/
// https://solaaremupelumi.medium.com/using-es6-import-and-export-statements-for-jest-testing-in-node-js-b20c8bd9041c
export default {
    countBlacks,
    countWhites
};