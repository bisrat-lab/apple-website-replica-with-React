import React, {Component } from 'react';
import Structure from "../Containts/Structure"
import './SecContaints.css';

class SecondContaints extends Component {
    
    render() { 
        return ( 
            <section className="second-hightlight-wrapper">
				<Structure alert="recently known For" titleColor="black" title="Blue Buzz" priceColor ="grey" price = "Over 500 units sold, with one only version needed from 2019-2022"
				colorClass="black" link1="" link2="" description="Apple Watch & iPhone Location Notification"
				/>
	        </section>
         );
    }
}
export default SecondContaints;