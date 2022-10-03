import React, { Component } from 'react'
import Carousel from '../../../component/Images/Carousel';

const count = 26
const images = Array.from({ length: count }, (_, i) => ({
  original: `https://github.com/homeaidepi/vandy.io/blob/master/src/images/bluebuzz/history/BlueBuzzHistory (${i+1}).jpg?raw=true`,
  thumbnail: `https://github.com/homeaidepi/vandy.io/blob/master/src/images/bluebuzz/history/BlueBuzzHistory (${i+1})_tn.jpg?raw=true`,
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
									BlueBuzz
								</div>
								<div className="brief-description">
									Apple Watch & iPhone Location Notification
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
