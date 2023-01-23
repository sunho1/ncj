import {React,useState} from "react";
import Logo from "../header/Logo"
import styles from "./Header.module.css"
import Button from "./Button"
import { useRecoilState } from "recoil";
import {pageIdx} from "../../atoms"

function Header(prop){
    const [page,SetPage] = useRecoilState(pageIdx);
    // const [pageIdx,SetPageIdx]=useState(1)

    const changeIdx=(props)=>{
        SetPage(props)
    }


    return(
        <header className={styles.header}>
            <Logo changePage={()=>prop.changePage()}></Logo>
            <div className={styles.buttonBox}>
                <Button name="로그인"
                    change={()=>changeIdx(1)}
                 ></Button>
                <Button name="개인성적"
                    change={()=>changeIdx(2)}
                ></Button>
                <Button name="팀성적"
                    change={()=>changeIdx(3)}
                ></Button>
            </div>
        </header>
    )
}

export default Header;