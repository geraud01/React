// components/CampoTexto.js

import React from 'react';

const CampoTexto = ({ label, type, name, value, onChange }) => (
  <label>
    {label}
    <input type={type} name={name} value={value} onChange={onChange} />
  </label>
);

export default CampoTexto;
