import React, { useEffect } from "react";
import styles from "./TeamGraph.module.css"
import scores from "../../../common/sample/scoreSample.json"
import GraphHeader from "./GraphHeader";
import {useRecoilState} from "recoil";
import {selectedYear, selectedQuarter, selectedTab} from "../../../atoms"
import GraphBody from "./GraphBody";

function TeamGraph(){

    const [selectYear, setSelectYear]=useRecoilState(selectedYear) 
    const [selectQuarter, setSelectQuarter] = useRecoilState(selectedQuarter);
    const [selectTab , setSelectTab] = useRecoilState(selectedTab)
    // useEffect(()=>{

    // },[])

    return(
        <div className={styles.graph}>
            <GraphHeader></GraphHeader>
            <GraphBody></GraphBody>
        </div>
    )
}

export default TeamGraph;