import React from 'react'
import './footer.css'
import '../../assets/font/themify-icons/themify-icons.css'
function Footer() {
  return (
    <div id="footer " className="W3__footer">
    <div className="W3__footer-socials_list">
      <a href=""><i className="ti-facebook"></i></a>
      <a href=""><i className="ti-instagram"></i></a>
      <a href=""><i className="ti-youtube"></i></a>
      <a href=""><i className="ti-pinterest"></i></a>
      <a href=""><i className="ti-twitter"></i></a>
      <a href=""><i className="ti-linkedin"></i></a>

    </div>
    <p className="W3__footer-copyright">Powered by<a href=""> w3.css</a></p>

  </div>
  )
}

export default Footer