import React from 'react';
import './App.css';

import Form from './components/Form';

const App = () => {
  return (
    <div className="container-fluid">
      <div className="col-md-8 col-xs-12 mx-auto">
        <div className="display-3 py-2 text-center">Stryler</div>
        <h4 className="pb-5 text-center">A tool for styling simple strings</h4>
        <Form />
      </div>
    </div>
  );
};

export default App;
