import React from "react";
import styles from "./ScoreBox.module.css"
import ScoreNumber from "./ScoreNumber";

function ScoreBox(props){
    return(
        <div className={styles.score}>
            <ScoreNumber color={props.data.first_team} number={props.data.first_score}></ScoreNumber>
            <div className={styles.vs}>
                vs
            </div>
            <ScoreNumber color={props.data.second_team} number={props.data.second_score}></ScoreNumber>
        </div>
    )
}

export default ScoreBox;
