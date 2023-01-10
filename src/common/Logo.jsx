import React from "react";
import styles from "./Logo.module.css"

function Logo(){
    return(
        <div className={styles.logoBox}>
            <div className={styles.logo}>
                NCJ
            </div>
        </div>
    )
}

export default Logo;