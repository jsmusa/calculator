const buttonBox = document.getElementById('button-box');
const displayBox = document.getElementById('display-box');
const buttonNumber = buttonBox.getElementsByClassName('button number');
const buttonOperator = buttonBox.getElementsByClassName('button operator');
const buttonClear = buttonBox.querySelector('.clear');
const display = document.createElement('div');
const answerDisplay = document.createElement('div');
const dot = document.querySelector('#dot');
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
        case 'x': return operation.multiply(a,b);
        case '÷': return operation.divide(a,b);
    }
}

// displays value of buttonNumber clicked in display box
function displayInBox(e) {
    // if (!operatorValue) {
    //     // clears firstNum when operatorValue is falsy, answer is true
    //     // and a number button is clicked
    //     if (answer) {
    //         firstNum = '';
    //         answer = '';
    //     }
    //     firstNum += e.target.textContent;
    //     display.textContent = firstNum;
    // } else {
    //     secondNum += e.target.textContent;
    //     display.textContent +=`${e.target.textContent}`;
    // }

    // if (e.target.id === 'dot') {
    //     e.target.removeEventListener('click',displayInBox);
    // }

    if (!operatorValue) {
        firstNum = numberWrite(array,firstNum,e);
        display.textContent = firstNum;
        if (array.includes('.')) dot.removeEventListener('click',displayInBox);
    } else if (operatorValue) {
        secondNum = numberWrite(arrayTwo,secondNum,e);
        display.textContent =`${firstNum} ${operatorValue} ${secondNum}`;
        if (arrayTwo.includes('.')) dot.removeEventListener('click',displayInBox);
    }

    displayBox.appendChild(display);
    // console.log(number,firstNum);
}

// store values when operator button is clicked
function storeValue(e) {
    // operate when secondNum is defined and an operator button is clicked
    if (secondNum) {
        answer = operate(+firstNum,+secondNum,operatorValue);
        if (typeof answer === 'number') firstNum = answer;
        number = [];
        numberTwo = [];
        // displayBox.appendChild(answerDisplay);        
    }

    if (firstNum) {
    operatorValue = e.target.id;
    display.textContent =`${firstNum} ${operatorValue} `;
    // // adds dot button for second number
    dot.addEventListener('click',displayInBox);
    }
    // console.log(operatorValue);
}

function numberWrite(array,number,event) {
    array.push(event.target.textContent);
    return number = array.join('');
}