import React from 'react'
import './tours.css'
import Tour from '../../components/Tour'
import img1 from '../../assets/img/place/place1.jpg'
import img2 from '../../assets/img/place/place2.jpg'
import img3 from '../../assets/img/place/place3.jpg'


function Tours() {
  return (
    <div id="tours" className="W3__tours">
    <div className="W3__tours-content content-section">
      <div className="W3__tours-heading">
        <h3>TOUR DATES</h3>
        <p>Remember to book your tickets!</p>
      </div>
      <ul className="W3__tours-list">
        <li>September <span className="W3__tours-list_sold-out">Sold out</span></li>
        <li>October <span className="W3__tours-list_sold-out">Sold out</span></li>
        <li>November <span className="W3__tours-list_quallity">3</span></li>

      </ul>
      <div className="W3__tours-place_list">
        <Tour place='New york' date='Fri 27 Nov 2016' img={img1}/>
        <Tour place='Paris' date='Sat 28 Nov 2016' img={img2}/>
        <Tour place='San Francisco' date='Sun 29 Nov 2016' img={img3}/>

       
        

      </div>
    </div>
    </div>
  
  )
}

export default Tours