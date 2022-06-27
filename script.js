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