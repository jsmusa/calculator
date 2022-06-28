const buttonBox = document.getElementById('button-box');
const displayBox = document.getElementById('display-box');
const buttons = buttonBox.getElementsByClassName('button');
const display = document.createElement('div');

// displays value of button clicked in display box
for (const button of buttons) {
    button.addEventListener('click',(e) => {
        const displayValue = e.target.textContent;
        display.textContent += displayValue;
        displayBox.appendChild(display);
    })
}

// calculator operation functions
function add(a,b) {
    return a + b;
}

function subtract(a,b) {
    return a - b;
}

function multiply(a,b) {
    return a*b;
}

function divide(a,b) {
    if (b === 0) return 'ERROR, cannot divide by 0';
    else return a/b;
}

function operate(a,b,operation) {
    return operation(a,b);
}