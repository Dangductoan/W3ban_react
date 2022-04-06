import React from 'react'
import './contact.css'
function Contact() {
  return (
    <div className="W3__contact content-section" id='contact'>
      <div className="W3__contact-section">
        <h3>CONTACT</h3>
        <p>Fan? Drop a note!</p>
      </div>
      <div className="W3__contact-content">
        <div className="W3__contact-content_info">
          <p><i className="ti-location-pin"></i> Chicago, US</p>
          <p><i className="ti-mobile"></i> Phone: <a href="tel:+00 151515">+00 151515</a></p>
          <p><i className="ti-email"></i> Email: <a href="mailto:mail@mail.com">mail@mail.com</a></p>
        </div>
        <div className="W3__contact-content_form">
        <form action="">
              <div className="form-input">
                <div className="form-input_name ">
                  <input type="text" name="" placeholder="Name" id="" className="form-control" required/>
                </div>
                <div className="form-input_email">
                  <input type="email" name="" placeholder="Email" id="" className="form-control" required/>
                </div>
              </div>
              <div className="form-input">
                <div className="form-input_message ">
                  <input type="text" name="" placeholder="Message" id="" className="form-control" required/>
                </div>
              </div>
              <input className="btn form-btn" type="submit" value="SEND"/>
            </form>
        </div>
      </div>
    </div>
  )
}

export default Contact