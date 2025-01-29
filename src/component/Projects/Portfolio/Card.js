import React, { useState } from "react"
import './Card.css'

const Card = (props) => {
  const [modal, setModal] = useState(false)

  const toggleModal = () => {
    setModal(!modal)
  }

  if (modal) {
    document.body.classList.add("active-modal")
  } else {
    document.body.classList.remove("active-modal")
  }
  
  return (
    <>
      <div className='box btn_shadow '>
        <div className='img'>
          <img src={props.image} alt='' onClick={toggleModal} />
        </div>
        <div className='category d_flex'>
          <span onClick={toggleModal}>{props.category}</span>
          <label>
            <i className='far fa-heart'></i> {props.totalLike}
          </label>
        </div>
        <div className='title'>
          <h2 onClick={toggleModal}>{props.title}</h2>
          <a href='#popup' className='arrow' onClick={toggleModal}>
            <i class='fas fa-arrow-right'></i>
          </a>
        </div>
      </div>

      {/* Popup box */}
      {modal && (
        <div className='modal'>
          <div onClick={toggleModal} className='overlay'></div>
          <div className='modal-content d_flex'>
            <div className='modal-img left'>
              <img src={props.image} alt='' />
            </div>
            <div className='modal-text right'>
              {/* <span>{props.category}</span> */}
              <h1>{props.title}</h1>
              <h2>{props.subTitle}</h2>
              <ul>
                <li><i class='fas fa-chevron-right'></i><i class='fas fa-chevron-right'></i> {props.desc_one}</li>
                <li><i class='fas fa-chevron-right'></i><i class='fas fa-chevron-right'></i> {props.desc_two}</li>
                <li><i class='fas fa-chevron-right'></i><i class='fas fa-chevron-right'></i> {props.desc_three}</li>
                <li><i class='fas fa-chevron-right'></i><i class='fas fa-chevron-right'></i> {props.desc_four}</li>
              </ul>

              <div>
                {
                  props.stacks.map(stack => <button className="button-special" style={{ color: "#222222" }}>{stack}</button>)
                }
              </div>

              <div className='button f_flex mtop'>
                <a target="_blank" rel="noopener noreferrer" href={props.live_server}><button className='btn_shadow'>
                  LIVE LINK <i class='fas fa-chevron-right'></i>
                </button></a>
                <a target="_blank" rel="noopener noreferrer" href={props.client}><button className='btn_shadow'>
                  CLIENT <i class='fas fa-chevron-right'></i>
                </button></a>
                <a target="_blank" rel="noopener noreferrer" href={props.server}><button className='btn_shadow'>
                  SERVER <i class='fas fa-chevron-right'></i>
                </button></a>
              </div>
              <button className='close-modal btn_shadow' onClick={toggleModal}>
                <i class='fas fa-times'></i>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Card
