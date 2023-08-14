import React from 'react'
import "./Contact.css";
export default function Contact() {
  return (
    <>
        
                
<section id="contact" className="contact">
  <div className="container" data-aos="fade-up">

    <div className="section-title">
      <h2>Contact</h2>
    </div>

    <div className="row">

      <div className="col-lg-5 d-flex align-items-stretch">
        <div className="info">
          <div className="address">
            <i className="bi bi-geo-alt"></i>
            <h4>Location:</h4>
            <p>Indore</p>
          </div>

          <div className="email">
            <i className="bi bi-envelope"></i>
            <h4>Email:</h4>
            <p>something@example.com</p>
          </div>

          <div className="phone">
            <i className="bi bi-phone"></i>
            <h4>Call:</h4>
            <p>+91 0000000000</p>
          </div>

          <iframe src="https://www.google.com/maps/embed?p=!1m14!1m8!1m3!1d12097.433213460943!2d-74.0062269!3d40.7101282!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb89d1fe6bc499443!2sDowntown+Conference+Center!5e0!3m2!1smk!2sbg!4v1539943755621" frameborder="0" style={{border:'0', width: '100%', height: '290px',}} allowfullscreen></iframe>
        </div>

      </div>

      <div className="col-lg-7 mt-5 mt-lg-0 d-flex align-items-stretch">
        <form action="" method="post" role="form" className="email-form">
          <div className="row">
            <div className="form-group col-md-6">
              <label for="name">Your Name</label>
              <input type="text" name="name" className="form-control" id="name" required />
            </div>
            <div className="form-group col-md-6">
              <label for="name">Your Email</label>
              <input type="email" className="form-control" name="email" id="email" required />
            </div>
          </div>
          <div className="form-group">
            <label for="name">Subject</label>
            <input type="text" className="form-control" name="subject" id="subject" required />
          </div>
          <div className="form-group">
            <label for="name">Message</label>
            <textarea className="form-control" name="message" rows="10" required></textarea>
          </div>
          <div className="my-3">
            <div className="loading">Loading</div>
            <div className="error-message"></div>
            <div className="sent-message">Your message has been sent. Thank you!</div>
          </div>
          <div className="text-center"><button type="submit">Send Message</button></div>
        </form>
      </div>

    </div>

  </div>
</section>



<footer id="footer" >

<div className="footer-top" >
  <div className="container" >
    <div className="row" >

      <div className="col-lg-3 col-md-6 footer-contact">
        <h3>Solvitude</h3>
        <p>
          Indore <br />
          India (IND)<br />
          <br /><br />
          <strong>Phone:</strong> +91 0000000000<br />
          <strong>Email:</strong> something@example.com<br />
        </p>
      </div>

      <div className="col-lg-3 col-md-6 footer-links">
        <h4>Useful Links</h4>
        <ul>
          <li><i className="bx bx-chevron-right"></i> <a href="#hero">Home</a></li>
          <li><i className="bx bx-chevron-right"></i> <a href="#about">About us</a></li>
          <li><i className="bx bx-chevron-right"></i> <a href="#">Services</a></li>
          
        </ul>
      </div>

      <div className="col-lg-3 col-md-6 footer-links">
        <h4>Our Services</h4>
        <ul>
          <li><i className="bx bx-chevron-right"></i> <a href="#">Web Hosting</a></li>
          <li><i className="bx bx-chevron-right"></i> <a href="#">Cloud Storage</a></li>
          <li><i className="bx bx-chevron-right"></i> <a href="#">Database Management</a></li>
          <li><i className="bx bx-chevron-right"></i> <a href="#">Many More..</a></li>
        </ul>
      </div>


</div>
</div>
</div>
<div className="container footer-bottom clearfix">
  <div className="copyright">
    &copy; Copyright <strong><span>Project Solvitude</span></strong>.
  </div>
  <div className="credits">
    
    Designed by <a href="#hero">Us</a>
  </div>
</div>
</footer>

           
    </>
  )
}





















