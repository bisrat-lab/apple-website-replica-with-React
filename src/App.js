import React, { Component } from 'react';
import './App.css';

import Navbar from "./component/Header/Navbar"
import FirstContaint from './component/Main/FirstContaints/FirstContaint';
import SecondContaints from "./component/Main/SecondContaints/SecContaints";
import ThirdContaint from "./component/Main/ThirdContaints/ThirdContaint";
import ForthContaint from "./component/Main/ForthContaints/FourthContaints";
import FiftyComponent from "./component/Main/FifthContaints/FifthContaint";
import SixthContaint from "./component/Main/SixthContaints/SixthContaints";
import Footer from "./component/Footer/Footer"

class App extends Component {
  render(){
    return (
      <div>
        <Navbar/>
        <FirstContaint/>
        <SecondContaints/>
        <ThirdContaint/>
        <ForthContaint/>
        <FiftyComponent/>
        <SixthContaint/>
        <Footer/>
      </div>
      
    );
  }
  
}

export default App;
