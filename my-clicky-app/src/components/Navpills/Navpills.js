import React from "react";
import "./Navpills.css";

// Bootstarp Nav-Pills to create the game progress on a wrapper:
const Navpills = props => (
    <div className="container-fluid bg-dark">
        <ul className="nav nav-pills nav-justified">
            <li><a href="/">CLICK THE "MATT" </a></li>
            <li
                className={props.message.indexOf('INCORRECT') !== -1 ? 
                    "desc-incorrect" : 
                    props.message.indexOf('CORRECT') !== -1 ?
                        "desc-correct" :
                        "desc-normal"}
            >
                {props.message}
            </li>
            <li> SCORE: <span style={{color: "yellow"}}>{props.currentScore}</span> | BEST: <span style={{color: "green"}}>{props.topScore}</span></li>
        </ul>
    </div>
);

export default Navpills;

