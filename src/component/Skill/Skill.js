import React from 'react';
import './Skill.css'
import skill_data from './Skill_data';
const Skill = () => {
  return (
    <>
      <section className='Skill top' id='skills'>
        <div className='container'>
          <div className='heading text-center '>
            <h4>VISIT MY SKILL AND KEEP YOUR FEEDBACK</h4>
            <h1>My Skills</h1>
          </div>
        <div class="skills_section">
            <div class="skills_main">
                {
                    skill_data.map((value, index)=>
                    <div key={index} class="skill_bar btn_shadow">
                        <div class="info">
                            <p>{value.skillName}</p>
                            <p>{value.skill_percentage}</p>
                        </div>
                        <div class="bar">
                            <span class={`${(value.skillName).toLowerCase().trim()}`}></span>
                        </div>
                    </div>
                )
                }
            </div>
         </div>
        </div>
      </section>
    </>
  );
};

export default Skill;