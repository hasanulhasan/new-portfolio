import React from "react"
import "./Features.css"
import data from "./Features-Api"
import Card from "./Card"
import RevealMotion from "../../utils/RevealMotion"

const Features = () => {
  return (
    <>
      <section className='features top' id='features'>
        <div className='container'>
          <div className='heading'>
            <RevealMotion>
            <h4>Features</h4>
            <h1>What I Do</h1>
            </RevealMotion>
          </div>

          <div className='content grid'>
            {data.map((val, index) => {
              return <Card key={index} image={val.image} title={val.title} desc={val.desc} />
            })}
          </div>
        </div>
      </section>
    </>
  )
}

export default Features
