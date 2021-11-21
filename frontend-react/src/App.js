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
import Subscriptions from "./pages/Subscriptions";

function App() {

  const [auth, setAuth] = useState();
  const [mainPageView, setMainPageView] = useState(false);

  return (
    <Router>
      <Header auth={auth} setAuth={setAuth} mainPageView={mainPageView}/>
        <div className="main">
        <Routes>
            <Route exact path="/" element={<Home setAuth={setAuth}/>} />
            <Route path="/login" element={<Signin auth={auth} setAuth={setAuth} />} />
            <Route path="/signup" element={<Signup/>} />
            <Route path="/add-listing" element={<AddListing/>} />
            <Route path="/subscriptions" element={<Subscriptions/>} />
            <Route path="/profile/:user_id" />
        </Routes>
        </div>
      <Footer/>
    </Router>
  );
}


export default App;

