import logic from './logic.js';

// define the available colors in the Options section
const colorPicker = {
    blue: '#3a2fff',
    pink: '#ff2fa8',
    green: '#adff2f',
    red: '#ff442f',
    aqua: '#2ffffb',
    yellow: '#fff42f',
    purple: '#9d2fff',
    orange: '#FFA400',
}

let userGuessRow = [];
let secretCode = [];
let currentRowIndex = 11;
let moves = 0;
let result = []

const checkCodeButton = document.getElementById("check-code");
const colorChoices = document.getElementsByClassName("color-choice");
const allRows = document.getElementsByClassName("row");
const closeIcon = document.getElementById("close");
const welcomeMessage = document.getElementById("welcome-pop-up");
const questionIcon = document.getElementById("question-mark")
const winningPopUp = document.getElementById("you-won-pop-up")
const loosingPopUp = document.getElementById("you-lost-pop-up")
const winningChime = document.getElementById("winning-chime")
const secretCodeSquares = document.getElementById("ctn-secret-code").children
const keys = document.getElementsByClassName("no-key")

/** When the dom content is loaded, the predefined colors in the Options section are filled in*/
document.addEventListener("DOMContentLoaded", function () {

    displayWelcomeMessage();
    addButtonClickedHandlers();
    addQuestionMarkHandler();
    addCloseIconHandler();
    disableCheckButton();

    for (let i = 0; i < colorChoices.length; i++) {
        colorChoices[i].style.backgroundColor = Object.values(colorPicker)[i];
    }

    addColorClickedHandlers();
    generateNewSecretCode();
})

//** This function makes the Welcome pop-up appear */
function displayWelcomeMessage() {
    welcomeMessage.style.display = "flex";
};

/**This function adds on-click event listener to the Close icon */
function addCloseIconHandler() {
    closeIcon.addEventListener("click", function () {
        welcomeMessage.style.display = "none";
    })
};

function addQuestionMarkHandler() {
    questionIcon.addEventListener("click", function () {
        welcomeMessage.style.display = "flex";
    })
}


/** This function defines a set of tasks to be performed when the Play button is clicked */
function playButtonClicked() {
    welcomeMessage.style.display = "none";
    // here add the setting of the initial state
};


function playAgainButtonClicked() {
    winningPopUp.style.display = "none";
    // here add the setting of the initial state
}

function exitButtonClicked() {
    winningPopUp.style.display = "none";
}

function playAgainButton2Clicked() {
    loosingPopUp.style.display = "none";
    // here add the setting of the initial state
}

function exitButton2Clicked() {
    loosingPopUp.style.display = "none";
}

/** This function makes the Check button unclickable */
function disableCheckButton() {
    checkCodeButton.disabled = true;
};

/** This function makes the Check button clickable */
function enableCheckButton() {
    checkCodeButton.disabled = false;
};


/**  This function adds on-click event listeners to all the squares in the Options section 
 **/
function addColorClickedHandlers() {
    for (let i = 0; i < colorChoices.length; i++) {
        colorChoices[i].addEventListener("click", function () {
            /** This function identifies which square in Options section was clicked 
             * and assigns its color to the first square in row[currentRowIndex] which is not yet colored/taken
             * */

            // startTimer();

            let currentRow = allRows[currentRowIndex];
            let currentRowSquare = currentRow.children[0];
            let currentSquares = currentRowSquare.children;

            /**This for loop lets the user fill in the five squares */
            for (let square of currentSquares) {
                if (!square.classList.contains('is-taken')) {
                    square.style.backgroundColor = Object.values(colorPicker)[i];
                    square.classList.add('is-taken');
                    userGuessRow.push(Object.values(colorPicker)[i]);
                    if (userGuessRow.length === 5) {
                        enableCheckButton();
                    } else {
                        break;
                    }
                }
            }
        })
    }
};

