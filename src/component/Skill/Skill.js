import React from 'react';
import './Skill.css'
const Skill = () => {
  return (
    <>
      <section className='Skill top' id='skill'>
        <div className='container'>
          <div className='heading text-center '>
            <h4>VISIT MY SKILL AND KEEP YOUR FEEDBACK</h4>
            <h1>My Skills</h1>
          </div>

          <div class="skills_section">

    <div class="skills_main">
        <div class="skill_bar btn_shadow">
            <div class="info">
                <p>HTML</p>
                <p>85%</p>
            </div>
            <div class="bar">
                <span class="html"></span>
            </div>
        </div>
        <div class="skill_bar btn_shadow">
            <div class="info">
                <p>CSS</p>
                <p>80%</p>
            </div>
            <div class="bar">
                <span class="css"></span>
            </div>
        </div>
        <div class="skill_bar btn_shadow">
            <div class="info">
                <p>Tailwind CSS</p>
                <p>75%</p>
            </div>
            <div class="bar">
                <span class="sass"></span>
            </div>
        </div>
        <div class="skill_bar btn_shadow">
            <div class="info">
                <p>Java Script</p>
                <p>80%</p>
            </div>
            <div class="bar">
                <span class="js"></span>
            </div>
        </div>
        <div class="skill_bar btn_shadow">
            <div class="info">
                <p>React JS</p>
                <p>80%</p>
            </div>
            <div class="bar">
                <span class="react"></span>
            </div>
        </div>
        <div class="skill_bar btn_shadow">
            <div class="info">
                <p>Node js</p>
                <p>70%</p>
            </div>
            <div class="bar">
                <span class="node"></span>
            </div>
        </div>
        <div class="skill_bar btn_shadow">
            <div class="info">
                <p>Express js</p>
                <p>60%</p>
            </div>
            <div class="bar">
                <span class="express"></span>
            </div>
        </div>
        <div class="skill_bar btn_shadow">
            <div class="info">
                <p>Mongo DB</p>
                <p>65%</p>
            </div>
            <div class="bar">
                <span class="mongo"></span>
            </div>
        </div>
    </div>
</div>
          
        </div>
      </section>
    </>
  );
};

export default Skill;