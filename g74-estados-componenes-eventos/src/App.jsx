import React from "react";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Register from "./components/Register";
import Login from "./components/Login";
import Header from "./components/Header";
import "./App.css";


const App = () => {
  return (
    <div>
      <Navbar />
      <Header />
      {/* <Home /> */}
      <Register />
      {/* <Login /> */}
      <Footer />
    </div>
  );
};


export default App;