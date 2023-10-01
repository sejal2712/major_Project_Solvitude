import React from 'react';
import { useLocation } from 'react-router-dom';
import './CardSinglePage.css'; // Import the CSS file

const CardSinglePage = () => {
  const location = useLocation();
  const selectedCard = location.state?.selectedCard;

  if (!selectedCard) {
    return <div>Card not found</div>;
  }

  return (
    <div className="Card-single-page">
      <div className="Card-container">
        <h1 className="Card-title">{selectedCard.serviceName}</h1>
        <img src={selectedCard.image} alt={selectedCard.serviceName} className="Card-image" />
        <p className="Card-description">{selectedCard.more_description}</p>
      </div>
    </div>
  );
};

export default CardSinglePage;
