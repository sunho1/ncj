import React, { useState,useEffect } from "react";
import styles from "./MainHeader.module.css"

function MainHeader(){

    const [year , setYear] = useState(0);
    const [quarter, setQuarter] = useState(1);

    useEffect(()=>{
        setYear(2023);
        setQuarter(1);
    },[])

    return(
        <div className={styles.mainHeader}>
            {year}년도  {quarter}분기
        </div>
    )
}

export default MainHeader;