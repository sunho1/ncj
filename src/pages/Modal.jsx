import React from "react";
import styles from "./Modal.module.css"
import SeasonBox from "../common/modal/SeasonBox"
import { useRecoilState } from "recoil";
import {modalType} from "../atoms"


function ModalPage(){
    const [mType,setMType] = useRecoilState(modalType)
    const modal = ()=>{
        switch(mType){
            case 1: return <SeasonBox/>
        }
    }

    return(
        <div className={styles.modalMain}>
            {modal()}
        </div>
    )
}

export default ModalPage;