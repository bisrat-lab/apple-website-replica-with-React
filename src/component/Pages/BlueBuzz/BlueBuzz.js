import React, { Component } from 'react'
import Carousel from '../../../component/Images/Carousel';

const count = 27
const images = Array.from({ length: count }, (_, i) => ({
  original: `https://github.com/homeaidepi/vandy.io/blob/master/src/images/BlueBuzz/history/BlueBuzzHistory (${i}).jpg?raw=true`,
  thumbnail: `https://github.com/homeaidepi/vandy.io/blob/master/src/images/BlueBuzz/history/BlueBuzzHistory (${i})_tn.jpg?raw=true`,
}));

const items = [...images];

class BlueBuzz extends Component {
    render() {
        return (
            <div>
				<section className="internal-page-wrapper">
					<div className="container"> 
						<div className="row justify-content-center text-center">
							<div className="col-12">
								<div className="title-wraper">
									BlueBuzz - iPhone & Apple Watch 
								</div>
								<div className="brief-description">
									Separation Notification 
								</div>
							</div> 
						</div>
						<Carousel items={items} />
					</div>
				</section>
			</div>
        )
    }
}

export default BlueBuzz;
