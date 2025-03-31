function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(x, y) {
    return x * y;
}

function divide(x, y) {
    if (y === 0) throw new Error("Cannot divide by zero");
    return x / y;
}
