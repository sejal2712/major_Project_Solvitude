import React, { useState } from 'react'
import "./style.css"
import cardAPI from "./cardAPI.js"
import MenuCard from "./CardUI"


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
