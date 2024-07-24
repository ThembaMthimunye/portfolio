import React from 'react'
import "./experience.css"
import { BsPatchCheckFill } from "react-icons/bs";

const Experience = () => {
  return (
    <section id='experience'>
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>
      <br/><br/><br/><br/>

      <div className="container experience_container">
        <div className="experience_frotnend">
          <h3>Backend Development</h3>
          <div className="experience_content">
            <article className='experienced_details'>
              <BsPatchCheckFill className='experienced_details-icons' />
              <div>
                <h4>HTML</h4>
                <small>Experinced</small>
              </div>
            </article>

            <article className='experienced_details'>
              <BsPatchCheckFill className='experienced_details-icons'/>
              <div>
                <h4>CSS</h4>
                <small>Beginner</small>
              </div>
            </article>

            <article className='experienced_details'>
              <BsPatchCheckFill className='experienced_details-icons'/>
              <div>
                <h4>JavaScript</h4>
                <small>Beginner</small>
              </div>
            </article>

            <article className='experienced_details'>
              <BsPatchCheckFill className='experienced_details-icons'/>
              <div>
                <h4>React</h4>
                <small>Begiiner</small>
              </div>
            </article>
          </div>
        </div>


        {/* End Of Front End */}
        <div className="experience_backend">
          <h3>Backend Development</h3>
          <div className="experience_content">
            <article className='experienced_details'>
              <BsPatchCheckFill className='experienced_details-icons'/>
              <div>
                <h4>HTML</h4>
                <small>Experinced</small>
              </div>
            </article>

            <article className='experienced_details'>
              <BsPatchCheckFill className='experienced_details-icons'/>
              <div>
                <h4>CSS</h4>
                <small>Beginner</small>
              </div>
            </article>

            <article className='experienced_details'>
              <BsPatchCheckFill className='experienced_details-icons'/>
              <div>
                <h4>JavaScript</h4>
                <small>Beginner</small>
              </div>
            </article>

            <article className='experienced_details'>
              <BsPatchCheckFill className='experienced_details-icons'/>
              <div>
                <h4>React</h4>
                <small>Begiiner</small>
              </div>
            </article>
          </div>
        </div>
      </div>


    </section>
  )
}

export default Experience
