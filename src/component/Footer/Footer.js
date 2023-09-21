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
                            <li>About</li>
                        </ul>
                    </div> 
                    <div className="links-wrapper-2 col-sm-12 col-md">
                        <h3>Services</h3>
                        <ul>
                            <li>Development</li>
                            <li>Architecture</li>
                            <li>Consulting</li>
                            <li>Agile Coaching</li>
                            <li>Pair Programmer</li>
                            <li>DevSecOps Guru</li>
                        </ul>
                    </div> 
                    <div className="links-wrapper-3 col-sm-12 col-md">
                        <h3>Work History</h3>
                        <ul>
                            <li>Ferguson Technology</li>
                            <li>IBM</li>
                            <li>Epic Games</li>
                            <li>Workday Conversion</li>
                            <li>PuzzlR Unreal Engine Game</li>
                            <li>YPrime</li>
                            <li>Acumen</li>
                            <li>Investors Title</li>
                            <li>XS</li>
                            <li>The Pantry</li>
                            <li>Smart Data Systems</li>
                        </ul>
                    </div>  
                    <div className="links-wrapper-4 col-sm-12 col-md">
                        <h3>For Business</h3>
                        <ul>
                            <li>lorem</li>
                        </ul>		
                        <h3>For Education</h3>
                        <ul>
                            <li>lorem</li>
                        </ul>
                        <h3>For Healthcare</h3>
                        <ul>
                            <li>lorem</li>
                        </ul>	
                        <h3>For Finance</h3>
                        <ul>
                            <li>lorem</li>
                        </ul>
                    </div> 
                    <div className="links-wrapper-5 col-sm-12 col-md">
                        <h3>Core Values</h3>
                        <ul>
                            <li>Respect</li>
                            <li>Responsibility</li>
                            <li>Honesty</li>
                            <li>Fairness</li>
                            <li>Compassion</li>
                            <li>Smart then Hard work</li>
                            <li>Caring / Love</li>
                        </ul>
                        <h3>Learn, Grow, Repeat</h3>
                    </div> 
                </div>
                <div className="copyright-wrapper row">
                    <div className="copyright col-sm-12 order-2 col-md-8 order-md-1 col-lg-4 order-lg-1">
                        Copyright &copy; 2022 Matthew J Vandergrift LLC. All rights reserved.
                    </div>
                    <div className="footer-links-terms  col-sm-12 order-3 col-lg-6 order-lg-2">
                        <ul>
                            <li>Privacy Policy</li>
                            <li>Terms of Use</li>
                            <li>Sales and Refunds</li>
                            <li>Legal</li>
                            <li>Site Map</li>
                        </ul>
                    </div>
                    <div className="footer-country  col-sm-12 order-1 col-md-4 order-md-2 text-md-right col-lg-2 order-lg-3">
                        <div className="flag-wrapper"><img alt="" src={FlagIcon}/></div> <div className="footer-country-name">United States</div> 
                    </div>
                </div>
            </div>
        </footer> 
        );     
    }
}
 
export default Footer;