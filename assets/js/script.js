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

// when the dom content is loaded, fill in the predefined colors in the Options section
document.addEventListener("DOMContentLoaded", function () {
    let colorChoices = document.getElementsByClassName('color-choice');

    for (let i = 0; i < colorChoices.length; i++) {
        colorChoices[i].style.backgroundColor = Object.values(colorPicker)[i];
    }

    addColorClickedHandlers();
})

// add onclick event listeners to the squares in the Options section 
function addColorClickedHandlers() {
    let colorChoices = document.getElementsByClassName('color-choice');
    let currentSquares = document.getElementsByClassName('square-row0');

    for (let i = 0; i < colorChoices.length; i++) {
        colorChoices[i].addEventListener("click", function () {
            // identify which square in Options section was clicked and assign its color to the first square in row0 which is not yet taken
            for (let square of currentSquares) {
                if (!square.classList.contains('is-taken')) {
                    square.style.backgroundColor = Object.values(colorPicker)[i];
                    square.classList.add('is-taken');
                    break;
                }
            }
        })
    }
}