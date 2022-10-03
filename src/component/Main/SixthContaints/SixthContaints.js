import React, {Component } from 'react';
import './SixthContaints.css'
import puzzlR1 from '../../../images/puzzlr/V7 Logo Vandy.mp4';

class SixthContaint extends Component {
    componentWillMount () {
        const script = document.createElement("script");
    
        script.src = "https://assets.calendly.com/assets/external/widget.js";
        script.async = true;
    
        document.body.appendChild(script);
    }

    render() { 
        return (  
            <section className="sixth-heghlight-wrapper">
                <div className="container-fluid">
                    <div className="row">
                            <video width="100%" controls >
                                <source src={puzzlR1} type="video/mp4"/>
                            </video>
                        <div className="calendly-inline-widget" style={{width:"50%"}} data-url="https://calendly.com/vandy_at_ferguson?hide_landing_page_details=1&hide_gdpr_banner=1" >
                        </div>
                        {/* <StructureTwo wrapperClass="right-side-wrapper"
                            innerClassName="right-side-container" 
                            title="Apple Card Monthly Installments"
                            description="The simplicity of Apple In a credit card."link="Apply now"><a href="">Learn more</a></StructureTwo> */}
                    </div>
                </div> 
            </section>
        );
    }
}
 
export default SixthContaint;