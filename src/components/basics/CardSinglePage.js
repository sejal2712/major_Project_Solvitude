import React from 'react';
import { useLocation,useNavigate } from 'react-router-dom';
import './CardSinglePage.css'; // Import the CSS file

const CardSinglePage = () => {
  const location = useLocation();
  const navigate=useNavigate();


  //to access data from ServiceCardUi
  const selectedCard = location.state?.selectedCard;

  if (!selectedCard) {
    return <div>Card not found</div>;
  }

  return (
    <div className="Card-single-page">
      <div className="Card-container">
        <h1 className="Card-title">{selectedCard.serviceName}</h1>
        <img src={selectedCard.image2} alt={selectedCard.serviceName} className="Card-image" />
        <p className="Card-description">{selectedCard.more_description}</p>
        <button className='back_btn' onClick={()=>navigate('/')}>Back</button>
      </div>
    </div>
  );
};

export default CardSinglePage;
