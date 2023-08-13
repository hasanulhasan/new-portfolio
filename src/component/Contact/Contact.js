import React, { useRef, useState } from "react"
import "./Contact.css"
import Lottie from "lottie-react";
import contactLotti3 from './../img/contactLotti3.json'
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  const formSubmit = (event) => {
    event.preventDefault();
    emailjs.sendForm('service_o69azmh', 'template_m6u1nr3', form.current, 'gfFMT0Gof2mDY-XG1')
      .then((result) => {
        console.log(result.text);
        event.target.reset()
        alert("Your has been send successfully");
      }, (error) => {
        console.log(error.text);
      });

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
                  <Lottie style={{ width: '100%', height: '286px' }} animationData={contactLotti3} loop={true} />
                </div>
                <div className='details'>
                  <h1>Md Hasanul Karim</h1>
                  <p style={{fontWeight: '600'}}>MERN Stack Developer</p>
                  <p>I am available for any freelance work or full/part time job. I enjoy connecting with people and exchanging ideas, so please get in touch with me at my social link. Thanks for visiting me.</p> <br />
                  <p>Phone: +8801862086965</p>
                  <p>Email: hasanulkarimh@gmail.com</p> <br />
                  <span>FIND WITH ME</span>
                  <div className='button f_flex'>
                    <a href="https://www.facebook.com/hasanulkarim.hasan1/" target="_blank" rel="noopener noreferrer"><button className='btn_shadow'>
                      <i class='fab fa-facebook-f'></i>
                    </button></a>
                    <a href="https://github.com/hasanulhasan" target="_blank" rel="noreferrer"><button className='btn_shadow'>
                    <i class='fab fa-github'></i>
                  </button></a>
                  <a href="https://www.linkedin.com/in/md-hasanul-karim-49284910a/" target="_blank" rel="noreferrer"><button className='btn_shadow'>
                    <i class='fab fa-linkedin-in'></i>
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
              <form onSubmit={formSubmit} ref={form}>
                <div className='f_flex'>
                  <div className='input row'>
                    <span>YOUR NAME</span>
                    <input type='text' name='fullname' required />
                  </div>
                  <div className='input row'>
                    <span>PHONE NUMBER </span>
                    <input type='number' name='phone' />
                  </div>
                </div>
                <div className='input'>
                  <span>EMAIL </span>
                  <input type='email' name='email' required />
                </div>
                <div className='input'>
                  <span>SUBJECT </span>
                  <input type='text' name='subject' required />
                </div>
                <div className='input'>
                  <span>YOUR MESSAGE </span>
                  <textarea cols='30' rows='10' name='message' required></textarea>
                </div>
                <button className='btn_shadow'>
                  SEND MESSAGE <i className='fas fa-long-arrow-right'></i>
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
