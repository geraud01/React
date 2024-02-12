// components/Formulario.js

import React, { useState } from 'react';
import Modal from 'react-modal';
import CampoTexto from './components/CampoTexto'; 
import CampoGenero from './components/CampoGenero'; 
import CampoSelect from './components/CampoSelect'; 
import RespostaItem from './components/RespostaItem';
import './styles/App.css';


const Formulario = () => {
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
  const [ordenacao, setOrdenacao] = useState({
    campo: null,
    ordem: 'asc'
  });

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

  const handleOrdenacao = (campo) => {
    if (ordenacao.campo === campo) {
      setOrdenacao({
        ...ordenacao,
        ordem: ordenacao.ordem === 'asc' ? 'desc' : 'asc'
      });
    } else {
      setOrdenacao({
        campo,
        ordem: 'asc'
      });
    }
  };

  const ordenarHistorico = (a, b) => {
    const { campo, ordem } = ordenacao;

    if (ordem === 'asc') {
      return a[campo] > b[campo] ? 1 : -1;
    } else {
      return a[campo] < b[campo] ? 1 : -1;
    }
  };

  return (
    <div className="container">
      <header>
        <h1>Formulario</h1>
      </header>

      <form onSubmit={handleSubmit}>
        <CampoTexto
          label="Nome:"
          type="text"
          name="nome"
          value={dadosFormulario.nome}
          onChange={handleChange}
        />
        <CampoTexto
          label="Idade:"
          type="number"
          name="idade"
          value={dadosFormulario.idade}
          onChange={handleChange}
        />
        <CampoGenero
          label="Gênero:"
          genero={dadosFormulario.genero}
          onChange={handleChange}
        />
        <CampoTexto
          label="Estado Civil:"
          type="text"
          name="estadoCivil"
          value={dadosFormulario.estadoCivil}
          onChange={handleChange}
        />
        <CampoSelect
          label="Tipo de Documento:"
          name="tipoDocumento"
          value={dadosFormulario.tipoDocumento}
          onChange={handleChange}
        />
        <CampoTexto
          label="Numero do documento:"
          type="text"
          name="cpfCnpj"
          value={dadosFormulario.cpfCnpj}
          onChange={handleChange}
        />
        <button type="submit">Enviar</button>
      </form>

      <div className="panel">
        <h2>Painel de Respostas</h2>
        <div className="ordenacao-botoes">
          <button onClick={() => handleOrdenacao('nome')}>
            Nome {ordenacao.campo === 'nome' && (ordenacao.ordem === 'asc' ? '▲' : '▼')}
          </button>
          <button onClick={() => handleOrdenacao('idade')}>
            Idade {ordenacao.campo === 'idade' && (ordenacao.ordem === 'asc' ? '▲' : '▼')}
          </button>
          <button onClick={() => handleOrdenacao('genero')}>
            Gênero {ordenacao.campo === 'genero' && (ordenacao.ordem === 'asc' ? '▲' : '▼')}
          </button>
        </div>
        <ul>
          {historico.sort(ordenarHistorico).map((resposta, index) => (
            <RespostaItem
              key={index}
              resposta={resposta}
              handleExcluir={() => handleExcluir(index)}
              handleDetalhes={() => handleDetalhes(index)}
            />
          ))}
        </ul>
      </div>

      <footer>
        <p>© 2024 Geraud Oliveira. Todos os direitos reservados.</p>
      </footer>

      <Modal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)}>
        <button className="close-button" onClick={() => setModalIsOpen(false)}>
          Fechar
        </button>
        <h2>Detalhes do Registro</h2>
        <pre>{JSON.stringify(detalhesRegistro, null, 2)}</pre>
      </Modal>
    </div>
  );
};

export default Formulario;
