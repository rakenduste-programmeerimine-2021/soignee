import "./index.css";


import React, { useState } from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import { Route, Link, Routes } from "react-router-dom";

import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {


  return (
    <Router>
      <Header/>
        <Routes>
            <Route exact path="/" element={<Home/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/signup" element={<Signup/>} />
        </Routes>
      {/* <Footer/> */}
    </Router>
  );
}


export default App;

