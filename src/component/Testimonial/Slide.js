import React from "react";
import TestimonialApi from "./TestimonialApi";
import { LuQuote } from "react-icons/lu";

const Slide = ({
  id,
  image,
  design,
  name,
  offcer,
  post,
  date,
  desc,
  valueIndex,
  index,
}) => {
  let position = "nextSlide";
  if (valueIndex === index) {
    position = "activeSlide";
  }
  if (
    valueIndex === index - 1 ||
    (index === 0 && valueIndex === TestimonialApi.length - 1)
  ) {
    position = "lastSlide";
  }

  return (
    <>
      <article className={`d_flex ${position}`} key={id}>
        {/*<div className='box d_flex' className={position} key={id}>*/}
        <div className="left box_shodow">
          <div className="img">
            <img
              style={{height: '260px', width: '260px'}}
              src={image}
              alt={name}
            />
          </div>
          <div className="details mtop">
            <h2>{name}</h2>
            <label>{offcer}</label>
            <span className="primary_color" style={{display: "block", marginTop: 2}}>{design}</span>
          </div>
        </div>

        <div className="right">
          <div className="icon">
            <div className="quote">
              <i className="fal ">
                <LuQuote />
              </i>
            </div>
          </div>

          <div className="content box_shodow" style={{marginTop: "15px"}}>
            {/* <h1>{post}</h1> */}
            {/* <h3>{date}</h3> */}
            <p>{desc}</p>
          </div>
        </div>
      </article>

      {/*
	    <img src='https://rainbowit.net/html/inbio/assets/images/testimonial/final-home--4th.png' alt='' />
        <span className='primary_color'>NCD - DESIGN</span>
        <h2>Mevine Thoda</h2>
        <label>Marketing Officer</label>
        
        <i class='fal fa-quote-right'></i>
        <i class='fas fa-arrow-left'></i>
        <i class='fas fa-arrow-right'></i>
        <h1>CEO - Marketing</h1>
        <h3>Thoda Department - Mar 4, 2018 - Aug 30, 2021</h3>
        <p>Marcent Of Vanice and treatment. Ut tincidunt est ac dolor aliquam sodales. Phasellus sed mauris hendrerit, laoreet sem in, lobortis mauris hendrerit ante. Ut tincidunt est ac dolor aliquam sodales phasellus smauris</p>
     */}
    </>
  );
};

export default Slide;
