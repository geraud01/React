import React, { useState } from 'react';
import './App.css';

function App() {
  const [formData, setFormData] = useState({
    nome: '',
    idade: '',
    genero: 'masculino', // Valor padrão para evitar erro no radio
    estadoCivil: '',
    tipoDocumento: '',
    cpfCnpj: '',
  });

  const [resposta, setResposta] = useState('');

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Validação básica (pode ser expandida conforme necessário)
    if (!formData.nome || !formData.idade || !formData.genero) {
      alert('Preencha todos os campos obrigatórios.');
      return;
    }

    // Construir resposta
    const responseText = `
      Nome: ${formData.nome}
      Idade: ${formData.idade}
      Gênero: ${formData.genero}
      Estado Civil: ${formData.estadoCivil || 'Não informado'}
      Tipo de Documento: ${formData.tipoDocumento || 'Não informado'}
      CPF ou CNPJ: ${formData.cpfCnpj || 'Não informado'}
    `;

    // Atualizar resposta e limpar formulário
    setResposta(responseText);
    setFormData({
      nome: '',
      idade: '',
      genero: 'masculino',
      estadoCivil: '',
      tipoDocumento: '',
      cpfCnpj: '',
    });
  };

  return (
    <div className="App">
      {/* Cabeçalho */}
      <header>
        <h1>Formulário</h1>
      </header>

      <form onSubmit={handleSubmit}>
        <label>
          Nome:
          <input type="text" name="nome" value={formData.nome} onChange={handleInputChange} required />
        </label>

        <label>
          Idade:
          <input type="number" name="idade" value={formData.idade} onChange={handleInputChange} required />
        </label>

        <div>
          Gênero:
          <label>
            Masculino
            <input
              type="radio"
              name="genero"
              value="masculino"
              checked={formData.genero === 'masculino'}
              onChange={handleInputChange}
            />
          </label>
          <label>
            Feminino
            <input
              type="radio"
              name="genero"
              value="feminino"
              checked={formData.genero === 'feminino'}
              onChange={handleInputChange}
            />
          </label>
        </div>

        <label>
          Estado Civil:
          <input type="text" name="estadoCivil" value={formData.estadoCivil} onChange={handleInputChange} />
        </label>

        <label>
          Tipo de Documento:
          <select name="tipoDocumento" value={formData.tipoDocumento} onChange={handleInputChange}>
            <option value="">Selecione...</option>
            <option value="cpf">CPF</option>
            <option value="cnpj">CNPJ</option>
            {/* Adicione mais opções conforme necessário */}
          </select>
        </label>

        <label>
          Número:
          <input type="text" name="cpfCnpj" value={formData.cpfCnpj} onChange={handleInputChange} />
        </label>

        <button type="submit">Enviar</button>
      </form>

      <div className="resposta">
        <h2>Resposta:</h2>
        <pre>{resposta}</pre>
      </div>

      <footer>
        <p>&copy; 2024 Geraud Oliveira</p>
      </footer>

    </div>
    
  ); 
}

export default App;
