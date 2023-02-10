import React from "react";
import styles from "./Main.module.css"
import MainHeader from "../components/main/MainHeader";
import MainBody from "../components/main/MainBody";

function MainPage(){

    return(
        <div className={styles.main}>
            <MainHeader></MainHeader>
            <MainBody></MainBody>
        </div>
    )
    
}

export default MainPage;