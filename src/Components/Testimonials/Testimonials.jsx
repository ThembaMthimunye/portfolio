import React from 'react'
import "./Testimonials.css"
import AVAR1 from "../../assets/avatar1.jpg"
import AVAR2 from "../../assets/avatar2.jpg"
import AVAR3 from "../../assets/avatar3.jpg"
import AVAR4 from "../../assets/avatar4.jpg"


const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review From Clients</h5>
      <h2>Testimonials</h2>
          <br/><br/><br/><br/>
      <div className="container testimonials_container">
        <article className='testimonial'>
          <div className="client_avatar">
            <img src={AVAR1} alt="" />
          </div>
          <div>
            <h5 className='clients_name'>Piyush Mani</h5>
            <small className='client_review'>Reviews and comments</small>
            <p>I have had the pleasure of working with Themba and I must say, he is a fantastic employee. His dedication and hard work have been 
              evident in every project he has been a part of. But what truly sets him apart is his proficiency in software. His knowledge and skills
               in this field are truly impressive. He has been a valuable asset to our team and has contributed greatly to the success of our projects. 
               I highly recommend Themba for any software-related tasks, as I am confident he will exceed expectations and deliver exceptional results.
                Thank you, Themba, for your outstanding work and for being an invaluable member of our team. Keep up the great work!</p>
          </div>
        </article>

        <article className='testimonial'>
          <div className="client_avatar">
            <img src={AVAR2} alt="" />
          </div>
          <div>
            <h5 className='clients_name'>Jewel Lamba</h5>
            <small className='client_review'>Reviews and comments</small>
            <p>
            I recently had the pleasure of working with Themba from technical support and I must say,
             I was thoroughly impressed. Not only was he extremely knowledgeable and efficient in resolving 
             my technical issue, but he was also incredibly good with customers. He patiently listened to my
              concerns and provided clear and concise solutions. His friendly and approachable demeanor made 
              the entire experience much more pleasant. I highly recommend Themba for any technical support needs.
               Thank you for your exceptional service!</p>
          </div>
        </article>

        <article className='testimonial'>
          <div className="client_avatar">
            <img src={AVAR3} alt="" />
          </div>
          <div>
            <h5 className='clients_name'>Lebohang Tladi</h5>
            <small className='client_review'>Reviews and comments</small>
            <p>
            I recently had the pleasure of working with Themba from technical support and I must say, I was thoroughly 
            impressed. Not only was he efficient in resolving my issue, but he also showed genuine care and concern for
             my problem. His professionalism and knowledge were evident throughout our interaction, and he went above and 
             beyond to ensure that my issue was resolved to my satisfaction. I truly appreciate his dedication and commitment
              to providing excellent customer service. I highly recommend Themba for any technical support needs. Thank you, 
              Themba, for your outstanding service!</p>
          </div>
        </article>

        <article className='testimonial'>
          <div className="client_avatar">
            <img src={AVAR4} alt="" />
          </div>
          <div>
            <h5 className='clients_name'>Lewis Jamal</h5>
            <small className='client_review'>Reviews and comments</small>
            <p>I have had the pleasure of being a student of Themba's for the past year and I can confidently say that he
               is an exceptional teacher and trainer. His passion for teaching and training is evident in every class and
                session. His knowledge and expertise in his field are truly impressive and he has a unique way of making
                 complex concepts easy to understand. What sets Themba apart is his ability to connect with his students 
                 and create a positive learning environment. He is patient, approachable, and always willing to go the extra
                  mile to ensure that his students understand the material.</p>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Testimonials
