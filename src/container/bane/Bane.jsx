import React from 'react'
import './bane.css'
import img1 from '../../assets/img/member/member1.jpg'

const Member = () => (
  <div className="W3__bane-member_item">
  <p className="W3__bane-member_name">Name</p>
  <img src={img1} alt="Name" className="W3__bane-member_img"/>

</div>
)
function Bane() {
  return (
    <div className="W3__bane content-section" id='bane'>
      <div className="W3__bane-info">
        <h3>THE BANE</h3>
        <p className='W3__bane-info_heading'>We love music</p>
        <p className='W3__bane-info_about'> We have created a fictional band website. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
          velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
          laboris nisi ut aliquip ex ea commodo consequat.</p>
      </div>
      <div className="W3__bane-member_list">
        <Member/>
        <Member/>
        <Member/>

      </div>
    </div>
  )
}

export default Bane