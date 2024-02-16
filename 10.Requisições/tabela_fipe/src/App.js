import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SearchForm from './components/SearchForm';
import ResultTable from './components/ResultTable';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/App.css';

const isValidString = (value) => typeof value === 'string' && value.trim() !== '';

const App = () => {
  const [brand, setBrand] = useState('');
  const [model, setModel] = useState('');
  const [year, setYear] = useState('');
  const [brandsList, setBrandsList] = useState([]);
  const [modelsList, setModelsList] = useState([]);
  const [yearsList, setYearsList] = useState([]);
  const [result, setResult] = useState(null);

  useEffect(() => {
    fetchBrands();
  }, []);

  const fetchBrands = async () => {
    try {
      const response = await axios.get('https://parallelum.com.br/fipe/api/v1/carros/marcas');
      setBrandsList(response.data);
    } catch (error) {
      console.error('Erro ao buscar marcas:', error);
    }
  };

  const fetchYears = async () => {
    try {
      const response = await axios.get(
        `https://parallelum.com.br/fipe/api/v1/carros/marcas/${brand}/modelos/${model}/anos`
      );
      setYearsList(response.data);
    } catch (error) {
      console.error('Erro ao buscar anos:', error);
    }
  };

  const fetchFipeData = async () => {
    try {
      const response = await axios.get(
        `https://parallelum.com.br/fipe/api/v1/carros/marcas/${brand}/modelos/${model}/anos/${year}`
      );
      setResult(response.data);
    } catch (error) {
      console.error('Erro ao buscar dados na API da FIPE:', error);
      setResult(null);
    }
  };

  const handleBrandChange = (selectedBrand) => {
    setBrand(selectedBrand);
    setModelsList([]);
    setYearsList([]);
  };

  const handleModelChange = (selectedModel) => {
    setModel(selectedModel);
    setYearsList([]);
    fetchYears();
  };

  const handleYearChange = (selectedYear) => {
    setYear(selectedYear);
  };

  const handleSearch = () => {
    if (!isValidString(brand) || !isValidString(model) || !isValidString(year)) {
      console.error('Por favor, preencha todos os campos.');
      return;
    }

    fetchFipeData();
  };

  return (
    <div className="App">
      <h1>Consulta FIPE</h1>
      <SearchForm
        brand={brand}
        model={model}
        year={year}
        brandsList={brandsList}
        modelsList={modelsList}
        yearsList={yearsList}
        onBrandChange={handleBrandChange}
        onModelChange={handleModelChange}
        onYearChange={handleYearChange}
        onSearch={handleSearch}
      />
      <ResultTable result={result} />
    </div>
  );
};

export default App;
