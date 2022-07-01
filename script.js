const buttonBox = document.getElementById('button-box');
const displayBox = document.getElementById('display-box');
const buttonNumber = buttonBox.getElementsByClassName('button number');
const buttonOperator = buttonBox.getElementsByClassName('button operator');
const buttonClear = buttonBox.querySelector('.clear');
const display = document.createElement('div');
const answerDisplay = document.createElement('div');

let array = [];
let arrayTwo = [];
let secondNum;
let firstNum;
let operatorValue;
let answer;

for (const button of buttonNumber) {
    button.addEventListener('click', displayInBox);    
}

for (const button of buttonOperator) {
    button.addEventListener('click',storeValue)
}

document.addEventListener('keydown', (e) => {
    const keyNumber = document.querySelector(`.number[data-key='${e.key}']`);
    const keyOperator = document.querySelector(`.operator[data-key='${e.key}']`);
    
    if (keyNumber) displayInBox(e);
    if (keyOperator) storeValue(e);
})

buttonClear.addEventListener('click',() => {
    firstNum = secondNum = null;
    operatorValue = null;
    array = [];
    attayTwo = [];
    display.textContent = '';
})

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

function operate(a,b,operator) {
    switch(operator) {
        case '+': return operation.add(a,b);
        case '-': return operation.subtract(a,b);
        case 'x': 
        case '*': return operation.multiply(a,b);
        case '÷':
        case '/': return operation.divide(a,b);
    }
}

// displays value of buttonNumber clicked in display box
function displayInBox(e) {
    if (!operatorValue) {
        firstNum = numberWrite(array,e);
        display.textContent = firstNum;
    } else if (operatorValue) {
        secondNum = numberWrite(arrayTwo,e);
        display.textContent =`${firstNum} ${operatorValue} ${secondNum}`;
    }

    displayBox.appendChild(display);
}

// store values when operator button is clicked
function storeValue(e) {
    // operate when secondNum is defined and an operator button is clicked
    if (secondNum) {
        answer = operate(+firstNum,+secondNum,operatorValue);
        if (typeof answer === 'number') firstNum = answer;
        secondNum = null;
        array = [];
        arrayTwo = [];    
    }

    if (firstNum) {
        if (e.key) operatorValue = e.key;
        else operatorValue = e.target.id;

        display.textContent =`${firstNum} ${operatorValue} `;
    }
}

// produces either firstNum or secondNum
function numberWrite(array,event) {
    // prevents more than one dot from being included
    if (array.includes('.') && event.target.id === 'dot' ||
    array.includes('.') && event.key === '.') {
        return array.join('');
    }
    
    // backspace function
    if (event.target.id === 'backspace' || event.key === 'Backspace') {
        array.pop();
        return array.join('');
    }

    // doesn't allow numbers that start with 0 unless it has a decimal point
    if (array[0] === '0' && !array.includes('.')) {
        array.pop();
    }
    
    if (event.key) array.push(event.key)
    else array.push(event.target.textContent);
    
    // adds 0 to the start if decimal point is the first in the array
    if (array[0] === '.') {
        array.unshift('0');
    }

    return array.join('');
}