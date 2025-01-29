import React from 'react'
import Header from '../../component/Head/Header'
import Features from "../../component/Features/Features"
import Home from "../../component/Hero/Home"
import Portfolio from "../../component/Portfolio/Portfolio"
import Resume from "../../component/Resume/Resume"
import Testimonial from "../../component/Testimonial/Testimonial"
import Blog from "../../component/Blog/Blog"
import Contact from "../../component/Contact/Contact"
import Footer from "../../component/Footer"
import Skill from '../../component/Skill/Skill'
export default function MainHome() {
  return (
    <>
      <Header />
      <Home />
      <Portfolio />
      <Skill/>
      <Features />
      <Resume />
      <Testimonial />
      <Blog />
      <Contact />
      <Footer />
    </>
  )
}
