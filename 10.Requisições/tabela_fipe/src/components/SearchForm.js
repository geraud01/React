import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Form, Button } from 'react-bootstrap';
import '../styles/SearchForm.css';

const SearchForm = ({
  brand,
  model,
  year,
  onBrandChange,
  onModelChange,
  onYearChange,
  onSearch,
}) => {
  const [brandsList, setBrandsList] = useState([]);
  const [modelsList, setModelsList] = useState([]);
  const [yearsList, setYearsList] = useState([]);

  useEffect(() => {
    // Carregar a lista de marcas ao montar o componente
    fetchBrands();
  }, []);

  const fetchBrands = async () => {
    try {
      const response = await axios.get(
        'https://parallelum.com.br/fipe/api/v1/carros/marcas'
      );
      setBrandsList(response.data);
    } catch (error) {
      console.error('Erro ao buscar marcas:', error);
    }
  };
  
  // eslint-disable-next-line no-unused-vars
  const fetchModels = async (selectedBrand) => {
    try {
      const response = await axios.get(
        `https://parallelum.com.br/fipe/api/v1/carros/marcas/${selectedBrand}/modelos`
      );
      setModelsList(response.data.modelos);
    } catch (error) {
      console.error('Erro ao buscar modelos:', error);
    }
  };

  const fetchYears = async (selectedModel) => {
    try {
      const response = await axios.get(
        `https://parallelum.com.br/fipe/api/v1/carros/marcas/${brand}/modelos/${selectedModel}/anos`
      );
      setYearsList(response.data);
    } catch (error) {
      console.error('Erro ao buscar anos:', error);
    }
  };

  const handleBrandChange = async (selectedBrand) => {
    onBrandChange(selectedBrand);
    setModelsList([]); // Limpar a lista de modelos ao escolher uma nova marca

    try {
      const response = await axios.get(
        `https://parallelum.com.br/fipe/api/v1/carros/marcas/${selectedBrand}/modelos`
      );
      setModelsList(response.data.modelos);
    } catch (error) {
      console.error('Erro ao buscar modelos:', error);
    }

    setYearsList([]); // Limpar a lista de anos ao escolher uma nova marca
  };

  const handleModelChange = (selectedModel) => {
    onModelChange(selectedModel);
    setYearsList([]); // Limpar a lista de anos ao escolher um novo modelo
    fetchYears(selectedModel); // Chamar o método para buscar anos
  };

  const handleYearChange = (selectedYear) => {
    onYearChange(selectedYear);
  };

  const handleSearch = () => {
    // Adicione sua lógica de busca aqui
    if (!brand || !model || !year) {
      console.error('Por favor, preencha todos os campos.');
      return;
    }

    onSearch();
  };

  return (
    <Form>
      <Form.Group controlId="formBrand">
        <Form.Label>Marca</Form.Label>
        <Form.Select
          value={brand}
          onChange={(e) => handleBrandChange(e.target.value)}
        >
          <option value="">Selecione a marca</option>
          {brandsList.map((brandOption) => (
            <option key={brandOption.codigo} value={brandOption.codigo}>
              {brandOption.nome}
            </option>
          ))}
        </Form.Select>
      </Form.Group>

      <Form.Group controlId="formModel">
        <Form.Label>Modelo</Form.Label>
        <Form.Select
          value={model}
          onChange={(e) => handleModelChange(e.target.value)}
        >
          <option value="">Selecione o modelo</option>
          {modelsList.map((modelOption) => (
            <option key={modelOption.codigo} value={modelOption.codigo}>
              {modelOption.nome}
            </option>
          ))}
        </Form.Select>
      </Form.Group>

      <Form.Group controlId="formYear">
        <Form.Label>Ano</Form.Label>
        <Form.Select
          value={year}
          onChange={(e) => handleYearChange(e.target.value)}
        >
          <option value="">Selecione o ano</option>
          {yearsList.map((yearOption) => (
            <option key={yearOption.codigo} value={yearOption.codigo}>
              {yearOption.nome}
            </option>
          ))}
        </Form.Select>
      </Form.Group>

      <Button variant="primary" onClick={handleSearch}>
        Buscar
      </Button>
    </Form>
  );
};

export default SearchForm;
