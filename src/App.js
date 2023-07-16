import './App.css';
import React, { useState } from 'react';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';

function App() {
  const [currentForm, setCurrentForm] = useState('login');

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  }

  return (
    <div className='App'>
      {
        currentForm === "login" ? <SignIn onFormSwitch={toggleForm}/> : <SignUp onFormSwitch={toggleForm}/>
      }
    </div>
  );
}

export default App;
