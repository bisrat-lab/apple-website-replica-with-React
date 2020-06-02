import React, {Component}from "react"

class Navlink extends Component {
    render() { 
        return ( 
        <li className="nav-item"><a className="nav-link js-scroll-trigger" href={this.props.linkUrl}>{this.props.linkName}{this.props.Image}</a></li>
        );     
    }
}
 
export default Navlink;

{/* <li class="nav-item" ><a class="nav-link js-scroll-trigger" href={this.props.linkUrl}>{this.probs.Image}</a></li> */}