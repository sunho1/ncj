import React, { useState,useEffect } from "react";
import { useRecoilState  } from "recoil";
import { modalOpen, modalType } from "../../atoms";
import styles from "./MainHeader.module.css"

function MainHeader(){
    const [mOpen, setMOpen] = useRecoilState(modalOpen)
    const [mType, setMType] = useRecoilState(modalType)
    const [year , setYear] = useState(0);
    const [quarter, setQuarter] = useState(1);

    useEffect(()=>{
        setYear(2023);
        setQuarter(1);
    },[])

    return(
        <div className={styles.mainHeader}>
            {year}년도  {quarter}분기
            <div className={styles.changeBtn} 
                onClick={()=>{
                    setMOpen(true)
                    setMType(1)
                }}>연도 바꾸기</div>
        </div>
    )
}

export default MainHeader;