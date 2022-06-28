const buttonBox = document.getElementById('button-box');
const displayBox = document.getElementById('display-box');
const buttonNumber = buttonBox.getElementsByClassName('button number');
const buttonOperator = buttonBox.getElementsByClassName('button operator');
const display = document.createElement('div');
let displayValue = '';
let secondNum;
let firstNum = '';
let operatorValue;
let answer;

for (const button of buttonNumber) {
    button.addEventListener('click', displayInBox);
}

for (const button of buttonOperator) {
    button.addEventListener('click',storeValue)
}

// calculator operation functions
const operation = {
    add(a,b) {
        return a + b;
    },
    subtract(a,b) {
        return a - b;
    },
    multiply(a,b) {
        return a*b;
    },
    divide(a,b) {
        if (b === 0) return 'ERROR, cannot divide by 0';
        else return a/b;
    },
}

// console.log(operate(+'-2',+'9','add'));

function operate(a,b,operator) {
    switch(operator) {
        case 'add': return operation.add(a,b);
        case 'subtract': return operation.subtract(a,b);
        case 'multiply': return operation.multiply(a,b);
        case 'divide': return operation.divide(a,b);
    }
}

// displays value of buttonNumber clicked in display box
function displayInBox(e) {
    if (answer && secondNum) {
        displayValue = '';
        answer = '';
    }
    displayValue += e.target.textContent;
    display.textContent = displayValue;
    displayBox.appendChild(display);
}

// store values when operator button is clicked
function storeValue(e) {
    if (firstNum === '') {
        operatorValue = e.target.id;
        console.log(operatorValue);
        firstNum = displayValue;
        displayValue = '';
    } else {
        secondNum = displayValue;
        console.log(firstNum,secondNum,operatorValue);
        answer = operate(+firstNum,+secondNum,operatorValue);
        displayValue = answer;
        firstNum = '';
        console.log(displayValue);
        display.textContent = displayValue;
    }
}