import React from "react"
import "./Home.css"
import hero from "../img/herono.png"
import skill1 from "../img/js.png"
import skill2 from "../img/react.png"
import skill3 from "../img/node-js.png"
import fb from "../img/facebook.png"
import linkedIn from "../img/linkedin.png"
import github from "../img/github.png"
import { Typewriter } from "react-simple-typewriter"
import RevealMotion from "../../utils/RevealMotion"

const Home = () => {
  return (
    <>
      <section className='hero' id='home'>
        <div className='container f_flex top'>
          <div className='left top'>
            <h3>WELCOME TO MY WORLD</h3>
            <h1>
              Hi, I’m <span>Md Hasanul Karim</span>
            </h1>
            <h2>
              a
              <span>
                <Typewriter words={[" MERN Stack Developer.", " React Developer."]} loop cursor cursorStyle='|' typeSpeed={70} deleteSpeed={50} delaySpeed={1000} />
              </span>
            </h2>
            <RevealMotion>
            <p>I'm Hasanul Karim, a simple, cheerful man passionate about learning and developing skills through hands-on experience. I'm 1.5 years experienced in web development ecosystems. I can write clean code using HTML5, CSS, JavaScript, React JS, Next JS, Node JS   and other programming languages. I can work both independently and in groups. I'm looking for a position where I can perform my expertise in programming frameworks and development to use.</p>
            </RevealMotion>

            <div className='hero_btn d_flex'>
              <div className='col_1'>
                <h4>FIND WITH ME</h4>
                <div className='button'>
                  <a href="https://www.facebook.com/hasanulkarim.hasan1/" target="_blank" rel="noreferrer">
                    <button className='btn_shadow'><img src={fb} alt='' /></button></a>
                  <a href="https://github.com/hasanulhasan" target="_blank" rel="noreferrer">
                    <button className='btn_shadow'><img src={github} alt='' /></button></a>
                  <a href="https://www.linkedin.com/in/hasanulkarim/" target="_blank" rel="noreferrer">
                  <button className='btn_shadow'><img src={linkedIn} alt='' /></button></a>
                </div>
              </div>
              <div className='col_1'>
                <h4>BEST SKILL ON</h4>
                <button className='btn_shadow'>
                  <img src={skill1} alt='' />
                </button>
                <button className='btn_shadow'>
                  <img src={skill2} alt='' />
                </button>
                <button className='btn_shadow'>
                  <img src={skill3} alt='' />
                </button>
              </div>
            </div>
          </div>
          <div className='right'>
            <div className='right_img'>
              <img src={hero} alt='' />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home
