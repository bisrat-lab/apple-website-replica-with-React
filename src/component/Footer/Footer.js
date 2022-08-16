import React, {Component}from "react"
import FlagIcon from "../../images/icons/16.png"

import './Footer.css'
import './Toggel.js'

class Footer extends Component {
      
    render() { 
  
    return ( 
            <footer className="footer-wrapper">
            <div className="container"> 
                <div className="upper-text-container">
                    <p>Hi there, and thanks for your time.  I’m excited to share some of my story with you today. I think I can help you by sharing what I’ve been doing the past few years.  I’ll try to keep it short and if need be we can find some time to talk more. </p>
                    <p>2. No credit card required.<br/>
                    Lets find time to talk and give me a chance to see if I can help.<br></br>
                    </p>
                    <a href={"https://calendly.com/vandy_at_ferguson"}> Click here for my Calendly or feel free to find time in the widget above.</a>
                </div>
                <div className="footer-links-wrapper row"> 
                    <div className="links-wrapper-1 col-sm-12 col-md">
                        <h3>Sections</h3>
                        <ul>
                            <li><a href="">About</a></li>
                            {/* <li><a href="">iPad</a></li>
                            <li><a href="">iPhone</a></li>
                            <li><a href="">Watch</a></li>
                            <li><a href="">TV</a></li>
                            <li><a href="">Music</a></li>
                            <li><a href="#">AirPods</a></li>
                            <li><a href="#">HomePod</a></li>
                            <li><a href="#">iPod touch</a></li>
                            <li><a href="#">Accessories</a></li>
                            <li><a href="#">Gift Cards</a></li> */}
                        </ul>
                    </div> 
                    <div className="links-wrapper-2 col-sm-12 col-md">
                        <h3>Services</h3>
                        <ul>
                            <li><a href="#">Development</a></li>
                            <li><a href="#">Architecture</a></li>
                            <li><a href="#">Consulting</a></li>
                            <li><a href="#">Agile Coaching</a></li>
                            <li><a href="#">Pair Programmer</a></li>
                            <li><a href="#">DevSecOps Guru</a></li>
                        </ul>
                        {/* <h3>Account</h3>
                        <ul>
                            <li><a href="#">Manage Your Apple ID</a></li>
                            <li><a href="#">Apple Store Account</a></li>
                            <li><a href="#">iCloud.com</a></li>
                        </ul>					 */}
                    </div> 
                    <div className="links-wrapper-3 col-sm-12 col-md">
                        <h3>Work History</h3>
                        <ul>
                            <li><a href="#">Ferguson Technology</a></li>
                            <li><a href="#">IBM</a></li>
                            <li><a href="#">Epic Games</a></li>
                            <li><a href="#">Workday Conversion</a></li>
                            <li><a href="#">PuzzlR Unreal Engine Game</a></li>
                            <li><a href="#">YPrime</a></li>
                            <li><a href="#">Acumen</a></li>
                            <li><a href="#">Investors Title</a></li>
                            <li><a href="#">XS</a></li>
                            <li><a href="#">The Pantry</a></li>
                            <li><a href="#">Smart Data Systems</a></li>
                        </ul>
                    </div>  
                    <div className="links-wrapper-4 col-sm-12 col-md">
                        <h3>For Business</h3>
                        <ul>
                            <li><a href="#">lorem</a></li>
                        </ul>		
                        <h3>For Education</h3>
                        <ul>
                            <li><a href="#">lorem</a></li>
                        </ul>
                        <h3>For Healthcare</h3>
                        <ul>
                            <li><a href="#">lorem</a></li>
                        </ul>	
                        <h3>For Finance</h3>
                        <ul>
                            <li><a href="#">lorem</a></li>
                        </ul>
                    </div> 
                    <div className="links-wrapper-5 col-sm-12 col-md">
                        <h3>Core Values</h3>
                        <ul>
                            <li><a href="#">Respect</a></li>
                            <li><a href="#">Responsibility</a></li>
                            <li><a href="#">Honesty</a></li>
                            <li><a href="#">Fairness</a></li>
                            <li><a href="#">Compassion</a></li>
                            <li><a href="#">Smart then Hard work</a></li>
                            <li><a href="#">Caring / Love</a></li>
                        </ul>
                        <h3>Learn, Grow, Repeat</h3>
                        {/* <ul>
                            <li><a href="#">Find a Store</a></li>
                            <li><a href="#">Genius Bar</a></li>
                            <li><a href="#">Today at Apple</a></li>
                            <li><a href="#">Apple Camp</a></li>
                            <li><a href="#">Field Trip</a></li>
                            <li><a href="#">Apple Store App</a></li>
                        </ul>						 */}
                    </div> 
                </div>
                {/* <div className="my-apple-wrapper"> 
                    More ways to shop: <a href="#">Find an Apple Store</a> or <a href="#">other retailer</a> near you. Or call 1-800-MY-APPLE.
                </div> */}
                <div className="copyright-wrapper row">
                    <div className="copyright col-sm-12 order-2 col-md-8 order-md-1 col-lg-4 order-lg-1">
                        Copyright &copy; 2022 Matthew J Vandergrift LLC. All rights reserved.
                    </div>
                    <div className="footer-links-terms  col-sm-12 order-3 col-lg-6 order-lg-2">
                        <ul>
                            <li><a href="#">Privacy Policy</a></li>
                            <li><a href="#">Terms of Use</a></li>
                            <li><a href="#">Sales and Refunds</a></li>
                            <li><a href="#">Legal</a></li>
                            <li><a href="#">Site Map</a></li>
                        </ul>
                    </div>
                    <div className="footer-country  col-sm-12 order-1 col-md-4 order-md-2 text-md-right col-lg-2 order-lg-3">
                        <div className="flag-wrapper"><img src={FlagIcon}/></div> <div className="footer-country-name">United States</div> 
                    </div>
                </div>
            </div>
        </footer> 
        );     
    }
}
 
export default Footer;