import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from './Pages/Home';
import { Login } from './Pages/Login';
import { Register } from './Pages/Register';
import { Main_pg } from './Pages/Main_pg';
import { Board_create } from './Pages/Board_create';
import { Board_search } from './Pages/Board_search';
import { Board } from './Pages/Board';
import './App.css';

function App() {

  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/Main_pg" element={<Main_pg />} />
          <Route path="/board_search" element={<Board_search />} />
          <Route path="/board" element={<Board />} />
          <Route path="/board_create" element={<Board_create />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
