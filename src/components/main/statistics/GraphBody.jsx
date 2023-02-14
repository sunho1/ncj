import React from "react";
import styles from "./GraphBody.module.css"
import {useRecoilState} from "recoil"
import {selectedTab} from "../../../atoms"
import TotalScore from "./tab/TotalScore";

function GraphBody(){
    const [selectTab, setSelectTab]= useRecoilState(selectedTab);
    const select=()=>{
        if(selectTab==1){
            return <TotalScore></TotalScore>
        }else if(selectTab==2){
            
        }else if(selectTab==3){

        }
    }

    return(
        <div className={styles.body}>
            {select()}
        </div>
    )
}

export default GraphBody;