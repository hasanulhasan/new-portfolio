import React from "react"
import logo1 from "./pic/me3.png"
import './Footer.css'

const Footer = () => {
  return (
    <>
      <footer>
        <div className='conatiner text-center top'>
          <div className='img footer'>
            <img src={logo1} alt='' />
          </div>
          <p>© 2023. All rights reserved by Md Hasanul Karim</p>
        </div>
      </footer>
    </>
  )
}

export default Footer
