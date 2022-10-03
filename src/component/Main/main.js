import React, { Component } from 'react';

import HeadShot from './HeadShot/HeadShot';
import SecondContaints from "./SecondContaints/SecContaints";
import FijiContaint from "./FijiContaint/FijiContaint";
import Calendly from './Calendly/Calendly';

class Main extends Component {
  render(){
    return (
      <div>
        <HeadShot/>
        <SecondContaints/>
        <FijiContaint />
        <Calendly/>
      </div>
    );
  }
  
}

export default Main;