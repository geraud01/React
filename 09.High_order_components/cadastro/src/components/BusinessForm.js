import React from 'react';
import withBankForm from '../hoc/withBankForm';

const BusinessForm = ({ formData, errors, successMessage, onInputChange, onSubmit }) => {
  return (
    <div className="form-container">
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

        <div className="form-group">
          <label className="label" htmlFor="telephone">
            Telefone:
          </label>
          <input
            className={`input ${errors.telephone ? 'error-input' : ''}`}
            type="text"
            id="telephone"
            name="telephone"
            value={formData.telephone || ''}
            onChange={(e) => onInputChange('telephone', e.target.value)}
          />
          {errors.telephone && <div className="error-message">{errors.telephone}</div>}
        </div>

        <div className="form-group">
          <label className="label" htmlFor="address">
            Endereço:
          </label>
          <input
            className={`input ${errors.address ? 'error-input' : ''}`}
            type="text"
            id="address"
            name="address"
            value={formData.address || ''}
            onChange={(e) => onInputChange('address', e.target.value)}
          />
          {errors.address && <div className="error-message">{errors.address}</div>}
        </div>

        <div className="form-group">
          <label className="label" htmlFor="number">
            Número:
          </label>
          <input
            className={`input ${errors.number ? 'error-input' : ''}`}
            type="number"
            id="number"
            name="number"
            value={formData.number || ''}
            onChange={(e) => onInputChange('number', e.target.value)}
          />
          {errors.number && <div className="error-message">{errors.number}</div>}
        </div>

        <div className="form-group">
          <label className="label" htmlFor="bairro">
            Bairro:
          </label>
          <input
            className={`input ${errors.bairro ? 'error-input' : ''}`}
            type="text"
            id="bairro"
            name="bairro"
            value={formData.bairro || ''}
            onChange={(e) => onInputChange('bairro', e.target.value)}
          />
          {errors.bairro && <div className="error-message">{errors.bairro}</div>}
        </div>

        <div className="form-group">
          <label className="label" htmlFor="cidade">
            Cidade:
          </label>
          <input
            className={`input ${errors.cidade ? 'error-input' : ''}`}
            type="text"
            id="cidade"
            name="cidade"
            value={formData.cidade || ''}
            onChange={(e) => onInputChange('cidade', e.target.value)}
          />
          {errors.cidade && <div className="error-message">{errors.cidade}</div>}
        </div>

        <div className="form-group">
          <label className="label" htmlFor="estado">
            Estado:
          </label>
          <input
            className={`input ${errors.estado ? 'error-input' : ''}`}
            type="text"
            id="estado"
            name="estado"
            value={formData.estado || ''}
            onChange={(e) => onInputChange('estado', e.target.value)}
          />
          {errors.estado && <div className="error-message">{errors.estado}</div>}
        </div>

        {/* Adicionar os demais campos conforme necessário */}

        {successMessage && <div className="success-message">{successMessage}</div>}
        <button className="submit-button" onClick={onSubmit}>
          Enviar
        </button>
      </div>
    </div>
  );
};

export default withBankForm(BusinessForm);


