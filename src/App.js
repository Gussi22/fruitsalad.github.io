import './App.css';
import React, { useState } from 'react';
import Create from './components/Create/Create';

function App() {
  const [currentForm, setCurrentForm] = useState('login');

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  }

  return (
    <div className='App'>
      <div>
        <Create />
      </div>
    </div>
  );
}

export default App;
