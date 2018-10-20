import React from "react";
import "./Navpills.css";

// Bootstarp Nav-Pills to create the game progress on a wrapper:
const Navpills = props => (
    <div>
        <ul className="nav nav-pills nav-justified">
            <li><a href="/">Matt Damon Clicky Game</a></li>
            <li
                className={props.message.indexOf('incorrectly') !== -1 ? 
                    "desc-incorrect" : 
                    props.message.indexOf('correctly') !== -1 ?
                        "desc-correct" :
                        "desc-normal"}
            >
                {props.message}
            </li>
            <li>Score: <span style={{color: "yellow"}}>{props.currentScore}</span> | Best Score: {props.topScore}</li>
        </ul>
    </div>
);

export default Navpills;

