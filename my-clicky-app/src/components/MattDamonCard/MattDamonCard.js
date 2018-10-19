import React from "react";
import "./MattDamonCard.css";

const MattDamonCard = props => (
  <div className="card">
    <div className="img-container">
      <img
        onClick={() => props.selectMattDamon(props.role)}
        className={
          props.currentScore === 0
            ? "style_prevu_kit style_prevu_kit_ex"
            : "style_prevu_kit"
        }
        alt={props.role}
        src={props.image}
      />
    </div>
  </div>
);

export default MattDamonCard;
