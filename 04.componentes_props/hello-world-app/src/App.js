import React, { useState, useEffect } from 'react';
import './App.css';

const HelloWorld = ({ style, date }) => {
  return (
    <div style={style}>
      <p>Hello World!</p>
      <p>{date}</p>
    </div>
  );
};

function App() {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setDate(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const commonStyle = {
    border: '2px solid #333',
    padding: '10px',
    margin: '10px',
    borderRadius: '5px',
    textAlign: 'center',
  };

  return (
    <div className="App">
      <h1>Frases Diferentes com Data e Hora</h1>
      <HelloWorld style={commonStyle} date={date.toLocaleString()} />
      <HelloWorld style={{ ...commonStyle, backgroundColor: '#e6f7ff' }} date={date.toLocaleString()} />
      <HelloWorld style={{ ...commonStyle, color: 'white', backgroundColor: '#4CAF50' }} date={date.toLocaleString()} />

    </div>
  );
}

export default App;