// code inspired by Love Maths
/** This function adds on-click event listeners to all the buttons */
function addButtonClickedHandlers() {
    let buttons = document.getElementsByClassName('button');

    for (let button of buttons) {
        button.addEventListener("click", function () {
            // endTimer();
            // for a version where you can change your choices, you will need to add a check here if all the squares in the current row are taken
            if (this.getAttribute("data-type") === "check") {

                result = getResult();
                displayResult(result[0], result[1]);
                disableCheckButton();
                userGuessRow = [];
                moves++;
                currentRowIndex--;
                displayMoves(moves);
                guessed();
                if (moves === 12) {
                    alert("You have exceeded your number of attempts")
                }
            } else if (this.getAttribute("data-type") === "restart") {
                alert("You clicked restart");
            } else if (this.getAttribute("data-type") === "play") {
                playButtonClicked();
            } else if (this.getAttribute("data-type") === "play-again") {
                playAgainButtonClicked();
            } else if (this.getAttribute("data-type") === "play-again-2") {
                playAgainButton2Clicked();
            } else if (this.getAttribute("data-type") === "exit") {
                exitButtonClicked();
            } else if (this.getAttribute("data-type") === "exit-2") {
                exitButton2Clicked();
            } else {
                alert("Something is wrong")
            }
        })
    }
};

/** This function generates a new secret code - assigns each square in the Secret code section a random color, 
 * the color is not applied/displayed until later when the game is over
 * it returns the currentSecretCode
 * */
function generateNewSecretCode() {
    let secretSquares = document.getElementsByClassName('secret-code-square');
    for (let i = 0; i < secretSquares.length; i++) {
        let randomNumber = Math.floor(Math.random() * 8);
        secretCode.push(Object.values(colorPicker)[randomNumber]);
    }
    console.log(secretCode);
    // delete this console log
};

/** This function returns the number of black and white circles */
function getResult() {
    let blackCount = logic.countBlacks(secretCode, userGuessRow);
    let whiteCount = logic.countWhites(secretCode, userGuessRow);

    return [blackCount, whiteCount];
};


/**This function colors the correct number of circles in black or white */
function displayResult(blacks, whites) {
    let currentRow = allRows[currentRowIndex];
    let currentRowCircle = currentRow.children[1];
    let currentCircles = currentRowCircle.children;

    for (let i = 0; i < currentCircles.length; i++) {
        if (currentCircles[i].classList.contains('is-taken')) {
            continue;
        }
        if (blacks > 0) {
            currentCircles[i].style.backgroundColor = "black";
            currentCircles[i].style.border = "solid 2px black";
            currentCircles[i].classList.add('is-taken');
            blacks--;
        } else if (whites > 0) {
            currentCircles[i].style.backgroundColor = "white";
            currentCircles[i].style.border = "solid 2px black";
            currentCircles[i].classList.add('is-taken');
            whites--;
        }
    }
};

function displayMoves(moves) {
    document.getElementById('moves-needed').textContent = moves;
};

function guessed() {
    if (result[0] === 5) {
        playWinningChime();
        displayWinningPopUp();
        displaySecretCode();
        hideKeys();
    }
}

function playWinningChime() {
    winningChime.play()
}

function displayWinningPopUp() {
    winningPopUp.style.display = "flex";
}

function displaySecretCode() {
    for (let i = 0; i < secretCodeSquares.length; i++) {
        let square = secretCodeSquares[i];
        square.style.backgroundColor = secretCode[i]
    }
}

function hideKeys() {
    for (let i = 0; i < keys.length; i++) {
        let key = keys[i];
        key.style.display = "none";
    }
}

// /**  functions startTimer and endTimer were taken for this webpage:
//  * https://stackoverflow.com/questions/41632942/how-to-measure-time-elapsed-on-javascript
//  */

// function startTimer() {
//     startTime = performance.now();
// };

// function endTimer() {
//     endTime = performance.now();
//     var elapsedTime = endTime - startTime; //in ms
//     // convert to seconds
//     elapsedTime /= 1000;

//     // get seconds 
//     var seconds = Math.round(elapsedTime);
//     console.log(seconds + 'seconds');
// }