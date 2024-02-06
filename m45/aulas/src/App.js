import './App.css';
import Header from './components/header';
import CalculatorIMC from './components/IMC';
import Form from './components/Form/Form'
import Login from './components/Login/LoginControl'

function App() {
  return (
    <div className="App">
      {/* <Header title="Título do APP" />
      <CalculatorIMC /> */}

      {/* <Form title="props" /> */}

      <Login name={'Geraud'} />

    </div>
  );
}

export default App;
