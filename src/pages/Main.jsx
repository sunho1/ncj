import React from "react";
import styles from "./Main.module.css"
import MainHeader from "../components/main/MainHeader";

function MainPage(){

    return(
        <div className={styles.main}>
            <MainHeader></MainHeader>
        </div>
    )
    
}

export default MainPage;