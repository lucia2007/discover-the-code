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

let userGuessRow;
let secretCode;
let currentRowIndex;
let moves;

const checkCodeButton = document.getElementById("check-code");
const colorChoices = document.getElementsByClassName("color-choice");
const allRows = document.getElementsByClassName("row");
// const closeIcon = document.getElementById("close");
const welcomeMessage = document.getElementById("welcome-pop-up");
const questionIcon = document.getElementById("question-mark");
const musicIcon = document.getElementById("music-note");
const winningPopUp = document.getElementById("you-won-pop-up");
const losingPopUp = document.getElementById("you-lost-pop-up");
const winningChime = document.getElementById("winning-chime");
const losingChime = document.getElementById("losing-chime");
const secretCodeSquares = document.getElementById("ctn-secret-code").children;
const keys = document.getElementsByClassName("no-key");
const score = document.getElementById("ctn-score");
const playground = document.getElementById("ctn-playground");
const secondHeading = document.getElementById("second-heading");
const colors = document.getElementById("ctn-colors");
const buttons = document.getElementById("buttons");
const playgroundSquares = document.getElementsByClassName("playground-square");
const playgroundCircles = document.getElementsByClassName("playground-circle");
const timer = document.getElementById("time-elapsed");
const movesCount = document.getElementById("moves-needed");
const focusMusic = document.getElementById("focus-music");

let [milliseconds, seconds, minutes, hours] = [0, 0, 0, 0];
let int = null;


/** When the dom content is loaded:
 * initial state is set
 * welcome message is displayed
 * playground and pick your color sections are hidden
 * buttons handlers are added based on event listeners
 * question mark handler is added based on event listeners
 * music icon is added based on event listeners
 * color clicked handlers based on event listeners are added
 * the predefined colors in the Options section are filled in
 * new secret code is generated
 * colors in the color picker are filled in
 * */
document.addEventListener("DOMContentLoaded", function () {

    setInitialState();
    displayWelcomeMessage();
    hideScoreAndPlaygroundAndColorPicker();
    addButtonClickedHandlers();
    addQuestionMarkHandler();
    addMusicIconHandler();
    // addCloseIconHandler();
    addColorClickedHandlers();
    fillInTheColorPicker();
    generateNewSecretCode();
})

function setInitialState() {
    // changes the color of the squares back to grey
    userGuessRow = [];
    clearBackgroundColorSquares();

    // changes the color of the circles back to grey and takes away border
    clearBackgroundColorCircles();
    clearBorderCircles();

    // this moves us back to the first (11th) row
    currentRowIndex = 11;
    moves = 0;
    displayMoves();

    // this clears timer
    clearInterval(int);
    [milliseconds, seconds, minutes, hours] = [0, 0, 0, 0];
    timer.innerHTML = "00:00";

    // this function generates a new secret code
    generateNewSecretCode();

    // this function sets the background color of the secret code squares back to grey
    clearBackgroundColorSecretCodeSquares();

    // this function displays the keys on the grey secret code sqaures
    showKeys();

    // this function disables the check button
    disableCheckButton();

    // unglow all rows/squares
}

//** This function makes the Welcome pop-up appear */
// code inspired by Love Maths
/** This function adds on-click event listeners to all the buttons */
function addButtonClickedHandlers() {
    let buttons = document.getElementsByClassName('button');

    for (let button of buttons) {
        button.addEventListener("click", function () {
            // endTimer();
            // for a version where you can change your choices, you will need to add a check here if all the squares in the current row are taken
            // depending on which button was clicked, different events will take place

            if (this.getAttribute("data-type") === "check") { // if check button is clicked

                let result = getResult();
                displayResult(result[0], result[1]); // clues are displayed in the circles
                disableCheckButton(); // check button is disabled
                userGuessRow = [];
                moves++; // number of moves is increased
                currentRowIndex--; // current row index is decreased
                displayMoves(); // number of moves is displayed


                if (currentRowIndex > -2 && result[0] === 5) {
                    guessed(); // this checks if the secret code was quessed in less than 13 attempts; if yes, the guessed() function runs
                } else if (currentRowIndex < 0 && result[0] !== 5) {
                    youLost(); // this checks if the secret code was not guessed despite using 12 attempts
                }

            } else if (this.getAttribute("data-type") === "restart") { // if restart button is clicked, the game is reset into intial state    
                setInitialState();
                // startTimer();

            } else if (this.getAttribute("data-type") === "play") { // if play button is clicked, a function runs which resets the game to initial state
                playButtonClicked();
                // startTimer();

            } else if (this.getAttribute("data-type") === "play-again") { // if play again button is clicked (when a user won), a function runs which resets the game to initial state    
                playAgainButtonClicked();
                // startTimer();

            } else if (this.getAttribute("data-type") === "play-again-2") { // if play again 2 button is clicked (when a user lost), a function runs which resets the game to initial state    
                playAgainButton2Clicked();
                // startTimer();

            } else if (this.getAttribute("data-type") === "close") { // if close button is clicked (when a user won), the user is shown the playground with his guesses
                closeButtonClicked();

            } else if (this.getAttribute("data-type") === "close-2") { // if close 2 button is clicked (when a user lost), the user is shown the playground with his guesses
                closeButton2Clicked();

            } else {
                alert("Something is wrong")
            }
        })
    }
};

