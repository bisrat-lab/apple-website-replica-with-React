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

const count = 27
const images = Array.from({ length: count }, (_, i) => ({
  original: `https://github.com/homeaidepi/vandy.io/blob/master/src/images/fiji/history/FijiHistory (${i}).jpg?raw=true`,
  thumbnail: `https://github.com/homeaidepi/vandy.io/blob/master/src/images/fiji/history/FijiHistory (${i})_tn.jpg?raw=true`,
}));
const videos = [
  {
    original: `https://github.com/homeaidepi/vandy.io/blob/master/src/images/fiji/history/shareFiji.mp4?raw=true`,
    thumbnail: `https://github.com/homeaidepi/vandy.io/blob/master/src/images/fiji/history/FijiHistory (1)_tn.jpg?raw=true`,
  }
]

const items = [...images, ...videos];

class Main extends Component {
  render(){
    return (
      <div>
        <FirstContaint/>
        <SecondContaints/>
        <Carousel items={items} />
        {/* <FiftyComponent/> */}
        {/* <Youtube/> */}
        
        <SixthContaint/>
      </div>
      
    );
  }
  
}

export default Main;