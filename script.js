const buttonBox = document.getElementById('button-box');
const displayBox = document.getElementById('display-box');
const buttonNumber = buttonBox.getElementsByClassName('button number');
const buttonOperator = buttonBox.getElementsByClassName('button operator');
const buttonClear = buttonBox.querySelector('.clear');
const display = document.createElement('div');
const answerDisplay = document.createElement('div');
const dot = document.querySelector('#dot');
let secondNum = '';
let firstNum = '';
let operatorValue;
let answer;

for (const button of buttonNumber) {
    button.addEventListener('click', displayInBox);
}

for (const button of buttonOperator) {
    button.addEventListener('click',storeValue)
}

buttonClear.addEventListener('click',() => {
    firstNum = '';
    secondNum = '';
    operatorValue = undefined;
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
    if (!operatorValue) {
        // clears firstNum when operatorValue is falsy, answer is true
        // and a number button is clicked
        if (answer) {
            firstNum = '';
            answer = '';
        }
        firstNum += e.target.textContent;
        display.textContent = firstNum;
    } else {
        secondNum += e.target.textContent;
        display.textContent =`${firstNum} ${operatorValue} ${secondNum}`;
    }

    if (e.target.id === 'dot') {
        e.target.removeEventListener('click',displayInBox);
    }

    displayBox.appendChild(display);
}

// store values when operator button is clicked
function storeValue(e) {
    // operate when secondNum is defined and an operator button is clicked
    if (secondNum) {
        answer = operate(+firstNum,+secondNum,operatorValue);
        if (typeof answer === 'number') firstNum = answer;
        secondNum = '';
        answerDisplay.textContent = answer;
        displayBox.appendChild(answerDisplay);        
    }
    if (firstNum) {
    operatorValue = e.target.id;
    console.log(firstNum,operatorValue);
    dot.addEventListener('click',displayInBox);
    }
}