import React, {Component } from 'react';
import Structure from "../Containts/Structure";
import './comp.css'

class SingleWide extends Component {
   
    render() { 
        return ( 
            <div style={{ backgroundImage: `url(${this.props.img})`,backgroundRepeat:"no-repeat",backgroundSize: "100%", backgroundPosition:"center"}}>
                <section className="singlewide-highlight-wrapper" >
                    <Structure titleColor= "white" title="" priceColor ="grey" 
                        price = ""
                        colorClass="white" description=""
                        link1="" link2=""
                    />
                </section>
            </div> 
         );
    }
}
 
export default SingleWide;

