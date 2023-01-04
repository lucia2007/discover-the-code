// define the available colors in the Options section
const colorPicker = {
    blue: '#3a2fff',
    pink: '#ff2fa8',
    green: '#adff2f',
    red: '#ff442f',
    aqua: '#2ffffb',
    yellow: '#fff42f',
    purple: '#9d2fff',
    orange: '#ffce2f',
}

let userGuessRow = [];
let secretCode = [];
let currentRowIndex = 11;

/** When the dom content is loaded, the predefined colors in the Options section are filled in*/
document.addEventListener("DOMContentLoaded", function () {
    let colorChoices = document.getElementsByClassName('color-choice');

    for (let i = 0; i < colorChoices.length; i++) {
        colorChoices[i].style.backgroundColor = Object.values(colorPicker)[i];
    }

    addColorClickedHandlers();
    addButtonClickedHandlers();
    generateNewSecretCode();
})

/**  This function adds on-click event listeners to all the squares in the Options section 
 **/
function addColorClickedHandlers() {

    let colorChoices = document.getElementsByClassName('color-choice');
    let allRows = document.getElementsByClassName('row');
    let currentRow = allRows[currentRowIndex]
    let currentRowSquare = currentRow.children[0];
    let currentSquares = currentRowSquare.children;

    for (let i = 0; i < colorChoices.length; i++) {
        colorChoices[i].addEventListener("click", function () {
            /** This function identifies which square in Options section was clicked 
             * and assigns its color to the first square in row0 which is not yet colored/taken
             * */
            for (let square of currentSquares) {
                if (!square.classList.contains('is-taken')) {
                    square.style.backgroundColor = Object.values(colorPicker)[i];
                    square.classList.add('is-taken');
                    userGuessRow.push(Object.values(colorPicker)[i]);
                    break;
                }
            }
        })
    }
}

// code inspired by Love Maths
/** This function adds on-click event listeners to all the buttons */
function addButtonClickedHandlers() {
    let buttons = document.getElementsByClassName('button');

    for (let button of buttons) {
        button.addEventListener("click", function () {
            if (this.getAttribute("data-type") === "check") {
                alert("You clicked check");
            } else if (this.getAttribute("data-type") === "restart") {
                alert("You clicked restart");
            } else {
                alert("Something is wrong")
            }
        })
    }
}

/** This function generates a new secret code - assings each square in the Secret code section a random color, 
 * the color is not applied/displayed until later when the game is over
 * it returns the currentSecretCode
 * */
function generateNewSecretCode() {
    let secretSquares = document.getElementsByClassName('secret-code-square');
    for (let i = 0; i < secretSquares.length; i++) {
        let randomNumber = Math.floor(Math.random() * 8);
        secretCode.push(Object.values(colorPicker)[randomNumber]);
    }
}