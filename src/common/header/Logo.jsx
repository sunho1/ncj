import React from "react";
import styles from "./Logo.module.css"
function Logo(props){
    return(
        <div className={styles.logoBox} onClick={()=>props.changePage()}>
            NCJ
        </div>
    )
}

export default Logo;