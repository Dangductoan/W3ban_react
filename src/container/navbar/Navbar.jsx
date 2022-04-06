import React,{useState}from 'react'
import './navbar.css'
import '../../assets/font/themify-icons/themify-icons.css'
const Menu = () => (
  <>
        <li className="W3__navbar-nav_link"><a href="#">Home</a></li>
        <li className="W3__navbar-nav_link"><a href="#bane">Bane</a></li>
        <li className="W3__navbar-nav_link"><a href="#tours">Tour</a></li>
        <li className="W3__navbar-nav_link"><a href="#contact">Contact</a></li>
        <li className="W3__navbar-nav_link">
          <a href="#">
            More
            <i className="nav-arrow-down ti-angle-down"></i>
          </a>
          <ul className="W3__navbar-subnav">
            <li className="W3__navbar-subnav_link"><a href="#">Merchandise</a></li>
            <li className="W3__navbar-subnav_link"><a href="#">Extras</a></li>
            <li className="W3__navbar-subnav_link"><a href="#">Media</a></li>

          </ul>
        </li>


      </>

)
function Navbar() {
  const [toggleMenu,setToggleMenu]=useState(false)
  return (
    <div className="W3__navbar">
      <ul className="W3__navbar-nav">
        <Menu/>
      </ul>
      <div className="W3__navbar-search">
        <i className="search-icon ti-search"></i>
      </div>
      <div className="W3__navbar-menu">
        {toggleMenu
         ? <i className="ti-close" style={{color:"#fff",fontSize:"27"}} onClick={() => setToggleMenu(false)}></i>
         : <i className=" menu-icon ti-menu" style={{color:"#fff",fontSize:"27"}} onClick={() => setToggleMenu(true)}></i>
        }
        {toggleMenu && (
          <ul className="W3__navbar-menu_container scale-up-tl ">
            <Menu/>
          </ul>

        )}

      </div>

    </div>
  )
}

export default Navbar