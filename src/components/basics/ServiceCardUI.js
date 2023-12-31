import React from 'react'
import { useNavigate } from 'react-router-dom';
import { Animate } from 'react-simple-animate'



const ServiceCardUI = ({cardData}) => {

  const navigate = useNavigate();

  const handleTemplateClick = (id) => {
    const selectedCard = cardData.find(card => card.id === id);
    if (selectedCard) {
      //to pass the data to CardSinglePage
      
      navigate(`/card/${id}`, { state: { selectedCard } });
    }
  };
  const handleReadClick = (link) => {
    // Open the external link in a new tab/window
    window.open(link, '_blank');
  };

  return (
    <>
    <section className="main-card--cointainer ">
    {cardData.map((curElem)=>{
      {/**const{id,serviceName}=curElem */}
        return(
            <>
            
            <div className='card-container' key={curElem.id}>
            <Animate
                play
                duration={1}
                delay={0.3}
                start={{
                  transform: 'translateX(-200px)'
                }}
                end={{
                  transform: 'translateX(0px)'
                }}
              >
            <div className='card'>
              <div className='card-body'>
                
                <h2 className='card-title'>{curElem.serviceName}</h2>
                <span className='card-description subtle'>{curElem.description}</span>
                <div className='card-read' onClick={() => handleReadClick(curElem.more_description_link)}>Read More</div>
              </div>
              <div className='overflow'>
              <img src={curElem.image} alt="images" className='card-img-top '/>

              </div >
              <a className='card-tag subtle' target='_blank' onClick={() => handleTemplateClick(curElem.id)}>USE TEMPLATE</a>
    
              
            </div>
            </Animate>

            
          </div>
          
          </>
        )
    })
        
    }
    </section>
    </>
  )
}

export default ServiceCardUI;

