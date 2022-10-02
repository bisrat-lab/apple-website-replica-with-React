import React, { Component } from 'react';

import lightbulb from '../../images/fiji/lightbulb.gif';
import FirstContaint from './FirstContaints/FirstContaint';
import SecondContaints from "./SecondContaints/SecContaints";
import SingleWide from "./SingleWide/comp";
import DoubleWide from "./DoubleWide/comp";
import ArcadeIcon from "../../images/icons/arcade.png";

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
        {/* <FiftyComponent/> */}
        {/* <Youtube/> */}
        
        <SixthContaint/>
      </div>
      
    );
  }
  
}

export default Main;