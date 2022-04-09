import React from 'react';
import { Route, Routes } from 'react-router-dom';
// import Login from './components/Login/Login';
import './App.css';
import Dashboard from './components/Dashboard/Dashboard';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Orders from './components/Orders/Orders';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Regester from './components/Regester/Regester';




const App = () => {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/register' element={<Regester/>} />
        <Route path='/login' element={<Login/>}/>

        <Route path='/*' element={<PrivateRoute/>}>
          <Route path='dashboard' element={<Dashboard/>}/>
          <Route path='orders' element={<Orders/>}/>
        </Route>
        
      </Routes>
    </div>
  );
};

export default App;