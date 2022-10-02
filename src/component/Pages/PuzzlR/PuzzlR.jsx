import React, { Component } from 'react'
import puzzlR1 from '../../../images/puzzlr/GamePreview.mp4';
import puzzlR2 from '../../../images/puzzlr/NewsSequence.mp4';
import puzzlR3 from '../../../images/puzzlr/SpaceShipDeparting.mp4';
// import puzzlR4 from '../../../images/puzzlr/PuzzlRMainMenu.mp4';
import puzzlR5 from '../../../images/puzzlr/V7 Logo Vandy.mp4';

class PuzzlR extends Component {
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
									PuzzlR - Unreal Engine 4
								</div>
								<div className="brief-description">
									Earth needs your help! Do you have what it takes to save the world? 
								</div>
							</div> 
						</div>
                        <video width="100%" controls >
                            <source src={puzzlR1} type="video/mp4"/>
                        </video>
						<video width="100%" controls >
                            <source src={puzzlR2} type="video/mp4"/>
                        </video>
						<video width="100%" controls >
                            <source src={puzzlR3} type="video/mp4"/>
                        </video>
						{/* <video width="100%" controls >
                            <source src={puzzlR4} type="video/mp4"/>
                        </video> */}
						<video width="100%" controls >
                            <source src={puzzlR5} type="video/mp4"/>
                        </video>
					</div>
				</section>
			</div>
        )
    }
}

export default PuzzlR
