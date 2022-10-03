import React, {Component } from 'react';
import './Calendly.css';
import { InlineWidget } from "react-calendly";

class Calendly extends Component {
  componentWillMount () {
    const script = document.createElement("script");

    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;

    document.body.appendChild(script);
  }

  render() { 
      return ( 
        <section className="calendly-highlight-wrapper">
          <div className="new-alert">
              Want to talk? 
          </div>
          <div className={`title-wraper bold black`}>
            Here's my calendar.
          </div> 
          <div style={{padding:"-65,00"}}>
            <InlineWidget styles={{ height:"300px"}}  url="https://calendly.com/vandy_at_ferguson?hide_landing_page_details=1&hide_event_type_details=1&hide_gdpr_banner=1" />
          </div>
        </section>
        );
  }
}
export default Calendly;