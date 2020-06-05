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
                            ☰
                        </button>
                        <a className="navbar-brand mx-auto" href="#top"><img src={logo}/></a>

                        <div className="navbar-collapse collapse">
                            <ul className="navbar-nav nav-justified w-100 nav-fill">

                                <Navlink linkUrl ="#top"linkName="Mac"/>
                                <Navlink linkUrl ="#top"linkName="iPhone"/>
                                <Navlink linkUrl ="#top"linkName="iPad"/>
                                <Navlink linkUrl ="#top"linkName="Watch"/>
                                <Navlink linkUrl ="#top"linkName="TV"/>
                                <Navlink linkUrl ="#top"linkName="Music"/>
                                <Navlink linkUrl ="#top"linkName="Support"/>
                                <Navlink linkUrl ="#top" Image = {<img src={search}/>}/>
                                <Navlink linkUrl ="#top" Image = {<img src={cart}/>}/>
                                
                
                             
                            </ul>
                        </div>
                    </nav>
                </div>
	        </div>
        );     
    }
}
 
export default Navbar;