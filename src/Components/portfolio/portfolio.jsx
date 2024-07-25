import React from 'react'
import "./portfolio.css"
import IMG1 from "../../assets/portfolio1.jpg"
import IMG2 from "../../assets/portfolio2.png"
import IMG3 from "../../assets/portfolio3.jpg"
// import IMG4 from "../../assets/portfolio4.jpg"
// import IMG5 from "../../assets/portfolio5.png"
// import IMG6 from "../../assets/portfolio6.jpg"

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5> My Recent Work</h5>
      <h2>Portfolio</h2>
      <br/><br/><br/><br/>

      <div className="container portfolio_container">
        <article className='portfolio_item'>
          <div className="portfolio_item-image">
            <img src={IMG1} alt="" />
          </div>
          <h3>Dronoticz Website</h3>
          <div className='cta'>
            <a href="http://github.com" className='btn'>Github</a>
            <a href="https://dronoticz-website.vercel.app/" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>

        <article className='portfolio_item'>
          <div className="portfolio_item-image">
            <img className='img2' src={IMG2} alt="" />
          </div>
          <h3>Personal Portfolio</h3>
          <div className='cta'>
            <a href="http://github.com" className='btn'>Github</a>
            <a href="http://github.com" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>

        <article className='portfolio_item'>
          <div className="portfolio_item-image">
            <img src={IMG3} alt="" />
          </div>
          <h3>Resturent Application</h3>
          <div className='cta'>
            <a href="http://github.com" className='btn'>Github</a>
            <a href="http://github.com" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>

        {/* <article className='portfolio_item'>
          <div className="portfolio_item-image">
            <img src={IMG4} alt="" />
          </div>
          <h3>This Is A Portfolio Item Title</h3>
          <div className='cta'>
            <a href="http://github.com" className='btn'>Github</a>
            <a href="http://github.com" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>


        <article className='portfolio_item'>
          <div className="portfolio_item-image">
            <img src={IMG5} alt="" />
          </div>
          <h3>This Is A Portfolio Item Title</h3>
          <div className='cta'>
            <a href="http://github.com" className='btn'>Github</a>
            <a href="http://github.com" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>

        <article className='portfolio_item'>
          <div className="portfolio_item-image">
            <img src={IMG6} alt="" />
          </div>
          <h3>This Is A Portfolio Item Title</h3>
          <div className='cta'>
            <a href="http://github.com" className='btn'>Github</a>
            <a href="http://github.com" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article> */}
      </div>
    </section>
  )
}

export default Portfolio
