import { useState } from 'react';
import '../styles/commonStyles.css';

const useBankForm = (formType) => {
  const [formData, setFormData] = useState({});
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState('');

  const handleInputChange = (name, value) => {
    console.log(`Input changed - Name: ${name}, Value: ${value}`);
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

  const isValidCNPJ = (cnpj) => {
    const cnpjRegex = /^\d{2}[\.-]?\d{3}[\.-]?\d{3}\/?\d{4}-?\d{2}$/;
    return cnpjRegex.test(cnpj);
  };

  const isValidState = (state) => {
    const stateRegex = /^[A-Z]{2}$/;
    return stateRegex.test(state);
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name) {
      newErrors.name = 'Nome é obrigatório';
    }

    if (formType === 'PersonalForm') {
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

      if (!formData.telephone) {
        newErrors.telephone = 'Telefone é obrigatório';
      }
    }

    if (formType === 'EmpresaForm') {
      if (!formData.companyName) {
        newErrors.companyName = 'Nome da Empresa é obrigatório';
      }

      if (!formData.cnpj) {
        newErrors.cnpj = 'CNPJ é obrigatório';
      } else if (!isValidCNPJ(formData.cnpj)) {
        newErrors.cnpj = 'CNPJ inválido';
      }

      if (!formData.telephone) {
        newErrors.telephone = 'Telefone é obrigatório';
      }

      if (!formData.address) {
        newErrors.address = 'Endereço é obrigatório';
      }

      if (!formData.number) {
        newErrors.number = 'Número é obrigatório';
      }

      if (!formData.bairro) {
        newErrors.bairro = 'Bairro é obrigatório';
      }

      if (!formData.cidade) {
        newErrors.cidade = 'Cidade é obrigatória';
      }

      if (!formData.estado) {
        newErrors.estado = 'Estado é obrigatório';
      } else if (!isValidState(formData.estado)) {
        newErrors.estado = 'Devem ser dois caracteres maiúsculos';
      }
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async () => {
    const isValid = validateForm();

    if (isValid) {
      if (formType === 'PersonalForm') {

        console.log('Enviando formulário de Pessoa Física:', formData);

      } else if (formType === 'EmpresaForm') {

        console.log('Enviando formulário de Pessoa Jurídica:', formData);
      }

      setSuccessMessage('Cadastro realizado com sucesso!');
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setFormData({});
      setSuccessMessage('');
    }
  };

  return {
    formData,
    errors,
    successMessage,
    onInputChange: handleInputChange,
    onSubmit: handleSubmit,
  };
};

export default useBankForm;
