import React from "react"
import "./Home.css"
import hero from "../pic/herono1.png"
import skill1 from "../pic/js.png"
import skill2 from "../pic/react.png"
import skill3 from "../pic/node-js.png"
import { Typewriter } from "react-simple-typewriter"

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

            <p>I'm Hasanul Karim, a simple, cheerful man passionate about learning and developing skills through hands-on experience. I'm 1.5 years experienced in web development ecosystems. I can write clean code using HTML5, CSS, JavaScript, React JS, Next JS, Node JS   and other programming languages. I can work both independently and in groups. I'm looking for a position where I can perform my expertise in programming frameworks and development to use.</p>

            <div className='hero_btn d_flex'>
              <div className='col_1'>
                <h4>FIND WITH ME</h4>
                <div className='button'>
                  <a href="https://www.facebook.com/hasanulkarim.hasan1/" target="_blank" rel="noreferrer"><button className='btn_shadow'>
                    <i class='fab fa-facebook-f'></i>
                  </button></a>
                  <a href="https://github.com/hasanulhasan" target="_blank" rel="noreferrer"><button className='btn_shadow'>
                    <i class='fab fa-github'></i>
                  </button></a>
                  <a href="https://www.linkedin.com/in/md-hasanul-karim-49284910a/" target="_blank" rel="noreferrer"><button className='btn_shadow'>
                    <i class='fab fa-linkedin-in'></i>
                  </button></a>
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
