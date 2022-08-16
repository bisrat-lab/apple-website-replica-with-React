import React, { Component } from 'react';

import fijiMain1 from '../../images/fiji/FijiMain1.png';
import fijiApp from '../../images/fiji/Fijiapp.png';
import lightbulb from '../../images/fiji/lightbulb.gif';
import AppleTvLogo from "../../images/icons/apple-tv-logo.png"
import WatchSeries5Logo from "../../images/icons/watch-series5-logo.png"

import FirstContaint from './FirstContaints/FirstContaint';
import SecondContaints from "./SecondContaints/SecContaints";
import SingleWide from "./SingleWide/comp";
import DoubleWide from "./DoubleWide/comp";

import FiftyComponent from "./FifthContaints/FifthContaint";
import SixthContaint from "./SixthContaints/SixthContaints";
import Youtube from '../Youtube/Youtube';


class Main extends Component {
  render(){
    return (
      <div>

        <FirstContaint/>
        <SecondContaints/>
        <SingleWide img={fijiMain1}/>
        <DoubleWide logo={AppleTvLogo} title="Apple What" more="more" moreLink="www.yahoo.com"
                   logo2={WatchSeries5Logo} title2="What Willis" more2="more" moreLink2="www.yahoo.com"/>
        {/* <FiftyComponent/> */}
        <SixthContaint/>
        {/* <Youtube/> */}
                     
      </div>
      
    );
  }
  
}

export default Main;