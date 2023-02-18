import React from "react";
import styles from "./Rank.module.css"

//color , value , rank
function Rank(props){

    const category=()=>{
        switch(props.rank){
            case 1:
                return(
                    <>
                        <img src="images/first.png"></img>
                        <div className={styles.textBox}>
                            <div className={[styles.color, styles.first, props.color=="red"?styles.red : (props.color=="blue"?styles.blue:styles.yellow)].join(" ")}>
                                {props.color}
                            </div>
                        </div>
                    </>
                    
                )
            case 2:
                return(
                    <>
                        <img src="images/second.png"></img>
                        <div className={styles.textBox}>
                            <div className={[styles.color, styles.second, props.color=="red"?styles.red : (props.color=="blue"?styles.blue:styles.yellow)].join(" ")}>
                                {props.color}
                            </div> 
                        </div>
                    </>
                    
                )
            case 3:
                return(
                    <>
                        <img src="images/third.png"></img>
                        <div className={styles.textBox}>
                            <div className={[styles.color, styles.third, props.color=="red"?styles.red : (props.color=="blue"?styles.blue:styles.yellow)].join(" ")}>
                                {props.color}
                            </div>
                        </div>
                    </>
                    
                )
        }
    }

    return(
        <div className={[styles.rank, props.rank==1?styles.one:(props.rank==2?styles.two:styles.three)].join(" ")}>
            {category()}
            <div className={styles.point}>
                승점 : {props.value}
            </div>
        </div>
    )
}


export default Rank;