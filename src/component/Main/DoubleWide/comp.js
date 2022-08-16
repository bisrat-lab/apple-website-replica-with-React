import React, {Component} from 'react';
import './comp.css'


class DoubleWide extends Component {
    
    render() { 
        return ( 
            <section className="doublewide-highlight-wrapper">
                <div className="container-fluid">
                    <div className="row">
                        <div className="left-side-wrapper col-sm-12 col-md-6">
                            <div className="left-side-container">
                                <div className="top-logo-wrapper">
                                    <div className="logo-wrapper">
                                        <img src={this.props.logo}/>
                                    </div>
                                </div>

                                <div className="tvshow-logo-wraper">
                                    <img src={this.props.title}/>
                                </div>

                                <div className="watch-more-wrapper">
                                    <a href={this.props.moreLink}>{this.props.more}</a>
                                </div>
                            </div>
                        </div>
                        <div className="right-side-wrapper col-sm-12 col-md-6">
                            <div className="right-side-container">
                                <div className="top-logo-wrapper">
                                    <div className="logo-wrapper">
                                        <img src={this.props.logo2}/>
                                    </div>
                                </div>
                                <div className="description-wraper">
                                    {this.props.title2}
                                </div>
                                <div className="links-wrapper">
                                    <ul>
                                        <li><a href={this.props.moreLink2}>{this.props.more2}</a></li>
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
 
export default DoubleWide;