import React from 'react'

const ServiceCard = ({cardData}) => {
  return (
    <>
    <section className="main-card--cointainer ">
    {cardData.map((curElem)=>{
      {/**const{id,serviceName}=curElem */}
        return(
            <>
            
            <div className='card-container' key={curElem.id}>
            <div className='card'>
              <div className='card-body'>
                
                <h2 className='card-title'>{curElem.serviceName}</h2>
                <span className='card-description subtle'>{curElem.description}</span>
                <div className='card-read'>Read More</div>
              </div>
              <div className='overflow'>
              <img src={curElem.image} alt="images" className='card-img-top '/>

              </div >
              <a href="#" ><button className='card-tag subtle'>USE TEMPLATE</button></a>
    
              
            </div>
          </div>
          
          </>
        )
    })
        
    }
    </section>
    </>
  )
}

export default ServiceCard
