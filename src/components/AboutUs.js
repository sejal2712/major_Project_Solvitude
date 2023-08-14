import React from 'react'
import "./AboutUs.css";
export default function AboutUs() {
  return (
    <>
        {
           <>
           
           <section id="about" className="about">
                <div className="container" data-aos="fade-up">

                    <div className="section-title">
                        <h2>ABOUT US</h2>
                    </div>

                      <div className="row content">
                          <div className="col-lg-6">
                              <p>
                                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                                  magna aliqua.
                              </p>
                              <ul>
                                  <li><i className="ri-check-double-line"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat</li>
                                  <li><i className="ri-check-double-line"></i> Duis aute irure dolor in reprehenderit in voluptate velit</li>
                                  <li><i className="ri-check-double-line"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat</li>
                              </ul>
                          </div>
                          <div className="col-lg-6 pt-4 pt-lg-0">
                              <p>
                                  Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                                  velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                  culpa qui officia deserunt mollit anim id est laborum.
                              </p>
                              <a href="#" className="btn-learn-more">Learn More</a>
                          </div>
                      </div>

                  </div>
              </section>
              
              
        <section id="why-us" className="why-us section-bg">
                      <div className="container-fluid" data-aos="fade-up">

                          <div className="row">

                              <div className="col-lg-7 d-flex flex-column justify-content-center align-items-stretch  order-2 order-lg-1">

                                  <div className="content">
                                      <h3>Why Choose Us ?? <strong>The Project Solvitude</strong></h3>
                                      <p>
                                          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit
                                      </p>
                                  </div>

                                  <div className="accordion-list">
                                      <ul>
                                          <li>
                                              <a data-bs-toggle="collapse" className="collapse" data-bs-target="#accordion-list-1"><span>01</span> Non consectetur a erat nam at lectus urna duis? <i className="bx bx-chevron-down icon-show"></i><i className="bx bx-chevron-up icon-close"></i></a>
                                              <div id="accordion-list-1" className="collapse show" data-bs-parent=".accordion-list">
                                                  <p>
                                                      Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id volutpat lacus laoreet non curabitur gravida. 
                                                  </p>
                                              </div>
                                          </li>

                                          <li>
                                              <a data-bs-toggle="collapse" data-bs-target="#accordion-list-2" className="collapsed"><span>02</span> Feugiat scelerisque varius morbi enim nunc? <i className="bx bx-chevron-down icon-show"></i><i className="bx bx-chevron-up icon-close"></i></a>
                                              <div id="accordion-list-2" className="collapse" data-bs-parent=".accordion-list">
                                                  <p>
                                                      Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Id interdum velit laoreet id donec ultrices. Fringilla phasellus faucibus scelerisque eleifend donec pretium. Est pellentesque elit ullamcorper dignissim. Mauris ultrices eros in cursus turpis massa tincidunt dui.
                                                  </p>
                                              </div>
                                          </li>

                                          <li>
                                              <a data-bs-toggle="collapse" data-bs-target="#accordion-list-3" className="collapsed"><span>03</span> Dolor sit amet consectetur adipiscing elit? <i className="bx bx-chevron-down icon-show"></i><i className="bx bx-chevron-up icon-close"></i></a>
                                              <div id="accordion-list-3" className="collapse" data-bs-parent=".accordion-list">
                                                  <p>
                                                      Eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis orci. Faucibus pulvinar elementum integer enim. Sem nulla pharetra diam sit amet nisl suscipit. Rutrum tellus pellentesque eu tincidunt. Lectus urna duis convallis convallis tellus. Urna molestie at elementum eu facilisis sed odio morbi quis
                                                  </p>
                                              </div>
                                          </li>

                                      </ul>
                                  </div>

                              </div>

                              <div className="col-lg-5 align-items-stretch order-1 order-lg-2 img" style={{backgroundImage: 'url("images/pic1.jpg")',}} data-aos="zoom-in" data-aos-delay="150">&nbsp;</div>
                          </div>

                      </div>
                  </section>
                  
                  
            </>         
        }
    </>
  )
}












