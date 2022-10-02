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
