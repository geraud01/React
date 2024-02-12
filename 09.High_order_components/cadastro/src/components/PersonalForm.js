// /src/components/PersonalForm.js
import React from 'react';
import withBankForm from '../hoc/withBankForm';

const PersonalForm = ({ formData, errors, successMessage, onInputChange, onSubmit }) => {
  return (
    <div>
      <h2>Formulário de Pessoa Física</h2>

      <div className="form-group">
        <label className="label" htmlFor="name">
          Nome:
        </label>
        <input
          className="input"
          type="text"
          id="name"
          name="name"
          value={formData.name || ''}
          onChange={(e) => onInputChange('name', e.target.value)}
        />
        {errors.name && <div className="error-message">{errors.name}</div>}
      </div>

      <div className="form-group">
        <label className="label" htmlFor="email">
          Email:
        </label>
        <input
          className="input"
          type="email"
          id="email"
          name="email"
          value={formData.email || ''}
          onChange={(e) => onInputChange('email', e.target.value)}
        />
        {errors.email && <div className="error-message">{errors.email}</div>}
      </div>

      <div className="form-group">
        <label className="label" htmlFor="cpf">
          CPF:
        </label>
        <input
          className="input"
          type="text"
          id="cpf"
          name="cpf"
          value={formData.cpf || ''}
          onChange={(e) => onInputChange('cpf', e.target.value)}
        />
        {errors.cpf && <div className="error-message">{errors.cpf}</div>}
      </div>

      <div className="form-group">
        <label className="label" htmlFor="age">
          Idade:
        </label>
        <input
          className="input"
          type="number"
          id="age"
          name="age"
          value={formData.age || ''}
          onChange={(e) => onInputChange('age', e.target.value)}
        />
        {errors.age && <div className="error-message">{errors.age}</div>}
      </div>

      {successMessage && <div className="success-message">{successMessage}</div>}
      <button onClick={onSubmit}>Enviar</button>
    </div>
  );
};

export default withBankForm(PersonalForm);

