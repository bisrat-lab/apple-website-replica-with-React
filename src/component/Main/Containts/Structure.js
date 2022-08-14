import React, {Component } from 'react';
class Structure extends Component {
  
    render() { 
        const {alert, title ,description,price,titleColor,colorClass,priceColor, link1,link2} = this.props;
        return (  
            <div className="container">
            <div className="new-alert">
				{alert}
			</div>
			<div className={`title-wraper bold ${titleColor}`}>
				{title}
			</div> 

			<div className={`description-wrapper ${colorClass}`}>
				{description}
			</div>

			<div className={`price-wrapper ${priceColor}`}>
				{price}
			</div>

			<div className="links-wrapper">
				<ul>
					{link1 &&
						<li><a href="#top">{link1}</a></li>
					}
					{link2 &&
						<li><a href="#top">{link2}</a></li>
					}
				</ul> 
			</div>
		</div>			
        );
    }
}
 
export default Structure;