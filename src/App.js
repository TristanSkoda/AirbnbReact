import React, { Component } from 'react';
import Experiences from "./components/Experiences";
import Explore from "./components/Explore";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";

import './css/general.css';
import './css/reset.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header className="App-header"/>
        <div className="main-container"> 
          <Hero />
          <Explore/>
          <Experiences/>
        </div>
        <Footer/>
      </div>
    );
  }
}

export default App;
