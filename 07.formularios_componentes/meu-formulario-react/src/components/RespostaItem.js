// components/RespostaItem.js

import React from 'react';

const RespostaItem = ({ resposta, handleExcluir, handleDetalhes }) => (
  <li>
    {`${resposta.nome}, ${resposta.idade}, ${resposta.genero}`}
    <button onClick={handleExcluir}>Excluir</button>
    <button onClick={handleDetalhes}>Detalhes</button>
  </li>
);

export default RespostaItem;
