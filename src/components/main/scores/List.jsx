import React, { useEffect, useState } from "react";
import styles from "./List.module.css";
import Score from "./Score";
import scores from "../../../common/sample/scoreSample.json"
import {useRecoilState} from "recoil";
import {scoreList} from "../../../atoms"


function List(){

    const [list, setList]=useRecoilState(scoreList)

    return(
        <div className={styles.naming}>
            {list.map((a,idx)=>{
                return(
                    <>
                    <div className={styles.myDate}>
                        {idx%3==0 && a.date}
                    </div>
                    
                    <Score data={a}></Score>
                    {idx%3==2 && <hr/>}
                    </>
                    
                )
            })}
            <hr />
        </div>
    )
}

export default List;