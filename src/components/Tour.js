import React,{useState} from 'react'
import Modal from './Modal'

function Tour({place,date,img}) {
    const [clickBtn,setClickBtn] = useState(false)
    
  
  return (
    <>
    <div className="W3__tours-place_item">
        <img src={img} alt="" className="W3__tours-place_item-img"/>
        <div className="W3__tours-place_item-body">
            <h3>{place}</h3>
            <p className="W3__tours-place_item-date">{date}</p>
            <p className="W3__tours-place_item-desc">Praesent tincidunt sed tellus ut rutrum sed vitae justo.</p>
            <button className='btn' onClick={() => setClickBtn(true)}>Buy Tickets</button>

        </div>
    </div>
    {clickBtn && (
        <Modal closeBtn={setClickBtn}/>
    )}
   </>
  )
}

export default Tour