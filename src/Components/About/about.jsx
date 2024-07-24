import React from 'react'
import "./about.css"
import ME from "../../assets/me-about.png"

import { FaAward } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";
import { FaFolderOpen } from "react-icons/fa";






const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know </h5>
      <h2>About Me</h2>
      <br/><br/><br/><br/>

      <div className="container about__container">
        <div className="about__me" id='about__me'>
          <div className="about__me-img" id='about__me-img'>
            <img src={ME} alt="About image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaUsers className='about__icon' />
              <h5>Clients</h5>
              <small>2+ Clients</small>
            </article>

            <article className='about__card'>
              <FaAward className='about__icon' />
              <h5>Experience</h5>
              <small>2+ years</small>
            </article>

            <article className='about__card'>
              <FaFolderOpen className='about__icon' />
              <h5> Website Projects</h5>
              <small>3+ </small>
            </article>
          </div>

          <p>I am Themba Mthimunye, a graduate of Information Technology (Industrial Intelligence Systems) at the Tshwane Univesity of Technology.
            I bring a wealth of experience to any team. With a proven track record of delivering quality results, I am confident that I can contribute
            to the success of your company. My language skills are also an advantage in today's global marketplace, allowing me to communicate effectively
            with clients and colleagues from around the world. Whether working independently or as part of a team, I am committed to delivering exceptional
            work that exceeds your expectations. I am confident that with my dedication and experience.
            I am also highly adaptable and can easily adjust to new environments and situations. My strong analytical skills allow me to recognize problems and
            find effective solutions. I am also proficient in various computer programs and software that enable me to work efficiently and effectively.
            Furthermore, I am a fast learner and always eager to acquire new knowledge and skills. I am convinced that with my passion for excellence,
            I can make an important contribution to the growth and success of your company.
          </p>

          <a href="#contact" className='btn btn-primary'>let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About
