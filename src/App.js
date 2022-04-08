import React from 'react';
import { Route, Routes } from 'react-router-dom';
// import Login from './components/Login/Login';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Regester from './components/Regester/Regester';




const App = () => {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/register' element={<Regester/>} />
        <Route path='/login' element={<Login/>}/>
      </Routes>
    </div>
  );
};

export default App;