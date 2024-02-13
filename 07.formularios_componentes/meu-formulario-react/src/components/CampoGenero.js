// components/CampoGenero.js

import React from 'react';

const CampoGenero = ({ label, genero, onChange }) => (
  <div className="CampoGenero">
    <label>
      {label}
    </label>
    <label>
      Masculino
      <input type="radio" name="genero" value="Masculino" checked={genero === 'Masculino'} onChange={onChange} />
    </label>
    <label>
      Feminino
      <input type="radio" name="genero" value="Feminino" checked={genero === 'Feminino'} onChange={onChange} />
    </label>
  </div>
);

export default CampoGenero;

