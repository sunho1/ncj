import React, { useEffect } from "react";
import styles from "./GraphHeader.module.css"
import {useRecoilState} from "recoil";
import {selectedYear, selectedQuarter, selectedTab} from "../../../atoms"

function GraphHeader(){
    const [selectYear, setSelectYear]=useRecoilState(selectedYear) 
    const [selectQuarter, setSelectQuarter] = useRecoilState(selectedQuarter);
    const [selectTab, setSelectTab]= useRecoilState(selectedTab)
    
    const changeSelectTab=(num)=>{
        setSelectTab(num)
    }

    return(
        <div className={styles.header}>
            <div className={[styles.tab, selectTab==1?styles.selected:styles.unselected].join(" ")}
                onClick={()=>{changeSelectTab(1)}}
            >
                순위
            </div>
            <div className={[styles.tab, selectTab==2?styles.selected:styles.unselected].join(" ")}
                onClick={()=>changeSelectTab(2)}
            >
                테스트2
            </div>
            <div className={[styles.tab, selectTab==3?styles.selected:styles.unselected].join(" ")}
                onClick={()=>changeSelectTab(3)}
            >
                테스트3
            </div>
        </div>
    )

}


export default GraphHeader;