let display = document.getElementById('display');
let calculatorTitleContainer = document.querySelector('.calculator-title');

calculatorTitleContainer.classList.add('calculator-title');

function appendToDisplay(value) {
    display.value += value;
}

function calculateResult() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'Error';
    }
}

function clearDisplay() {
    display.value = '';
}

function handleKeyPress(event) {
    const keyPressed = event.key;
    const validKeys = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '+', '-', '*', '/', '.', 'Enter'];

    if (validKeys.includes(keyPressed)) {
        event.preventDefault();
        if (keyPressed === 'Enter') {
            calculateResult();
        } else {
            appendToDisplay(keyPressed);
        }
    }
}

document.addEventListener('keydown', handleKeyPress);




