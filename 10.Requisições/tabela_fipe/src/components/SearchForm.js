import React from 'react';
import { Form, Button } from 'react-bootstrap';
import '../styles/SearchForm.css';

const isValidString = (value) => typeof value === 'string' && value.trim() !== '';

const SearchForm = ({ brand, model, year, onBrandChange, onModelChange, onYearChange, onSearch }) => {
  const handleSearch = () => {
    if (!isValidString(brand) || !isValidString(model) || !isValidString(year)) {
      console.error('Por favor, preencha todos os campos.');
      return;
    }

    onSearch();
  };

  return (
    <Form>
      <Form.Group controlId="formBrand">
        <Form.Label>Marca</Form.Label>
        <Form.Control
          type="text"
          placeholder="Digite a marca"
          value={brand}
          onChange={(e) => onBrandChange(e.target.value)}
        />
      </Form.Group>

      <Form.Group controlId="formModel">
        <Form.Label>Modelo</Form.Label>
        <Form.Control
          type="text"
          placeholder="Digite o modelo"
          value={model}
          onChange={(e) => onModelChange(e.target.value)}
        />
      </Form.Group>

      <Form.Group controlId="formYear">
        <Form.Label>Ano</Form.Label>
        <Form.Control
          type="text"
          placeholder="Digite o ano"
          value={year}
          onChange={(e) => onYearChange(e.target.value)}
        />
      </Form.Group>

      <Button variant="primary" onClick={handleSearch}>
        Buscar
      </Button>
    </Form>
  );
};

export default SearchForm;
