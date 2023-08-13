import React from 'react'
import "./BodySecStyles.css";
export default function BodySec() {
  return (
    <>
        {
        <section id="hero" className="d-flex align-items-center">

    <div className="container">
      <div className="row">
        <div className="col-lg-6 d-flex flex-column justify-content-center pt-4 pt-lg-0 order-2 order-lg-1" data-aos="fade-up" data-aos-delay="200">
          <h1>Better Solutions For Your Business</h1>
          <h2>Project Solvitude</h2>
          <div className="d-flex justify-content-center justify-content-lg-start">
            <a href="#about" className="btn-get-started scrollto">Get Started</a>
            
          </div>
        </div>
        <div className="col-lg-6 order-1 order-lg-2 hero-img" data-aos="zoom-in" data-aos-delay="200">
          <img src="images/pic1.jpg" className="img-fluid animated" alt="some imggg" />
          
        </div>
      </div>
    </div>

  </section>
        
        
        }
    </>
  )
}
