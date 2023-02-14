import React from "react";
import styles from "./Score.module.css";
import TextBox from "./TextBox";
import ScoreBox from "./ScoreBox";

function Score(props){
    return(
        <div className={styles.scoreBox}>
            <div className={styles.scoreName}>
                <TextBox data={props.data.first_team}></TextBox>
                <div className={styles.vs}>
                    vs
                </div>
                <TextBox data={props.data.second_team}></TextBox>
            </div>
            <ScoreBox data={props.data}></ScoreBox>
        </div>
    )
}

export default Score;