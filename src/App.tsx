import React from 'react';
import logo from './logo.svg';
import './App.css';
import Crud from './Features/Crud/Crud';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Nav from './Components/Nav';
import Create from './Components/Create';
import Edit from './Components/Edit';

function App() {
  return (
    
      <BrowserRouter>
      <Nav/>
      <Routes>
        <Route path='/' element={<Crud/>} />
        <Route path='/Add' element ={<Create/>}/>
        <Route path = '/Edit/:id' element = {<Edit/>} />
      </Routes>
      </BrowserRouter>
      

  );
}

export default App;
