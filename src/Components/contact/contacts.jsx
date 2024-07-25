import React from 'react'
import "./contacts.css"
import { MdEmail } from "react-icons/md";
import { IoCall } from "react-icons/io5";
import { FaLinkedin } from "react-icons/fa";

const Contacts = () => {
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <br/><br/><br/><br/>

      <div className="container contact_container">
        <div className="contact_options">
          <article className='contact_option'>
            <MdEmail className='contact_option-icon'/>
            <h4>Email</h4>
            <h5>mthimunyethemba@outlook.com</h5>
            <a href="mailto:mthimunyethemba@outlook.com">Send Message</a>
          </article>

          <article className='contact_option'>
            <IoCall className='contact_option-icon'/>
            <h4>Phone / Call</h4>
            <h5>0786490983</h5>
            <a href="http://api.whatsappp.com/send?phone=0786490983">Send</a>
          </article>

          <article className='contact_option'>
            <FaLinkedin className='contact_option-icon'/>
            <h4>Linkedin</h4>
            <h5>mthimunyethemba@outlook.com</h5>
            <a href="mailto:mthimunyethemba@outlook.com">Linkedin Profile</a>
          </article>
        </div>

        <form action="">
          <input className='text-area' type="text" name='name' placeholder='Your Full Name' required/>
          <input className='text-area' type="text" name='email' placeholder='Your Email' required />
          <textarea className='text-area' name="message" rows='7' placeholder='Your Message' required></textarea>
          <a href="mailto:mthimunyethemba@outlook.com"><button type='submit' className='btn btn-primary' >Send Message</button></a>
        </form>
      </div>
      <br/><br/><br/><br/>
    </section>
    

  )
}

export default Contacts
