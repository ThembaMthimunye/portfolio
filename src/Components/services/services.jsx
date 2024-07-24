import React from 'react'
import "./services.css"
import { MdOutlineCheckBox } from "react-icons/md";

const Services = () => {
  return (
    <section id='services'>
        <h5>What I Offer</h5>
        <h2>Services</h2>
        <br/><br/><br/><br/>

        <div className="container services_container">
          <article className='service'>
            <div className="service_head">
              <h3>UI/UX</h3>
            </div>

            <ul className='service_list'>
              <li>
              <MdOutlineCheckBox className='service_list-icon'/>
              <p>Creating wireframes and prototypes</p>
              </li>

              <li>
              <MdOutlineCheckBox className='service_list-icon'/>
              <p>Creating user personas</p>
              </li>

              <li>
              <MdOutlineCheckBox className='service_list-icon'/>
              <p>Make unique graphic designs</p>
              </li>

              <li>
              <MdOutlineCheckBox className='service_list-icon'/>
              <p>Make unique graphic designs</p>
              </li>

              <li>
              <MdOutlineCheckBox className='service_list-icon'/>
              <p>Presenting designs to stakeholders</p>
              </li>

              <li>
              <MdOutlineCheckBox className='service_list-icon'/>
              <p>Usability testing</p>
              </li>


              <li>
              <MdOutlineCheckBox className='service_list-icon'/>
              <p>User researcher</p>
              </li>

            </ul>
          </article>

          <article className='service'>
            <div className="service_head">
              <h3>Web Development</h3>
            </div>

            <ul className='service_list'>
              <li>
              <MdOutlineCheckBox className='service_list-icon'/>
              <p>Building and maintaining websites</p>
              </li>

              <li>
              <MdOutlineCheckBox className='service_list-icon'/>
              <p>Collaborate with ux/ui designers</p>
              </li>

              <li>
              <MdOutlineCheckBox className='service_list-icon'/>
              <p>Maintain and update websites</p>
              </li>

              <li>
              <MdOutlineCheckBox className='service_list-icon'/>
              <p>Utilizing web applications and programming languages</p>
              </li>

              <li>
              <MdOutlineCheckBox className='service_list-icon'/>
              <p>Optimize performance</p>
              </li>

              <li>
              <MdOutlineCheckBox className='service_list-icon'/>
              <p>Integrating multimedia content onto a site</p>
              </li>


              <li>
              <MdOutlineCheckBox className='service_list-icon'/>
              <p>Security measures</p>
              </li>

            </ul>
          </article>

          <article className='service'>
            <div className="service_head">
              <h3>Technical / Field Support</h3>
            </div>

            <ul className='service_list'>
              <li>
              <MdOutlineCheckBox className='service_list-icon'/>
              <p>Following company procedures and protocols</p>
              </li>

              <li>
              <MdOutlineCheckBox className='service_list-icon'/>
              <p>Building good customer relationships</p>
              </li>

              <li>
              <MdOutlineCheckBox className='service_list-icon'/>
              <p>Troubleshooting</p>
              </li>

              <li>
              <MdOutlineCheckBox className='service_list-icon'/>
              <p>Assist with tech support</p>
              </li>

              <li>
              <MdOutlineCheckBox className='service_list-icon'/>
              <p>Discuss and analyze test results</p>
              </li>

              <li>
              <MdOutlineCheckBox className='service_list-icon'/>
              <p>Document processes</p>
              </li>


              <li>
              <MdOutlineCheckBox className='service_list-icon'/>
              <p>Collaborate with technical specialists when necessary</p>
              </li>

            </ul>
          </article>
        </div>
    </section>
  )
}

export default Services
