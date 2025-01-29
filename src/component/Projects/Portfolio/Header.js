import React, { useState } from "react"
import "./header.css"
import logo from "../../img/me.png"

const Header = () => {
  // fixed Header
  window.addEventListener("scroll", function () {
    const header = document.querySelector(".header")
    header.classList.toggle("active", window.scrollY > 100)
  })
  // Toogle Menu
  const [Mobile, setMobile] = useState(false)
  return (
    <>
      <header className='header'>
        <div className='container d_flex'>
          <a href="/" className='logo'>
            <img src={logo} alt='' />
          </a>

          <div className='navlink'>
            <ul className={Mobile ? "nav-links-mobile" : "link f_flex uppercase"} onClick={() => setMobile(false)}>
              {/*<ul className='link f_flex uppercase {Mobile ? "nav-links-mobile" : "nav-links"} onClick={() => setMobile(false)}'>*/}
              <li>
                <a href='/'>home</a>
              </li>
              <li>
                <a href='/'>portfolio</a>
              </li>
              <li>
                <a href='/'>Skills</a>
              </li>
              <li>
                <a href='/'>features</a>
              </li>
              <li>
                <a href='/'>resume</a>
              </li>
              <li>
                <a href='/'>review </a>
              </li>
              <li>
                <a href='/'>certification</a>
              </li>
              <li>
                <a href='/'>contact</a>
              </li>
              <li>
                <a href="Md_Hasanul_Karim_Resume.pdf" download='Md_Hasanul_Karim_Resume.pdf'><button className='home-btn'>Get Resume</button></a>
              </li>
            </ul>

            <button className='toggle' onClick={() => setMobile(!Mobile)}>
              {Mobile ? <i className='fas fa-times close home-btn'></i> : <i className='fas fa-bars open'></i>}
            </button>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header
