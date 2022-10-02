import React, { Component } from 'react'
import shareFiji from '../../../images/fiji/history/shareFiji.mp4';

class Fiji extends Component {
    constructor(){
        super();
    }
     
    render() {
        return (
            <div>
				<section className="internal-page-wrapper">
					<div className="container"> 
						<div className="row justify-content-center text-center">
							<div className="col-12">
								<div className="title-wraper">
									Fiji - Home Automation
								</div>
								<div className="brief-description">
									What if your home helped you? 
								</div>
							</div> 
						</div>
                        <video width="100%" controls >
                            <source src={shareFiji} type="video/mp4"/>
                        </video>
					</div>
				</section>
			</div>
        )
    }
}

export default Fiji
