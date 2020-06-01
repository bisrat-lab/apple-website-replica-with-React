import React, {Component } from 'react';

class Structure extends Component {
  
    render() { 
        return (  
            <div class="container">
            <div class="new-alert">
				{this.props.alert}
			</div>
			<div class={`title-wraper bold ${this.props.titleColor}`}>
				{this.props.title}
			</div> 

			<div class={`description-wrapper ${this.props.colorClass}`}>
				{this.props.description}
			</div>

			<div class={`price-wrapper ${this.props.priceColor}`}>
				{this.props.price}
			</div>

			<div class="links-wrapper">
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