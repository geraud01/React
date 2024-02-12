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
      // Adicione sua lógica de validação de email aqui
      // Por exemplo, uma expressão regular básica para verificar o formato do email
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    };

    const isValidCPF = (cpf) => {
      // Adicione sua lógica de validação de CPF aqui
      // Por exemplo, uma expressão regular básica para verificar o formato do CPF
      const cpfRegex = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/;
      return cpfRegex.test(cpf);
    };

    const validateForm = () => {
      const newErrors = {};

      if (!formData.name) {
        newErrors.name = 'Nome é obrigatório';
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

      if (!formData.age) {
        newErrors.age = 'Idade é obrigatória';
      } else if (parseInt(formData.age) <= 0) {
        newErrors.age = 'Idade deve ser maior que zero';
      }

      setErrors(newErrors);

      return Object.keys(newErrors).length === 0;
    };

    const handleBusinessLogic = () => {
      if (props.formType === 'Form2') {
        // Adicione lógica específica para Form2 aqui
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
