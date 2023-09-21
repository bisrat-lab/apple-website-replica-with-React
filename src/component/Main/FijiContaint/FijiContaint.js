import React, {Component } from 'react';
import './FijiContaint.css';

import Carousel from '../../Images/Carousel';

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

class FijiContaint extends Component {
    render() { 
        return ( 
            <section className="fijicontaint-hightlight-wrapper">
				<div className="container">
                    <div className="new-alert">
                        Also known for
                    </div>
                    <div className={`title-wraper bold black`}>
                        Fiji
                    </div>
                    <div className={`description-wrapper black`}>
                        Home Helper & automation 
                    </div>
                    <br />
                    <Carousel items={items} />
                </div>
	        </section>
         );
    }
}
export default FijiContaint;