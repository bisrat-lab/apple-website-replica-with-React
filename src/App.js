import React, { Component } from 'react';
import './App.css';


import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Navbar from "./component/Header/Navbar"
import Main  from "./component/Main/main"
import Footer from "./component/Footer/Footer"

import Error from "./component/Pages/Error/Error"
import Usage from "./component/Pages/Usage/Usage"
import Privacy from "./component/Pages/Privacy/Privacy"
import DevSecOps from './component/Pages/DevSecOps/DevSecOps';
import PuzzlR from './component/Pages/PuzzlR/PuzzlR';
import Coach from './component/Pages/Coach/Coach';
import Productpage from './component/Pages/Productpage/Productpage'
import BlueBuzz from './component/Pages/BlueBuzz/BlueBuzz';
import Fiji from './component/Pages/Fiji/Fiji';

class App extends Component {
  render(){
    return (
      <Router>
        <div>
          <Navbar/>
            <Switch>
               <Route path="/" exact component={Main}/>
               <Route path="/use" exact component={Usage}/>
               <Route path="/privacy" exact component={Privacy}/>
               <Route path="/BlueBuzz" exact component={BlueBuzz}/>
               <Route path="/DevSecOps" exact component={DevSecOps}/>             
               <Route path="/PuzzlR" exact component={PuzzlR}/>
               <Route path="/Coach" exact component={Coach}/>
               <Route path="/Fiji" exact component={Fiji}/>
               <Route path="/iphone/:pid" exact component={Productpage}/>
               <Route path="/" component={Error}/>
            </Switch>          
          <Footer/>
        </div>
      </Router>
      
    );
  }
  
}

export default App;
