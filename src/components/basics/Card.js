import React, { useState } from 'react'
import "./ServiceStyle.css"
import cardAPI from "./ServiceCardAPI.js"
import MenuCard from "./ServiceCardUI.js"


const Restaurant = () => {
  const [cardData,setcardData]=useState(cardAPI);
  
  

  return (
    <>
     <h1 style={{textAlign:"center",margin:"30px", fontFamily:"sans-serif", fontWeight:"bold"}}>OUR SERVICES</h1>
     <div style={{background:"#17cf97"}}>
     <MenuCard cardData={cardData}/>

     </div>
    </>
  )
}



export default Restaurant
