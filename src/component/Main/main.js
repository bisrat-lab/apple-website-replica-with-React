import React, { Component } from 'react';

import fijiMain1 from '../../images/fiji/FijiMain1.png';
import lightbulb from '../../images/fiji/lightbulb.gif';
import shareFiji from "../../images/fiji/history/shareFiji.mp4"

import FirstContaint from './FirstContaints/FirstContaint';
import SecondContaints from "./SecondContaints/SecContaints";
import SingleWide from "./SingleWide/comp";
import DoubleWide from "./DoubleWide/comp";

// import FiftyComponent from "./FifthContaints/FifthContaint";
import SixthContaint from "./SixthContaints/SixthContaints";
// import Youtube from '../Youtube/Youtube';
import Carousel from '../Images/Carousel';

class Main extends Component {
  render(){
    return (
      <div>
        <FirstContaint/>
        <SecondContaints/>
        <Carousel />
        <img src={lightbulb} alt="lightbulb" style={{width: "50%"}}/>
        <video width="50%" controls >
          <source src={shareFiji} type="video/mp4"/>
        </video>
        {/* <FiftyComponent/> */}
        <SixthContaint/>
        {/* <Youtube/> */}
                     
      </div>
      
    );
  }
  
}

export default Main;