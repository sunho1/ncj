import React from "react";
import styles from "./ScoreNumber.module.css";

function ScoreNumber(props){



    return(
        <div className={[styles.scores, props.color== "R"? styles.red : (props.color=="B"? styles.blue: styles.yellow)].join(" ")}>
            {props.number}
        </div>
    )
}

export default ScoreNumber;