import React, {Component}from "react"
import Navlink from "./Navlink"
import logo from "../../images/icons/logo-sm.png"
import search from "../../images/icons/search-icon-sm.png"
import cart from "../../images/icons/cart-sm.png"
import './Header.css'

class Navbar extends Component {
    render() { 
        return ( 
            <div className="nav-wrapper fixed-top">
                <div className="container">
                    <nav className="navbar navbar-toggleable-sm navbar-expand-md">
                        <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target=".navbar-collapse">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <a className="navbar-brand mx-auto" href="#"><img src={logo}/></a>

                        <div className="navbar-collapse collapse">
                            <ul className="navbar-nav nav-justified w-100 nav-fill">

                                <Navlink linkUrl ="#"linkName="Mac"/>
                                <Navlink linkUrl ="#"linkName="iPhone"/>
                                <Navlink linkUrl ="#"linkName="iPad"/>
                                <Navlink linkUrl ="#"linkName="Watch"/>
                                <Navlink linkUrl ="#"linkName="TV"/>
                                <Navlink linkUrl ="#"linkName="Music"/>
                                <Navlink linkUrl ="#"linkName="Support"/>
                                
                                <li className="nav-item" ><a className="nav-link js-scroll-trigger" href="/search/"><img src={search}/></a></li>
                                <li className="nav-item"><a  className="nav-link js-scroll-trigger" href="/cart/"><img src={cart}/></a></li>
                            </ul>
                        </div>
                    </nav>
                </div>
	        </div>
        );     
    }
}
 
export default Navbar;