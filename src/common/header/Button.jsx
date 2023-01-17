import React from "react";
import styles from './Button.module.css'

function Button(props){
    return(
        <button className={styles.myButton}>
            {props.name}
        </button>
    )
}

export default Button