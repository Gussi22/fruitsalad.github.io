import './App.css';
import React from 'react';
import { Route, Routes } from "react-router-dom";
import Create from './components/Create/Create';
import SignIn from './components/auth/SignIn'
import SignUp from './components/auth/SignUp'

function App() {
  return (
    <div className="App">
      <Routes>
      <Route path='fruitsalads' element={<Create />}/>
      <Route path='signin' element={<SignIn />}/>
      <Route path='signup' element={<SignUp />}/>
    </Routes>
    </div>
  );
}

export default App;
