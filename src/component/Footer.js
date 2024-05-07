import React from "react"
import logo1 from "./img/me.png"
import './Footer.css'

const Footer = () => {
  return (
    <>
      <footer>
        <div className='text-center'>
          <div className='img footer'>
            <img src={logo1} alt='' />
          </div>
          <p>All rights reserved by Md Hasanul Karim. &nbsp;© 2024</p>
        </div>
      </footer>
    </>
  )
}

export default Footer
