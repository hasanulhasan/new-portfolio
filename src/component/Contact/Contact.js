import React, { useState } from "react"
import contact1 from "./contact.gif"
import "./Contact.css"
import Lottie from "lottie-react";
import contactLotti3 from './../pic/contactLotti3.json'

const Contact = () => {
  const [data, setData] = useState({
    fullname: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  })

  const InputEvent = (event) => {
    const { name, value } = event.target

    setData((preVal) => {
      return {
        ...preVal,
        [name]: value,
      }
    })
  }

  const formSubmit = (event) => {
    event.preventDefault()
    alert(
      `My name is ${data.fullname}. 
	My phone number is ${data.phone}. 
	My email address is ${data.email}. 
	My Subject on  ${data.subject}. 
	Here is my message I want to say : ${data.message}. 
	`
    )
  }
  return (
    <>
      <section className='Contact' id='contact'>
        <div className='container top'>
          <div className='heading text-center'>
            <h4>CONTACT</h4>
            <h1>Contact With Me</h1>
          </div>

          <div className='content d_flex'>
            <div className='left'>
              <div className='box box_shodow'>
                <div className='img'>
                  {/* <img src={contact1} alt="" /> */}
                  <Lottie style={{ width: '580px', height: '286px' }} animationData={contactLotti3} loop={true} />
                </div>
                <div className='details'>
                  <h1>Md Hasanul Karim</h1>
                  <p>MERN Stack Developer</p>
                  <p>I am available for freelance work. Connect with me via and call in to my account.Thanks for reading me.</p> <br />
                  <p>Phone: +8801862086965</p>
                  <p>Email: hasanulkarimh@gamil.com</p> <br />
                  <span>FIND WITH ME</span>
                  <div className='button f_flex'>
                    <a href="https://www.facebook.com/hasanulkarim.hasan1/" target="_blank" rel="noopener noreferrer"><button className='btn_shadow'>
                      <i class='fab fa-facebook-f'></i>
                    </button></a>
                    <a href="https://www.instagram.com/hasanulhasan/" target="_blank" rel="noopener noreferrer"><button className='btn_shadow'>
                      <i className='fab fa-instagram'></i>
                    </button></a>
                    <a href="https://t.me/hasanulhasan" target="_blank" rel="noopener noreferrer">
                      <button className='btn_shadow'>
                        <i className='fab fa-telegram'></i>
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className='right box_shodow'>
              <form onSubmit={formSubmit}>
                <div className='f_flex'>
                  <div className='input row'>
                    <span>YOUR NAME</span>
                    <input type='text' name='fullname' value={data.fullname} onChange={InputEvent} required />
                  </div>
                  <div className='input row'>
                    <span>PHONE NUMBER </span>
                    <input type='number' name='phone' value={data.phone} onChange={InputEvent} />
                  </div>
                </div>
                <div className='input'>
                  <span>EMAIL </span>
                  <input type='email' name='email' value={data.email} onChange={InputEvent} required />
                </div>
                <div className='input'>
                  <span>SUBJECT </span>
                  <input type='text' name='subject' value={data.subject} onChange={InputEvent} />
                </div>
                <div className='input'>
                  <span>YOUR MESSAGE </span>
                  <textarea cols='30' rows='10' name='message' value={data.message} onChange={InputEvent} required></textarea>
                </div>
                <button className='btn_shadow'>
                  SEND MESSAGE <i className='fa fa-long-arrow-right'></i>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact
