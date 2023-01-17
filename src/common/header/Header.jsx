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
                <Button name="로그인"></Button>
                <Button name="개인성적"></Button>
                <Button name="팀성적"></Button>
            </div>
        </header>
    )
}

export default Header;