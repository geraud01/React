// /src/hoc/withBankForm.js
import React, { useState } from 'react';
import '../styles/commonStyles.css';


const withBankForm = (WrappedComponent) => {
  return (props) => {
    const [formData, setFormData] = useState({});
    const [errors, setErrors] = useState({});
    const [successMessage, setSuccessMessage] = useState('');

    const handleInputChange = (name, value) => {
      setFormData({ ...formData, [name]: value });
    };

    const isValidEmail = (email) => {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    };

    const isValidCPF = (cpf) => {
      const cpfRegex = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/;
      return cpfRegex.test(cpf);
    };

    const validateForm = () => {
      const newErrors = {};

      if (!formData.name) {
        newErrors.name = 'Nome é obrigatório';
      }

      if (props.formType === 'form-group') {
        if (!formData.companyName) {
          newErrors.companyName = 'Nome da Empresa é obrigatório';
        }

        if (!formData.cnpj) {
          newErrors.cnpj = 'CNPJ é obrigatório';
        }

        if (!formData.telephone) {
          newErrors.telephone = 'Telefone é obrigatório';
        }

        if (!formData.amount || parseFloat(formData.amount) <= 0) {
          newErrors.amount = 'A quantidade deve ser maior que zero';
        }

        if (!formData.address) {
          newErrors.address = 'Endereço é obrigatório';
        }
      }

      if (!formData.email) {
        newErrors.email = 'Email é obrigatório';
      } else if (!isValidEmail(formData.email)) {
        newErrors.email = 'Email inválido';
      }

      if (!formData.cpf) {
        newErrors.cpf = 'CPF é obrigatório';
      } else if (!isValidCPF(formData.cpf)) {
        newErrors.cpf = 'CPF inválido';
      }

      setErrors(newErrors);

      return Object.keys(newErrors).length === 0;
    };

    const handleBusinessLogic = () => {
      if (props.formType === 'Form2') {
        if (!formData.amount || parseFloat(formData.amount) <= 0) {
          setErrors({ amount: 'A quantidade deve ser maior que zero' });
          return false;
        }
      }

      return true;
    };

    const handleSubmit = () => {
      const isValid = validateForm();

      if (isValid) {
        const isBusinessValid = handleBusinessLogic();

        if (isBusinessValid) {
          setFormData({});
          setSuccessMessage('Cadastro realizado com sucesso!');
        }
      }
    };

    return (
      <div className="bank-form">
        <WrappedComponent
          formData={formData}
          errors={errors}
          successMessage={successMessage}
          onInputChange={handleInputChange}
          onSubmit={handleSubmit}
          {...props}
        />
      </div>
    );
  };
};

export default withBankForm;

