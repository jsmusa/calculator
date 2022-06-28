const buttonBox = document.getElementById('button-box');
const displayBox = document.getElementById('display-box');
const buttonNumber = buttonBox.getElementsByClassName('button number');
const buttonOperator = buttonBox.getElementsByClassName('button operator');
const display = document.createElement('div');
let displayValue = '';
let secondNum;
let firstNum;

// displays value of buttonNumber clicked in display box
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

function displayInBox(e) {
    displayValue += e.target.textContent;
    display.textContent = displayValue;
    displayBox.appendChild(display);
}

function storeValue(e) {
    if (firstNum === undefined) {
        firstNum = displayValue;
        displayValue = '';
        console.log
    } else {
        secondNum = displayValue;
        console.log(firstNum,secondNum);
        displayValue = operate(+firstNum,+secondNum,'add');
        console.log(displayValue);
        display.textContent = displayValue;
    }
}