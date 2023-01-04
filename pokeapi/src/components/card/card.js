import React from "react";
import "./cards.css";

const Card = ({ name, img }) => {
  return (
    <>
      <div className="cards_container">
        {img ? (
          <img className="cards_image" src={img} alt={name} />
        ) : (
          <div className="cards_noimage">Imagen no disponible</div>
        )}
        <h4 className="cards_title">{name}</h4>
      </div>
    </>
  );
};

export default Card;
