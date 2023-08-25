import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import HomePage from './pages/HomePage';
import CratePage from './pages/CratePage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/crate/:name" element={<CratePage/>}/>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
