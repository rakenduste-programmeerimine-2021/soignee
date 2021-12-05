import "./index.css";
import React, { useState } from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import { Route, Routes } from "react-router-dom";

import Home from './pages/Home';
import Signin from './pages/Signin';
import Signup from './pages/Signup';
import Header from './components/Header';
import Footer from './components/Footer';
import AddListing from './pages/AddListing';
import Feed from "./pages/Feed";
import OtherProfile from "./pages/OtherProfile";
import MyProfile from "./pages/MyProfile";
import SearchPage from "./pages/SearchPage";

function getRandom() {
  return Math.random();
}

function App() {
  let myUserId = localStorage.getItem("id")
  let auth = localStorage.getItem("token") ? true : false;
  const [loginok, setLoginok] = useState(auth);

  return (
    <Router>
      <Header loginok={loginok} setLoginok={setLoginok}/>
        <div className="main">
        <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route path="login" element={<Signin loginok={loginok} setLoginok={setLoginok} />} />
            <Route path="signup" element={<Signup loginok={loginok} />} />
            <Route path="add-listing" element={<AddListing loginok={loginok}/>} />
            <Route path="feed" element={<Feed loginok={loginok}/>} />
            <Route path="profile" element={<MyProfile loginok={loginok} myUserId={myUserId}/>} />
            <Route path="profile/:user_id" element={<OtherProfile loginok={loginok}/>} />
            <Route path="search" element={<SearchPage/>} />
        </Routes>
        </div>
      <Footer/>
    </Router>
  );
}


export default App;

