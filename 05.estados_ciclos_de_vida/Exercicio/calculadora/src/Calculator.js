// Calculator.js
import React, { useState } from 'react';
import './Calculator.css'; // Certifique-se de que o nome do arquivo CSS esteja correto

const Calculator = () => {
  const [displayValue, setDisplayValue] = useState('');

  const appendToDisplay = (value) => {
    setDisplayValue((prevDisplay) => prevDisplay + value);
  };

  const calculateResult = () => {
    try {
      setDisplayValue(eval(displayValue).toString());
    } catch (error) {
      setDisplayValue('Error');
    }
  };

  const clearDisplay = () => {
    setDisplayValue('');
  };

  const handleKeyPress = (event) => {
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
  };
  
  return (
    <div className="calculator">
      <input type="text" id="display" value={displayValue} readOnly />
      <div className="buttons">
        <button onClick={clearDisplay}>C</button>
        <button onClick={() => appendToDisplay('/')}>/</button>
        <button onClick={() => appendToDisplay('*')}>*</button>
        <button onClick={() => appendToDisplay('-')}>-</button>

        <button onClick={() => appendToDisplay('7')}>7</button>
        <button onClick={() => appendToDisplay('8')}>8</button>
        <button onClick={() => appendToDisplay('9')}>9</button>
        <button onClick={() => appendToDisplay('+')}>+</button>

        <button onClick={() => appendToDisplay('4')}>4</button>
        <button onClick={() => appendToDisplay('5')}>5</button>
        <button onClick={() => appendToDisplay('6')}>6</button>
        <button className="equal" onClick={calculateResult}>=</button>

        <button onClick={() => appendToDisplay('1')}>1</button>
        <button onClick={() => appendToDisplay('2')}>2</button>
        <button onClick={() => appendToDisplay('3')}>3</button>
        <button onClick={() => appendToDisplay('0')}>0</button>

        <button onClick={() => appendToDisplay('.')}>.</button>
      </div>
    </div>
  );
};

export default Calculator;



