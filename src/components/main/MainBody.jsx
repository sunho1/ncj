import React from "react";
import styles from './MainBody.module.css';
import TeamGraph from "./statistics/TeamGraph";
import List from "./scores/List";

function MainBody(){
    return(
        <div className={styles.body}>
            <TeamGraph></TeamGraph>
            <List></List>
            <div className={styles.naming}></div>
        </div>
    )
}

export default MainBody;