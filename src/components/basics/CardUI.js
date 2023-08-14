import React from 'react'

const MenuCard = ({cardData}) => {
  return (
    <>
    <section className="main-card--cointainer ">
    {cardData.map((curElem)=>{
        return(
            <>
            
            <div className='card-container' key={curElem.id}>
            <div className='card'>
              <div className='card-body'>
                
                <h2 className='card-title'>{curElem.serviceName}</h2>
                <span className='card-description subtle'>{curElem.description}</span>
                <div className='card-read'>Read</div>
              </div>
              <div className='overflow'>
              <img src={curElem.image} alt="images" className='card-img-top '/>

              </div>
    
              <a href="#" className='card-tag subtle'>USE TEMPLATE</a>
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

export default MenuCard
