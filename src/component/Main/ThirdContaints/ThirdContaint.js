import React, {Component } from 'react';
import Structure from "../Containts/Structure";
import './ThirdContaint.css'

class ThirdContaint extends Component {
   
    render() { 
        return ( 
            <section className="third-hightlight-wrapper">
               <Structure titleColor= "white" title="Fiji Home Helper" priceColor ="grey" 
                price = "CEO, Presented WebSummit 2015 Day 1"
			    colorClass="white" description="What if your home helped you?"
                link1="" link2=""
				/>
	        </section>
         );
    }
}
 
export default ThirdContaint;

