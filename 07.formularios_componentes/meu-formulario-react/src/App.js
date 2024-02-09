// Formulario.js

import React, { useState } from 'react';
import Modal from 'react-modal';
import './styles/App.css';

const Formulario = () => {
  const [resposta, setResposta] = useState('');
  const [dadosFormulario, setDadosFormulario] = useState({
    nome: '',
    idade: '',
    genero: '',
    estadoCivil: '',
    tipoDocumento: '',
    cpfCnpj: ''
  });
  const [historico, setHistorico] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [detalhesRegistro, setDetalhesRegistro] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDadosFormulario({ ...dadosFormulario, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const novaResposta = { ...dadosFormulario, data: new Date() };
    setHistorico([novaResposta, ...historico]);

    setDadosFormulario({
      nome: '',
      idade: '',
      genero: '',
      estadoCivil: '',
      tipoDocumento: '',
      cpfCnpj: ''
    });
  };

  const handleExcluir = (index) => {
    const novoHistorico = [...historico];
    novoHistorico.splice(index, 1);
    setHistorico(novoHistorico);
  };

  const handleDetalhes = (index) => {
    setDetalhesRegistro(historico[index]);
    setModalIsOpen(true);
  };

  return (
    <div className="container">
      <header>
        <h1>Formulario</h1>
      </header>

      <form onSubmit={handleSubmit}>
        <label>
          Nome:
          <input type="text" name="nome" value={dadosFormulario.nome} onChange={handleChange} />
        </label>
        <label>
          Idade:
          <input type="number" name="idade" value={dadosFormulario.idade} onChange={handleChange} />
        </label>
        <label>
          Gênero:
          <label>
            Masculino
            <input type="radio" name="genero" value="Masculino" onChange={handleChange} />
          </label>
          <label>
            Feminino
            <input type="radio" name="genero" value="Feminino" onChange={handleChange} />
          </label>
        </label>
        <label>
          Estado Civil:
          <input type="text" name="estadoCivil" value={dadosFormulario.estadoCivil} onChange={handleChange} />
        </label>
        <label>
          Tipo de Documento:
          <select name="tipoDocumento" value={dadosFormulario.tipoDocumento} onChange={handleChange}>
            <option value="">Selecione</option>
            <option value="RG">RG</option>
            <option value="CPF">CPF</option>
            <option value="CNPJ">CNPJ</option>
          </select>
        </label>
        <label>
          Numero do documento:
          <input type="text" name="cpfCnpj" value={dadosFormulario.cpfCnpj} onChange={handleChange} />
        </label>
        <button type="submit">Enviar</button>
      </form>

      <div className="panel">
        <h2>Painel de Respostas</h2>
        <ul>
          {historico.map((resposta, index) => (
            <li key={index}>
              {`${resposta.nome}, ${resposta.idade}, ${resposta.genero}`}
              <button onClick={() => handleExcluir(index)}>Excluir</button>
              <button onClick={() => handleDetalhes(index)}>Detalhes</button>
            </li>
          ))}
        </ul>
      </div>

      <footer>
        <p>© 2024 Geraud Oliveira. Todos os direitos reservados.</p>
      </footer>

      <Modal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)}>
        <h2>Detalhes do Registro</h2>
        <pre>{JSON.stringify(detalhesRegistro, null, 2)}</pre>
      </Modal>
    </div>
  );
};

export default Formulario;
