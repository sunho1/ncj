import React from "react";
import Logo from "../header/Logo"
import styles from "./Header.module.css"
import Button from "./Button"

const Seanson = ()=>{
    
}

function Header(){
    return(
        <header className={styles.header}>
            <Logo></Logo>
            <div className={styles.buttonBox}>
                <Button></Button>
                <Button></Button>
                <Button></Button>
            </div>
        </header>
    )
}

export default Header;