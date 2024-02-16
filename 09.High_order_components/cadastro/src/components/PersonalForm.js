import React from 'react';
import useBankForm from '../hooks/withBankForm';

const PersonalForm = () => {
  const {
    formData,
    errors,
    successMessage,
    onInputChange,
    onSubmit,
  } = useBankForm('PersonalForm');

  return (
    <div className="form-container">
      <div className="bank-form">
        <h2>Formulário de Pessoa Física</h2>
        
        <div className="form-group">
          <label className="label" htmlFor="name">
            Nome:
          </label>
          <input
            className={`input ${errors.name ? 'error-input' : ''}`}
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
            className={`input ${errors.email ? 'error-input' : ''}`}
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
            className={`input ${errors.cpf ? 'error-input' : ''}`}
            type="text"
            id="cpf"
            name="cpf"
            value={formData.cpf || ''}
            onChange={(e) => onInputChange('cpf', e.target.value)}
          />
          {errors.cpf && <div className="error-message">{errors.cpf}</div>}
        </div>

        <div className="form-group">
          <label className="label" htmlFor="telephone">
            Telefone:
          </label>
          <input
            className={`input ${errors.telephone ? 'error-input' : ''}`}
            type="tel"
            id="telephone"
            name="telephone"
            value={formData.telephone || ''}
            onChange={(e) => onInputChange('telephone', e.target.value)}
          />
          {errors.telephone && <div className="error-message">{errors.telephone}</div>}
        </div>

        {successMessage && <div className="success-message">{successMessage}</div>}
        <button className="submit-button" onClick={onSubmit}>
          Enviar
        </button>
      </div>
    </div>
  );
};

export default PersonalForm;
