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
                        <a href="index.html" aria-label="Vandy Link"> className="nav-link nav-link-Vandy"></a>
                    </li>
                   
                </ul>
                <ul className="nav-list nav-list-larger">
                    <li className="nav-item search-hiden">
                        <input className="nav-link nav-link-searchbar" type="text" 
                            placeholder="&#xF002; Search Vandy.io" 
                            style={{fontFamily:"Arial, FontAwesome"}} />
                      
                    </li>
                    <li className="nav-item">
                        <a href="DevSecOps" aria-label="Vandy Link" className="nav-link">DevSecOps</a>
                    </li>
                    <li className="nav-item">
                        <a href="Archie" aria-label="Vandy Link" className="nav-link">Ask Archie</a>
                    </li>
                    <li className="nav-item">
                        <a href="BlueBuzz" aria-label="Vandy Link" className="nav-link">BlueBuzz</a>
                    </li>
                    <li className="nav-item">
                        <a href="PuzzlR" aria-label="Vandy Link" className="nav-link">PuzzlR</a>
                    </li>
                    <li className="nav-item">
                        <a href="Fiji" aria-label="Vandy Link" className="nav-link">Fiji</a>
                    </li>
                    <li className="nav-item">
                        <a href="Coach" aria-label="Vandy Link" className="nav-link">Agile Coach &#160;&#160;&#160; New Collar Mentor &#160;&#160;&#160; Pair Programming &#160;&#160;&#160; My Bio</a>
                    </li>
                </ul> 
            </nav>
        </div>
    </header>
    )
    }
}
 
export default Navbar;