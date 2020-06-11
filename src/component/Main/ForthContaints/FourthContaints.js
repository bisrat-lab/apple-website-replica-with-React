import React, {Component } from 'react';
import './FourthContaints.css'
import StructureTwo from '../Containts/StructureTwo'

class ForthContaint extends Component {
    render() { 
        return ( 
            <section className="fourth-heghlight-wrapper">
                <div className="container-fluid">
                    <div className="row">
                        <StructureTwo wrapperClass="left-side-wrapper" 
                            innerClassName="left-side-container"
                            title= "iPhone 11" description="Just the right amount of everything."
                            price="From $18.70/mo. or $499 with trade‑in."
                             link="Apply now"><a href="">Learn more</a></StructureTwo>
                        <StructureTwo wrapperClass="right-side-wrapper"
                            innerClassName="right-side-container" titleColor="white" linkColor="white"
                            title="Get the latest CDC response to COVID-19."
                           link="Watch the PSA "/>
                    </div>
                </div> 
	        </section>
         );
    }
}
 
export default ForthContaint;