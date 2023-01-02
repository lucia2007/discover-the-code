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


document.addEventListener("DOMContentLoaded", function (I) {
    let colorChoice = document.getElementsByClassName('color-choice');

    for (let i = 0; i < colorChoice.length; i++) {
        colorChoice[i].style.backgroundColor = Object.values(colorPicker)[i];
    }

    // console.log(document.getElementsByClassName('color-choice'));
})