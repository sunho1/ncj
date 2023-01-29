import React from "react";
import styles from "./SeasonBox.module.css";
import { useRecoilState } from "recoil";
import {modalOpen} from "../../atoms"


function Season(){

    const [mOpen, setMOpen] = useRecoilState(modalOpen)

    const setting=()=>{

    }

    const cancel=()=>{
        setMOpen(false)
    }

    return(
        <div className={styles.seasonBox}>
            <div className={styles.nameLine}>날짜 설정</div>
            <div className={styles.dateBoxList}>
                <select id="year">
                    <option value="2023">2023</option>
                </select>
                <select id="quarter">
                    <option value="1">1분기</option>
                </select>
            </div>
            <div className={styles.btnList}>
                <button className={styles.btn} onClick={()=>setting()}>적용</button>
                <button className={styles.btn} onClick={()=>cancel()}>취소</button>
            </div>
        </div>
    )
}

export default Season;