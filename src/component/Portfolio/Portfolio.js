import React from "react"
import "./Portfolio.css"
import Card from "./Card"
import Portfolio_data from "./Portfolio_data"
import RevealMotion from "../../utils/RevealMotion"
import { Link } from "react-router-dom"

const Portfolio = () => {
  return (
    <>
      <section className='Portfolio top' id='portfolio'>
        <div className='container'>
          <div className='heading text-center '>
          <RevealMotion>
            <h4>VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK</h4>

          </RevealMotion>
          <RevealMotion>
            <h1>My Portfolio</h1>
          </RevealMotion>
          </div>

          <div className='content grid'>
            {Portfolio_data.slice(0, 3).map((value, index) => {
              return <Card key={index} image={value.image} category={value.category} totalLike={value.totalLike} title={value.title} subTitle={value.subTitle} desc_one={value.desc_one} desc_two={value.desc_two} desc_three={value.desc_three} desc_four={value.desc_four} live_server={value.live_server} client={value.client} server={value.server} stacks={value.stacks} />
            })}
          </div>
         <div style={{display: "flex", justifyContent: "center", width: "full"}}>
         <Link to={'/projects'} className="button-gradient">Show more</Link>
         </div>
        </div>
      </section>
    </>
  )
}

export default Portfolio
