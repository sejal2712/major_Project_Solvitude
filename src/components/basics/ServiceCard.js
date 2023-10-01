import React, { useState } from 'react'
import "./ServiceStyle.css"
import cardAPI from "./ServiceCardAPI.js"
import ServiceCard from "./ServiceCardUI"
import NavServices from './NavServices'
const uniqueService = [...new Set(cardAPI.map((curEle) => {
  return curEle.category;

})),
  "All",
];

const Service = () => {
  const [cardData, setcardData] = useState(cardAPI);

  const [serviceList, setServiceList] = useState(uniqueService);

  const filterService = (category) => {
    if (category === "All") {
      return setcardData(cardAPI);


    }
    const updatedService = cardAPI.filter((curEle) => {
      return curEle.category === category;
    });
    setcardData(updatedService);
  };
  



  return (
    <>
      <section id="services"> 
      <h1 style={{ textAlign:"center"}}><b>OUR SERVICES</b></h1>
      <NavServices filterService={filterService} serviceList={serviceList} />
      

      
        <div style={{ background: "linear-gradient(#17cf97, #1b2430)",marginTop:"0px" }}>
          <ServiceCard cardData={cardData} />

        </div>

      </section>

    </>
  )
}



export default Service