/**This function adds on-click event listener to the Close icon */
// function addCloseIconHandler() {
//     closeIcon.addEventListener("click", function () {
//         welcomeMessage.style.display = "none";
//     })
// };

/** This function opens and closes the Welcome pop-up and shows or hides the plaground and pick your color sections */
function addQuestionMarkHandler() {
    questionIcon.addEventListener("click", function () {
        if (welcomeMessage.style.display === "flex") {
            welcomeMessage.style.display = "none";
            showScoreAndPlaygroundAndColorPicker();
        } else {
            welcomeMessage.style.display = "flex";
            hideScoreAndPlaygroundAndColorPicker();
        }
    })
}

/** This function turns music on/off.
 * Tutorial: https://www.youtube.com/watch?v=wffK2OIt8u0
 */
function addMusicIconHandler() {
    let count = 0;

    musicIcon.addEventListener("click", function () {
        if (count == 0) {
            count = 1;
            focusMusic.play();
        } else {
            count = 0;
            focusMusic.pause();
        }
    });
};

/**  This function adds on-click event listeners to all the squares in the Options section 
 * starts the stopwatch when one of the squares in the Pick your Color section is clicked
 * assignes the clicked color to the first grey square starting from the left
 **/
function addColorClickedHandlers() {
    for (let i = 0; i < colorChoices.length; i++) {
        colorChoices[i].addEventListener("click", function () {
            /** This function identifies which square in Options section was clicked 
             * and assigns its color to the first square in row[currentRowIndex] which is not yet colored/taken
             * */

            // when any of the squares are clicked, the timer/stopwatch starts
            startTimer();

            /**This for loop lets the user fill in the five grey squares in the current row
             * When a certain color is clicked, the respective color is assigned to the left-most square which has grey background color, until all five squares are filled
             */

            let currentRow = allRows[currentRowIndex];
            let currentRowSquare = currentRow.children[0];
            let currentSquares = currentRowSquare.children;

            for (let square of currentSquares) {
                if (!square.classList.contains('is-taken')) {
                    square.style.backgroundColor = Object.values(colorPicker)[i];
                    square.classList.add('is-taken');
                    userGuessRow.push(Object.values(colorPicker)[i]);
                    // checkBackgroundColor();
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

// Each square in the Pick Your color section is assigned a color from the color picker which is an array of available colors
function fillInTheColorPicker() {
    for (let i = 0; i < colorChoices.length; i++) {
        colorChoices[i].style.backgroundColor = Object.values(colorPicker)[i];
    }
}

/** This function generates a new secret code - it assigns each square in the Secret code section a random color, 
function addCurrentRowSquaresHandler() {

    let currentRow = allRows[currentRowIndex];
    let currentRowSquare = currentRow.children[0];
    let currentSquares = currentRowSquare.children;

    // This function lets the user delete a previously chosen color
    // Add an if statement which checks if you are in the current row
    for (let square of currentSquares) {
        // maybe these 3 lines can be global, as I use them in two different places

        square.addEventListener("click", function () {
            if (square.classList.contains('is-taken')) {
                square.classList.remove('is-taken');
                square.style.backgroundColor = "#D9D9D9";
            }
            // square.classList.add("is-taken");
        });
    };
};

//** This function makes the Welcome pop-up appear */
function displayWelcomeMessage() {
    welcomeMessage.style.display = "flex";
};

/** This function hides the Welcome pop-up  and shows the plaground and the color picker when the Play button is clicked */
function playButtonClicked() {
    showScoreAndPlaygroundAndColorPicker();
    welcomeMessage.style.display = "none";
};

/** All timer/stopwatch related code was taken from this tutorial:
 * https://foolishdeveloper.com/create-a-simple-stopwatch-using-javascript-tutorial-code/ 
 * */
function startTimer() {
    if (int !== null) {
        clearInterval(int);
    }
    int = setInterval(displayTime, 10);
}


function displayTime() {
    milliseconds += 10;
    if (milliseconds == 1000) {
        milliseconds = 0;
        seconds++;
        if (seconds == 60) {
            seconds = 0;
            minutes++;
            if (minutes == 60) {
                minutes = 0;
                hours++;
            }
        }
    }
    let h = hours < 10 ? "0" + hours : hours;
    let m = minutes < 10 ? "0" + minutes : minutes;
    let s = seconds < 10 ? "0" + seconds : seconds;
    let ms = milliseconds < 10 ? "0" + milliseconds : milliseconds < 100 ? "0" + milliseconds : milliseconds;
    timer.innerHTML = `${m} : ${s}`;
};

/** This function defines a set of tasks to be performed when the Play again button is clicked 
 * The game is reset to the inital state
 */
function playAgainButtonClicked() {
    winningPopUp.style.display = "none";
    showScoreAndPlaygroundAndColorPicker();
    setInitialState();
}

/** This function hides the winning modal and shows the playground with the user's guesses and the color picker after the Close button was clicked*/
function closeButtonClicked() {
    winningPopUp.style.display = "none";
    showScoreAndPlaygroundAndColorPicker();
}

/** This function hides the losing pop up and shows the playground 
 * and the color picker after the Play again button was clicked. 
 * It also resets the game to the initial state.
 * */
function playAgainButton2Clicked() {
    losingPopUp.style.display = "none";
    showScoreAndPlaygroundAndColorPicker();
    setInitialState();
}

/** This function closes the losing pop up and displays the playground and the color picker
 * after the close button on the losing modal was clicked.
 */
function closeButton2Clicked() {
    losingPopUp.style.display = "none";
    showScoreAndPlaygroundAndColorPicker();
}

/** This function makes the Check button unclickable */
function disableCheckButton() {
    checkCodeButton.disabled = true;
    checkCodeButton.style.backgroundColor = "#D9D9D9";
    checkCodeButton.style.color = "#2B303A";
};

/** This function makes the Check button clickable */
function enableCheckButton() {
    checkCodeButton.disabled = false;
    checkCodeButton.style.backgroundColor = "#2B303A";
    checkCodeButton.style.color = "white";
};

/** This function generates a new secret code - assigns each square in the Secret code section a random color, 
 * the color is not applied/displayed until later when the game is over
 * it returns the currentSecretCode
 * */
function generateNewSecretCode() {
    let secretSquares = document.getElementsByClassName('secret-code-square');
    secretCode = [];
    for (let i = 0; i < secretSquares.length; i++) {
        let randomNumber = Math.floor(Math.random() * 8);
        secretCode.push(Object.values(colorPicker)[randomNumber]);
    }

    // delete this function when finished
    // https://bobbyhadz.com/blog/javascript-get-object-key-by-value
    function getObjectKey(obj, value) {
        return Object.keys(colorPicker).find(key => colorPicker[key] === value);
    }

    for (let i = 0; i < secretSquares.length; i++) {
        console.log(getObjectKey(colorPicker, secretCode[i]));
    }
    console.log("\n");
};

/** This function returns the number of black and white circles 
 * A separate file is used for functions countBlacks and countWhites as test driven development was used for making sure
 * the logical part of the game functions correctly
 */
function getResult() {
    let blackCount = logic.countBlacks(secretCode, userGuessRow);
    let whiteCount = logic.countWhites(secretCode, userGuessRow);

    return [blackCount, whiteCount];
};


/**This function colors the correct number of circles in black or white in the current row*/
function displayResult(blacks, whites) {
    let currentRow = allRows[currentRowIndex];
    let currentRowCircle = currentRow.children[1];
    let currentCircles = currentRowCircle.children;

    for (let i = 0; i < currentCircles.length; i++) {
        if (currentCircles[i].classList.contains('is-taken')) {
            continue;
        }
        if (blacks > 0) { // sets the color of the circle to black
            currentCircles[i].style.backgroundColor = "black";
            currentCircles[i].style.border = "solid 2px black";
            currentCircles[i].classList.add('is-taken');
            blacks--;
        } else if (whites > 0) { // set the color of the circle to white and makes a black border around the circle for contrast
            currentCircles[i].style.backgroundColor = "white";
            currentCircles[i].style.border = "solid 2px black";
            currentCircles[i].classList.add('is-taken');
            whites--;
        }
    }
};

// this function displays the number of moves
function displayMoves() {
    movesCount.textContent = moves;
};

/**  When the user guessed the secret code:
 * the timer is cleared
 * the winning chime playes
 * the winning pop up is displayed
 * the playground and color picker are hidden
 * the secret code is revealed
 * the keys on the secret code squares are hidden
 */
function guessed() {
    clearInterval(int);
    playWinningChime();
    displayWinningPopUp();
    hideScoreAndPlaygroundAndColorPicker();
    displaySecretCode();
    hideKeys();
}

/** When the user loses:
 * the timer is cleared
 * the losing chime is played
 * the losing pop up is displayed
 * the playground and color picker are hidden
 * the secret code is displayed
 * the keys on the secret code squares are hidden
 */
function youLost() {
    clearInterval(int);
    playLosingChime();
    displayLosingPopUp();
    hideScoreAndPlaygroundAndColorPicker();
    displaySecretCode();
    hideKeys();
}

function playWinningChime() {
    winningChime.play();
}

function playLosingChime() {
    losingChime.play();
}

/** This function displays the winning pop up
 * it displays the time elapsed since the beggining of the game
 * it shows the number of moves used
 * it uses the singular/plural form of attempt/s depending of the number of moves used
 */
function displayWinningPopUp() {
    winningPopUp.style.display = "flex";
    let timeElapsed = document.getElementById("time-elapsed").innerHTML;
    let finalTime = document.getElementById("final-time");
    finalTime.innerHTML = timeElapsed;


    let movesNeeded = document.getElementById("moves-needed").innerHTML;
    console.log(movesNeeded);
    let movesTotal = document.getElementById("moves-total");
    console.log(movesTotal);
    movesTotal.innerHTML = movesNeeded;

    let attempts = document.getElementById("attempts");

    if (movesNeeded > 2) {
        attempts.innerHTML = " attempts";
    } else {
        attempts.innerHTML = " attempt";
    }
}

function displayLosingPopUp() {
    losingPopUp.style.display = "flex";
}

// This function colors the secret code squares background to the generated random colors
function displaySecretCode() {
    for (let i = 0; i < secretCodeSquares.length; i++) {
        let square = secretCodeSquares[i];
        square.style.backgroundColor = secretCode[i]
    }
}

// This function hides the keys from the secret code squares
function hideKeys() {
    for (let i = 0; i < keys.length; i++) {
        let key = keys[i];
        key.style.display = "none";
    }
}

// This function reveals the keys in the secret code squares
function showKeys() {
    for (let i = 0; i < keys.length; i++) {
        let key = keys[i];
        key.style.display = "block";
        key.style.textAlign = "center";
        key.style.paddingTop = "0.25rem";
    }
}

// This function hides the playground and the color picker section
function hideScoreAndPlaygroundAndColorPicker() {
    score.style.display = "none";
    playground.style.display = "none";
    secondHeading.style.display = "none";
    colors.style.display = "none";
    buttons.style.display = "none";
}

// This function reveals the playground and the color picker section
function showScoreAndPlaygroundAndColorPicker() {
    score.style.display = "flex";
    playground.style.display = "flex";
    secondHeading.style.display = "block";
    colors.style.display = "flex";
    buttons.style.display = "flex";
}

// This function clears the background color of the squares in the playground
function clearBackgroundColorSquares() {
    for (let playgroundSquare of playgroundSquares) {
        playgroundSquare.style.backgroundColor = "#D9D9D9";
        playgroundSquare.classList.remove("is-taken");
    }
}

// This function clears the background color of the squares in the secret code squares
function clearBackgroundColorSecretCodeSquares() {
    for (let square of secretCodeSquares) {
        square.style.backgroundColor = "#D9D9D9";
    }
}

// This function clears the background color of the circles
function clearBackgroundColorCircles() {
    for (let playgroundCircle of playgroundCircles) {
        playgroundCircle.style.backgroundColor = "#D9D9D9";
    }
}

// This function clears the border from the white circles
function clearBorderCircles() {
    for (let playgroundCircle of playgroundCircles) {
        playgroundCircle.style.border = "";
        playgroundCircle.classList.remove("is-taken");
    }
}