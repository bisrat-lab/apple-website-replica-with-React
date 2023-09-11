import React from 'react'
import './Disclaimer.css'

function Disclaimer() {

    return (
        <section className="internal-page-wrapper">
            <div className="container">
                <div className="row h-100 align-item-center Justify-content-center text-center">
                    <div>
                        <h1>Disclaimer for Phone Number and 6-Character Code Validation</h1>
                        <p>By providing your phone number for verification purposes, you consent to receive a one-time text message containing a 6-character code. Message and data rates may apply.</p>
                        <p>Your phone number will only be used for the purpose of validating your identity and will not be shared with third parties, except as required by law or in accordance with our Privacy Policy.</p>
                        <p>You are solely responsible for maintaining the confidentiality of your 6-character code. Do not share this code with anyone.</p>
                        <p>We endeavor to provide a secure verification process but make no warranties, express or implied, regarding the effectiveness of the security measures employed.</p>
                        <p>Your use of this verification feature is subject to the terms and conditions outlined on our website, which we encourage you to review.</p>
                    </div>
                </div>
            </div>
        </section>
    )

}

export default Disclaimer

