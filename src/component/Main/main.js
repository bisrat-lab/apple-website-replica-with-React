import React, { Component } from 'react';

import fijiMain1 from '../../images/fiji/FijiMain1.png';
import lightbulb from '../../images/fiji/lightbulb.gif';
import NewsSequence from "../../images/puzzlr/NewsSequence.mp4"

import FirstContaint from './FirstContaints/FirstContaint';
import SecondContaints from "./SecondContaints/SecContaints";
import SingleWide from "./SingleWide/comp";
import DoubleWide from "./DoubleWide/comp";

// import FiftyComponent from "./FifthContaints/FifthContaint";
import SixthContaint from "./SixthContaints/SixthContaints";
// import Youtube from '../Youtube/Youtube';


class Main extends Component {
  render(){
    return (
      <div>

        <FirstContaint/>
        <SecondContaints/>
        <SingleWide img={fijiMain1}/>
        <DoubleWide logo={lightbulb} title="Apple What" more="more" moreLink="#"
                   logo2={NewsSequence} title2="What Willis" more2="more" moreLink2="#"/>
        {/* <FiftyComponent/> */}
        <SixthContaint/>
        {/* <Youtube/> */}
                     
      </div>
      
    );
  }
  
}

export default Main;