// /src/components/BusinessForm.js
import React from 'react';
import withBankForm from '../hoc/withBankForm';

const BusinessForm = ({ formData, errors, successMessage, onInputChange, onSubmit }) => {
  return (
    <div className="bank-form">
      <h2>Formulário de Pessoa Jurídica</h2>
      <div className="form-group">
        <label className="label" htmlFor="companyName">
          Nome da Empresa:
        </label>
        <input
          className={`input ${errors.companyName ? 'error-input' : ''}`}
          type="text"
          id="companyName"
          name="companyName"
          value={formData.companyName || ''}
          onChange={(e) => onInputChange('companyName', e.target.value)}
        />
        {errors.companyName && <div className="error-message">{errors.companyName}</div>}
      </div>

      <div className="form-group">
        <label className="label" htmlFor="cnpj">
          CNPJ:
        </label>
        <input
          className={`input ${errors.cnpj ? 'error-input' : ''}`}
          type="text"
          id="cnpj"
          name="cnpj"
          value={formData.cnpj || ''}
          onChange={(e) => onInputChange('cnpj', e.target.value)}
        />
        {errors.cnpj && <div className="error-message">{errors.cnpj}</div>}
      </div>

      {/* Adicione mais campos e validações conforme necessário */}

      {successMessage && <div className="success-message">{successMessage}</div>}
      <button className="submit-button" onClick={onSubmit}>
        Enviar
      </button>
    </div>
  );
};

export default withBankForm(BusinessForm);


