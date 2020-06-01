import React, { Component } from 'react';
import './App.css';
import Navbar from "./component/Header/Navbar"
import Footer from "./component/Footer/Footer"
import FirstContaint from './component/Main/FirstContaint';

class App extends Component {
  render(){
    return (
      <div>
        <Navbar/>
        <FirstContaint/>
        <Footer/>

      </div>
      
    );
  }
  
}

export default App;
