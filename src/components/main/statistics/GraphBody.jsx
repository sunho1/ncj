import React from "react";
import styles from "./GraphBody.module.css"
import {useRecoilState} from "recoil"
import {selectedTab} from "../../../atoms"
import TotalScore from "./tab/TotalScore";
import BarGraph from "./tab/BarGraph";
import PersonalStat from "./tab/PersonalStat";

function GraphBody(){
    const [selectTab, setSelectTab]= useRecoilState(selectedTab);
    const select=()=>{
        if(selectTab==1){
            return <TotalScore></TotalScore>
        }else if(selectTab==2){
            return <BarGraph></BarGraph>
        }else if(selectTab==3){
            return <PersonalStat></PersonalStat>
        }
    }

    return(
        <div className={styles.body}>
            {select()}
        </div>
    )
}

export default GraphBody;