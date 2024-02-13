// components/CampoSelect.js

import React from 'react';

const CampoSelect = ({ label, name, value, onChange }) => (
  <label>
    {label}
    <select name={name} value={value} onChange={onChange}>
      <option value="">Selecione</option>
      <option value="RG">RG</option>
      <option value="CPF">CPF</option>
      <option value="CNPJ">CNPJ</option>
    </select>
  </label>
);

export default CampoSelect;
