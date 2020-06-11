import React, {Component} from 'react';
import './FifthContaint.css'
import AppleTvLogo from "../../../images/icons/apple-tv-logo.png"
import WatchSeries5Logo from "../../../images/icons/watch-series5-logo.png"
import tvtitle from "../../../images/icons/tv-title-large.png"

class FiftyComponent extends Component {
    
    render() { 
        return ( 
            <section className="fifth-heghlight-wrapper">
                <div className="container-fluid">
                    <div className="row">
                        <div className="left-side-wrapper col-sm-12 col-md-6">
                            <div className="left-side-container">
                                <div className="top-logo-wrapper">
                                    <div className="logo-wrapper">
                                        <img src={AppleTvLogo}/>
                                    </div>
                                </div>

                                <div className="tvshow-logo-wraper">
                                    <img src={tvtitle}/>
                                </div>

                                <div className="watch-more-wrapper">
                                    <a href="#">Watch now</a>
                                </div>
                            </div>
                        </div>
                        <div className="right-side-wrapper col-sm-12 col-md-6">
                            <div className="right-side-container">
                                <div className="top-logo-wrapper">
                                    <div className="logo-wrapper">
                                        <img src={WatchSeries5Logo}/>
                                    </div>
                                </div>
                                <div className="description-wraper">
                                    With the Always-On Retina display.<br></br>
                                    You’ve never seen a watch like this.
                                </div>
                                <div className="links-wrapper">
                                    <ul>
                                        <li><a href="">Learn more</a></li>
                                        <li><a href="">Buy</a></li>
                                    </ul> 
                                </div>
                            </div>
                        </div>					
                    </div>
                </div> 
            </section>
         );
    }
}
 
export default FiftyComponent;