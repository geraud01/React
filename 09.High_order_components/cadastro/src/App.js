import React from 'react';
import PersonalForm from './components/PersonalForm';
import BusinessForm from './components/BusinessForm';

const App = () => {
  return (
    <div>
      {/* Renderizando o formulário de pessoa física */}
      <PersonalForm formType="PersonalForm" />

      {/* Renderizando o formulário de pessoa jurídica */}
      <BusinessForm formType="BusinessForm" />
    </div>
  );
};

export default App;

