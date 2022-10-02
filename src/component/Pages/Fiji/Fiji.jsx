import React, { Component } from 'react'
import Carousel from '../../Images/Carousel';

 class Fiji extends Component {
    constructor(){
        super();
    }
     
    render() {
        return (
            <div>
				<section className="internal-page-wrapper">
					<div className="container"> 
                        <Carousel />
					</div>
				</section>
			</div>
        )
    }
}

export default Fiji
