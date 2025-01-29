import React from "react"
import "../Portfolio/Portfolio.css"
import "../Blog/Blog.css"
import Card from "./Card"
import BlogApi from "./BlogApi"
import RevealMotion from "../../utils/RevealMotion"

const Blog = () => {
  return (
    <>
      <section className='Portfolio Blog' id='blog'>
        <div className='container top'>
          <div className='heading text-center'>
            <RevealMotion>
            <h4>EXPLORE MY ACHIEVEMENT AND KEEP YOUR FEEDBACK</h4>
            <h1>Certification</h1>
            </RevealMotion>
          </div>

          <div className='content grid'>
            {BlogApi.sort((a,b)=> a.id - b.id).map((value, index) => {
              return <Card key={index} image={value.image} institute={value.institute} title_one={value.title_one} title_two={value.title_two} title_three={value.title_three} desc_one={value.desc_one} desc_two={value.desc_two} desc_three={value.desc_three} />
            })}
          </div>
        </div>
      </section>
    </>
  )
}

export default Blog
