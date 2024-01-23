let currentValue = '';
let currentOperation = '';
let firstValue = '';

function updateDisplay() {
    document.getElementById('display').value = currentValue || '0';
}

function appendNumber(number) {
    currentValue += number;
    updateDisplay();
}

function addDecimal() {
    if (!currentValue.includes('.')) {
        currentValue += '.';
        updateDisplay();
    }
}

function setOperation(operation) {
    if (currentOperation !== '') {
        calculate();
    }
    currentOperation = operation;
    firstValue = currentValue;
    currentValue = '';
}

function calculate() {
    if (currentValue !== '' && firstValue !== '') {
        switch (currentOperation) {
            case '+':
                currentValue = String(parseFloat(firstValue) + parseFloat(currentValue));
                break;
            case '-':
                currentValue = String(parseFloat(firstValue) - parseFloat(currentValue));
                break;
            case '*':
                currentValue = String(parseFloat(firstValue) * parseFloat(currentValue));
                break;
            case '/':
                currentValue = String(parseFloat(firstValue) / parseFloat(currentValue));
                break;
            default:
                break;
        }
        currentOperation = '';
        firstValue = '';
        updateDisplay();
    }
}

document.addEventListener('keydown', (event) => {
    const key = event.key;
    if (/[0-9]/.test(key)) {
        appendNumber(key);
    } else if (key === '.') {
        addDecimal();
    } else if (key === '+' || key === '-' || key === '*' || key === '/') {
        setOperation(key);
    } else if (key === 'Enter') {
        calculate();
    }
});

updateDisplay();
