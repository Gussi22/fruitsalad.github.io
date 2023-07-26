import './App.css';
import React from 'react';
import { Route, Routes, useNavigate } from "react-router-dom";
import Create from './components/Create/Create';
import Homepage from './components/Homepage';

function App() {
  const navigate = useNavigate();
  return (
    <div className="App">
      <ul>
        <li><button className='btnNav' onClick={() => navigate("/fruitsalads")}>Home</button></li>
        <li><button className='btnNav' onClick={() => navigate("/create")}>Create</button></li>
      </ul>
      <div className='AppContainer'>
        <Routes>
          <Route path='fruitsalads' element={<Homepage />}/>
          <Route path='create' element={<Create />}/>
        </Routes>
      </div>
    </div>
  );
}

export default App;
