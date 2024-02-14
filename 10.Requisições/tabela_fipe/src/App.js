import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SearchForm from './components/SearchForm';
import ResultsTable from './components/ResultTable';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/App.css';

const App = () => {
  const [brand, setBrand] = useState('');
  const [model, setModel] = useState('');
  const [year, setYear] = useState('');
  const [brandsList, setBrandsList] = useState([]);
  const [modelsList, setModelsList] = useState([]);
  const [yearsList, setYearsList] = useState([]);
  const [result, setResult] = useState(null);

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
    setModelsList([]); // Limpar a lista de modelos ao escolher uma nova marca
    setYearsList([]); // Limpar a lista de anos ao escolher uma nova marca
  };

  const handleModelChange = (selectedModel) => {
    setModel(selectedModel);
    setYearsList([]); // Limpar a lista de anos ao escolher um novo modelo
    fetchYears(); // Chamar o método para buscar anos
  };

  const handleYearChange = (selectedYear) => {
    setYear(selectedYear);
  };

  const handleSearch = () => {
    if (!brand || !model || !year) {
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
      {/* Exibir o resultado aqui */}
      <ResultsTable result={result} />
    </div>
  );
};

export default App;