const screen = document.querySelector('.screen');

let display = 0;

screen.textContent = display;

let num1;
let num2;
let op;

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) {
        screen.textContent = "Division by 0";
        num1 = 0;
        num2 = undefined;
        op = undefined;
    }
    if (a % b !== 0) {
        return Math.round((a / b) * 100) / 100;
    }
    return a / b;
}

function operate(operator, num1, num2) {
    switch (operator) {
        case "+":
            return add(num1, num2);
        case "-":
            return subtract(num1, num2);
        case "*":
            return multiply(num1, num2);
        case "/":
            return divide(num1, num2);
    }
}

const add_b = document.querySelector('#add');
add_b.addEventListener('click', (e) => {
    num1 = op ? operate(op, num1, display) : display;
    op = "+";
    display = 0;
    screen.textContent = num1;
});

const sub_b = document.querySelector('#sub');
sub_b.addEventListener('click', (e) => {
    num1 = op ? operate(op, num1, display) : display;
    op = "-";
    display = 0;
    screen.textContent = num1;
});

const mult_b = document.querySelector('#mult');
mult_b.addEventListener('click', (e) => {
    num1 = op ? operate(op, num1, display) : display;
    op = "*";
    display = 0;
    screen.textContent = num1;
});

const div_b = document.querySelector('#div');
div_b.addEventListener('click', (e) => {
    num1 =op ? operate(op, num1, display) : display;
    op = "/";
    display = 0;
    screen.textContent = num1;
});

const one_b = document.querySelector('#one');
one_b.addEventListener('click', (e) => {
    display = 10 * display + 1;
    screen.textContent = display;
});
const two_b = document.querySelector('#two');
two_b.addEventListener('click', (e) => {
    display = 10 * display + 2;
    screen.textContent = display;
});

const three_b = document.querySelector('#three');
three_b.addEventListener('click', (e) => {
    display = 10 * display + 3;
    screen.textContent = display;
});

const four_b = document.querySelector('#four');
four_b.addEventListener('click', (e) => {
    display = 10 * display + 4;
    screen.textContent = display;
});

const five_b = document.querySelector('#five');
five_b.addEventListener('click', (e) => {
    display = 10 * display + 5;
    screen.textContent = display;
});

const six_b = document.querySelector('#six');
six_b.addEventListener('click', (e) => {
    display = 10 * display + 6;
    screen.textContent = display;
});

const seven_b = document.querySelector('#seven');
seven_b.addEventListener('click', (e) => {
    display = 10 * display + 7;
    screen.textContent = display;
});

const eight_b = document.querySelector('#eight');
eight_b.addEventListener('click', (e) => {
    display = 10 * display + 8;
    screen.textContent = display;
});

const nine_b = document.querySelector('#nine');
nine_b.addEventListener('click', (e) => {
    display = 10 * display + 9;
    screen.textContent = display;
});

const zero_b = document.querySelector('#zero');
zero_b.addEventListener('click', (e) => {
    display = 10 * display;
    screen.textContent = display;
});

const clear_b = document.querySelector('#clear');
clear_b.addEventListener('click', (e) => {
    num1 = 0;
    num2 = undefined;
    op = undefined;
    display = 0;
    screen.textContent = display;
});

const equals_b = document.querySelector('#equals');
equals_b.addEventListener('click', (e) => {
    num2 = display;
    if (num1 != undefined && num2 != undefined && op != undefined) {
        display = operate(op, num1, num2);
        screen.textContent = display;
        num1 = undefined;
        num2 = undefined;
        op = undefined;
    } else {
        num1 = 0;
        display = 0;
        op = undefined;
        num2 = undefined;
        screen.textContent = display;
    }
});