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
      <Create />
    </div>
  );
}

export default App;
