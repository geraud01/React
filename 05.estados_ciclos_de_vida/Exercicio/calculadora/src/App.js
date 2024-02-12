import React, { useState, useEffect } from 'react';
import Display from './components/Display';
import Button from './components/Button';
import './styles/Calculator.css';

const App = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handleButtonClick = (value) => {
    if (value === '=') {
      try {
        setResult((prevResult) => {
          const expressionResult = eval(input);
          return expressionResult !== undefined ? expressionResult.toString() : 'Erro';
        });
      } catch (error) {
        setResult('Erro');
      }
    } else if (value === 'C') {
      setInput('');
      setResult('');
    } else {
      setInput((prevInput) => prevInput + value);
    }
  };
  
  const handleKeyPress = (event) => {
    const key = event.key;
    const keyCode = event.keyCode || event.which;
  
    if ((key >= '0' && key <= '9') || ['+', '-', '*', '/', '.', '='].includes(key)) {
      handleButtonClick(key);
    } else if (keyCode === 13) {  // Verifica se é a tecla "Enter"
      handleButtonClick('=');
    } else if (key === 'Escape') {
      handleButtonClick('C');
    }
  };
  

  useEffect(() => {
    // Adiciona o ouvinte de eventos quando o componente é montado
    document.addEventListener('keydown', handleKeyPress);

    // Remove o ouvinte de eventos quando o componente é desmontado
    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, []);

  return (
    <div className="calculator">
      <Display input={input} result={result} />
      <div className="buttons">
        <Button value="7" onClick={handleButtonClick} />
        <Button value="8" onClick={handleButtonClick} />
        <Button value="9" onClick={handleButtonClick} />
        <Button value="/" onClick={handleButtonClick} />
        <Button value="4" onClick={handleButtonClick} />
        <Button value="5" onClick={handleButtonClick} />
        <Button value="6" onClick={handleButtonClick} />
        <Button value="*" onClick={handleButtonClick} />
        <Button value="1" onClick={handleButtonClick} />
        <Button value="2" onClick={handleButtonClick} />
        <Button value="3" onClick={handleButtonClick} />
        <Button value="-" onClick={handleButtonClick} />
        <Button value="0" onClick={handleButtonClick} />
        <Button value="." onClick={handleButtonClick} />
        <Button value="=" onClick={handleButtonClick} />
        <Button value="+" onClick={handleButtonClick} />
        <Button value="C" onClick={handleButtonClick} />
      </div>
    </div>
  );
};

export default App;