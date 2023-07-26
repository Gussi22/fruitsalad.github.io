import './App.css';
import React from 'react';
import { Route, Routes } from "react-router-dom";
import Create from './components/Create/Create';
import Homepage from './components/Homepage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='fruitsalads' element={<Homepage />}/>
        <Route path='create' element={<Create />}/>
      </Routes>
    </div>
  );
}

export default App;
