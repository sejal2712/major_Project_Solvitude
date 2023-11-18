import React, { useState } from 'react';
import "./ServiceStyle.css";
import cardAPI from "./ServiceCardAPI.js";
import ServiceCardUI from "./ServiceCardUI";
import NavServices from './NavServices';

const uniqueService = [...new Set(cardAPI.map((curEle) => {
  return curEle.category;
})), "All"];

const ServiceCard = () => {
  const [cardData, setCardData] = useState(cardAPI);
  const [serviceList, setServiceList] = useState(uniqueService);

  const filterService = (category) => {
    if (category === "All") {
      return setCardData(cardAPI);
    }
    const updatedService = cardAPI.filter((curEle) => {
      return curEle.category === category;
    });
    setCardData(updatedService);
  };

  const handleDeployClick = () => {
    // Replace the placeholders with your actual CloudFormation console URL
    const cloudFormationConsoleURL = "https://eu-north-1.console.aws.amazon.com/cloudformation/home?region=eu-north-1";
    window.open(cloudFormationConsoleURL, '_blank');
  };

  return (
    <>
      <section id="services"> 
        <h1 style={{ textAlign: "center" }}><b>OUR SERVICES</b></h1>
        <NavServices filterService={filterService} serviceList={serviceList} />

        <div style={{ background: "linear-gradient(#17cf97, #1b2430)", marginTop: "0px" }}>
          <ServiceCardUI cardData={cardData} />
        </div>
        <br/>
        <br/>
        <h1 style={{ textAlign: "center" }}><b>Deployment Solutions for Your Success</b></h1>
        <div className="maindiv">
          <div className="dpcontainer">
            <div className="image-container">
              <img  className='dpimg'  src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1150px-React-icon.svg.png" alt="Image Alt Text"/>
            </div>
            <div className="content-container">
              <h2 className='dphead'>ReactJS</h2>
              <p>
                React.js is a JavaScript library for building user interfaces.
                It enables the creation of reusable UI components for efficient development.
              </p>
              <button className="deploybtn" onClick={() => handleDeployClick()}>Click to deploy &rarr;</button>
            </div>
          </div>
          <div className="dpcontainer">
            <div className="image-container">
              <img className='dpimg' src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/2560px-Node.js_logo.svg.png" alt="Image Alt Text"/>
            </div>
            <div className="content-container">
              <h2 className='dphead'>NodeJS</h2>
              <p className='dppara'>
                Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine.
                It allows you to build scalable network applications easily.
              </p>
              <button className="deploybtn" onClick={() => handleDeployClick()}>Click to deploy &rarr;</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServiceCard;
