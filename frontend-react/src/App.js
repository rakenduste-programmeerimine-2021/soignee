import "./index.css";


import React, { useState, useEffect} from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import { Route, Link, Routes } from "react-router-dom";

import Home from './pages/Home';
import Signin from './pages/Signin';
import Signup from './pages/Signup';
import Header from './components/Header';
import Footer from './components/Footer';
import AddListing from './pages/AddListing';
import Feed from "./pages/Feed";
import Profile from "./pages/Profile";


function App() {

  let auth = localStorage.getItem("token") ? true : false;
  const [loginok, setLoginok] = useState(auth);

  return (
    <Router>
      <Header loginok={loginok} setLoginok={setLoginok}/>
        <div className="main">
        <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route path="/login" element={<Signin loginok={loginok} setLoginok={setLoginok} />} />
            <Route path="/signup" element={<Signup/>} />
            <Route path="/add-listing" element={<AddListing loginok={loginok}/>} />
            <Route path="/feed" element={<Feed loginok={loginok}/>} />
            {/* <Route path="/profile/:user_id" element={<Profile loginok={loginok} setLoginok={setLoginok}/>} /> */}
            <Route path="/profile" element={<Profile loginok={loginok}/>} />
        </Routes>
        </div>
      <Footer/>
    </Router>
  );
}


export default App;

