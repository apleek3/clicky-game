import React from "react";
import "./MattDamonCard.css";


//creates the card of Matt Damon. Wraps everything in a nice Div. Nice idea from classmate to change css styles using current score property
const MattDamonCard = props => (
  <div className="card">
    <div className="img-container">
      <img
        onClick={() => props.selectMattDamon(props.name)}
        className={
          props.currentScore === 0
            ? "style_prevu_kit style_prevu_kit_ex"
            : "style_prevu_kit"
        }
        alt={props.name}
        src={props.image}
        key={props.id}
      />
    </div>
  </div>
);

export default MattDamonCard;
