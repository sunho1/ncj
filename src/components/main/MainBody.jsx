import React from "react";
import styles from './MainBody.module.css';
import TeamGraph from "./TeamGraph";
import List from "./List";

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