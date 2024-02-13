import React from 'react';
import PersonalForm from './components/PersonalForm';
import BusinessForm from './components/BusinessForm';
import withBankForm from './hoc/withBankForm';

const App = () => {
  // PersonalForm e BusinessForm agora são componentes de ordem superior (HOC)
  const PersonalFormWithHOC = withBankForm(PersonalForm);
  const BusinessFormWithHOC = withBankForm(BusinessForm);

  return (
    <div>

      {/* Renderizando o formulário de pessoa física */}
      <PersonalFormWithHOC formType="PersonalForm" />

      {/* Renderizando o formulário de pessoa jurídica */}
      <BusinessFormWithHOC formType="BusinessForm" />
    </div>
  );
};

export default App;


