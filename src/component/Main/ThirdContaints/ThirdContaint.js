import React, {Component } from 'react';
import Structure from "../Containts/Structure";

class ThirdContaint extends Component {
   
    render() { 
        return ( 
            <section className="third-hightlight-wrapper">
               <Structure titleColor= "white" title="iPhone 11 Pro" priceColor ="grey" 
               price = "From $24.95/mo. or $599 with trade‑in."
			    colorClass="white" description="Pro cameras. Pro display. Pro performance."
				/>
	        </section>
         );
    }
}
 
export default ThirdContaint;

{/* <div className="container">
<div className="title-wraper bold">
iPhone 11 Pro 
</div> 

<div className="description-wrapper">
    Pro cameras. Pro display. Pro performance.
</div>

<div className="price-wrapper">
    From $24.95/mo. or $599 with trade‑in.
</div>

<div className="links-wrapper">
    <ul>
        <li><a href="">Learn more</a></li>
        <li><a href="">Buy</a></li>
    </ul> 
</div>
</div> */}