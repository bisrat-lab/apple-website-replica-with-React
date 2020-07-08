

import React, {Component}from "react"
import './Header.css';


class Navbar extends Component {
    componentDidMount(){
            const selectElement = (element) =>document.querySelector(element);

            selectElement('.mobile-menu').addEventListener('click' , ()=>{
            selectElement('header').classList.toggle('active')
            })
    }
       render() { 
            return ( 
        <header>
        <div className="container2">
            <nav>
                <ul className="nav-list nav-list-mobile">
                    <li className="nav-item">
                        <div className="mobile-menu">
                            <span className="line line-top"></span>
                            <span className="line line-bottom"></span>
                        </div>
                    </li>
                    <li className="nav-item">
                        <a href="index.html" className="nav-link nav-link-apple"></a>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-link nav-link-bag"></a>
                    </li>
                   
                </ul>
                {/* <!-- /.nav-list nav-list-mobile -->  */}
                <ul className="nav-list nav-list-larger">
                    <li className="nav-item search-hiden">
                      
                        <input className="nav-link nav-link-searchbar" type="text" 
                            placeholder="&#xF002; Search apple.com" 
                            style={{fontFamily:"Arial, FontAwesome"}} />
                      
                    </li>
                    <li className="nav-item nav-item-hidden">
                        <a href="/" className="nav-link nav-link-apple"></a>
                    </li>
                    <li className="nav-item">
                        <a href="mac" className="nav-link">Mac</a>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-link">iPad</a>
                    </li>
                    <li className="nav-item">
                        <a href="iphone" className="nav-link">iPhone</a>
                    </li>
                    <li className="nav-item">
                        <a href="watch" className="nav-link">Watch</a>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-link">TV</a>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-link">Music</a>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-link">Support</a>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-link nav-link-search"></a>
                    </li>
                    <li className="nav-item">
                            <a href="#" className="nav-link nav-link-bag"></a>
                    </li>
                  
                </ul> 
                    
            </nav>

        </div>
    </header>
    )
    }
}
 
export default Navbar;










// import React, {Component}from "react"
// import Navlink from "./Navlink"
// import logo from "../../images/icons/app.svg"
// import search from "../../images/icons/search-icon-sm.png"
// import cart from "../../images/icons/cart-sm.png"
// import './Header.css'

// className Navbar extends Component {
//     render() { 
//         return ( 
//             <div classNameName="nav-wrapper fixed-top">
//                 <div classNameName="container">
//                     <nav classNameName="navbar navbar-toggleable-sm navbar-expand-md">
//                         <button classNameName="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target=".navbar-collapse">
//                             ☰
//                         </button>
//                         <a classNameName="navbar-brand mx-auto" href="#top"><img src={logo}/></a>

//                         <div classNameName="navbar-collapse collapse">
//                             <ul classNameName="navbar-nav nav-justified w-100 nav-fill">

//                                 <Navlink linkUrl ="#top"linkName="Mac"/>
//                                 <Navlink linkUrl ="#top"linkName="iPhone"/>
//                                 <Navlink linkUrl ="#top"linkName="iPad"/>
//                                 <Navlink linkUrl ="#top"linkName="Watch"/>
//                                 <Navlink linkUrl ="#top"linkName="TV"/>
//                                 <Navlink linkUrl ="#top"linkName="Music"/>
//                                 <Navlink linkUrl ="#top"linkName="Support"/>
//                                 <Navlink linkUrl ="#top" Image = {<img src={search}/>}/>
//                                 <Navlink linkUrl ="#top" Image = {<img src={cart}/>}/>
                                
                
                             
//                             </ul>
//                         </div>
//                     </nav>
//                 </div>
// 	        </div>
//         );     
//     }
// }
 
// export default Navbar;