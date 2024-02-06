// App.js
import React from 'react';
import Calculator from './Calculator';
import './App.css'; // Certifique-se de que o nome do arquivo CSS esteja correto

const App = () => {
  return (
    <div>
      <header>
        <div className="calculator-title">
          <h1>Calculadora II</h1>
        </div>
      </header>
      <Calculator />
      <footer>
        <p>&copy; 2024 Geraud Oliveira.</p>
      </footer>
    </div>
  );
};

export default App;

