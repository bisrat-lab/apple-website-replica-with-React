import React, {Component } from 'react';
import './HeadShot.css';

import VandyHeadShot from "../../../images/HeadshotShadowHomeAidePi.png"

const titleColor = "black";

class HeadShot extends Component {
    render() { 
        return ( 
            <section className="headshot-hightlight-wrapper">
				<div className="container">
                    <div className="new-alert">
                        New
                    </div>
                    <div className={`title-wraper bold ${titleColor}`}>
                        Vandy.io
                    </div>
                    <br />
                    <img style={{height:"514px"}} src={VandyHeadShot} alt="HeadShot"/>
                    <div className={`title-wraper bold #163057`}>
                        HomeAidePi
                    </div>
                </div>
	        </section>
         );
    }
}
export default HeadShot;