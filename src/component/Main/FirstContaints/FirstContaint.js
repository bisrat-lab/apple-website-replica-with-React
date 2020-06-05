import React, {Component}from "react"
import "./FirstContaint.css";
import Structure from "../Containts/Structure";

class FirstContaint extends Component {
    render() { 
        return ( 
            <section className="first-hightlight-wrapper">
				<Structure  alert="New" titleColor="black" title="iPad Pro"
				colorClass="black"
				/>
		        <div className="ipod-caption row">
					<div className="col-sm-12 col-md-6 text-md-right">iPad Pro available starting 3.25</div>
					<div className="col-sm-12 col-md-6 text-md-left">Magic Keyboard coming in May</div>
				</div>
	        </section>
        );     
    }
}
 
export default FirstContaint;


