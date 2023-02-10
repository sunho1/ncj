import React, { useEffect, useState } from "react";
import styles from "./List.module.css";
import Score from "./Score";

import scores from "../../common/sample/scoreSample.json"

function List(){

    

    return(
        <div className={styles.naming}>
            {scores.map((a,idx)=>{
                return(
                    <>
                    <div className={styles.myDate}>
                        {idx%3==0 && a.date}
                    </div>
                    
                    <Score data={a}></Score>
                    
                    </>
                    
                )
            })}
        </div>
    )
}

export default List;