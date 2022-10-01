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

import IPhone from "./component/Pages/IPhone/IPhone"
import Error from "./component/Pages/Error/Error"
import Usage from "./component/Pages/Usage/Usage"
import Privacy from "./component/Pages/Privacy/Privacy"
import DevSecOps from './component/Pages/DevSecOps/DevSecOps';
import Watch from './component/Pages/Watch/Watch'
import Productpage from './component/Pages/Productpage/Productpage'

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
               <Route path="/iphone" exact component={IPhone}/>
               <Route path="/DevSecOps" exact component={DevSecOps}/>             
               <Route path="/watch" exact component={Watch}/>
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
