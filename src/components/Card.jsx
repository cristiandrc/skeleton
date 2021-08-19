import React from "react";
import "../style/card.css";
const Card = ({ name, status, image }) => {
  return (
    <>
      <div className="character_container">
        <img className="character_image" src={image} alt="name" />
        <h3 className="character_name">{name}</h3>
      </div>
    </>
  );
};

export default Card;
