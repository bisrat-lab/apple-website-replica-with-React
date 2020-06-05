import React, {Component } from 'react';

class Structure extends Component {
  
    render() { 
        const {alert, title ,description,price} = this.props;
        return (  
            <div className="container">
            <div className="new-alert">
				{alert}
			</div>
			<div className={`title-wraper bold ${this.props.titleColor}`}>
				{title}
			</div> 

			<div className={`description-wrapper ${this.props.colorClass}`}>
				{description}
			</div>

			<div className={`price-wrapper ${this.props.priceColor}`}>
				{price}
			</div>

			<div className="links-wrapper">
				<ul>
					<li><a href="#top">Learn more </a></li>
					<li><a href="#top">Buy</a></li>
				</ul> 
			</div>
		</div>			
        );
    }
}
 
export default Structure;