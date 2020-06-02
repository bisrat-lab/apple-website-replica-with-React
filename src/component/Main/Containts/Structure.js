import React, {Component } from 'react';

class Structure extends Component {
  
    render() { 
        return (  
            <div className="container">
            <div className="new-alert">
				{this.props.alert}
			</div>
			<div className={`title-wraper bold ${this.props.titleColor}`}>
				{this.props.title}
			</div> 

			<div className={`description-wrapper ${this.props.colorClass}`}>
				{this.props.description}
			</div>

			<div className={`price-wrapper ${this.props.priceColor}`}>
				{this.props.price}
			</div>

			<div className="links-wrapper">
				<ul>
					<li><a href="">Learn more</a></li>
					<li><a href="">Buy</a></li>
				</ul> 
			</div>
		</div>			
        );
    }
}
 
export default Structure;