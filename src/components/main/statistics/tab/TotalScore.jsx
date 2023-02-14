import React, { useEffect, useState } from "react";
import styles from "./TotalScore.module.css"
import {useRecoilState} from "recoil"
import {scoreList, redPoint, bluePoint, yellowPoint} from "../../../../atoms"

function TotalScore(){

    const [list,setList]=useRecoilState(scoreList);
    const [red,setRed]=useRecoilState(redPoint)
    const [blue,setBlue]=useRecoilState(bluePoint)
    const [yellow,setYellow]=useRecoilState(yellowPoint)
    // const [redScore,setRed]=useState(0);
    // const [blueScore,setBlue]=useState(0);
    // const [yellowScore,setYellow]=useState(0);

    // useEffect(()=>{
    //     rank();
    // },[])

    // const rank=()=>{
    //     list.map((a,idx)=>{
    //         if(a.first_score > a.second_score){
    //             color(a.first_team,3);
    //         }else if(a.first_score < a.second_score){
    //             color(a.second_team,3);
    //         }else{
    //             color(a.first_team,1);
    //             color(a.second_team,1);
    //         }
    //     })
    //     console.log("-----------------")
    // }

    // const color=(name, point)=>{
        
    //     if(name=="R"){
    //         const plus1=redScore+point;
    //         console.log("red : "+plus1)
    //         // console.log(`레드승 : ${plus1}`)
    //         setRed(redScore+point);
    //     }else if(name=="B"){
    //         const plus2=blueScore+point;
    //         console.log("blue : "+plus2)
    //         // console.log(`블루승 : ${plus2}`)
    //         setBlue(blueScore+point)
    //     }else{
    //         const plus3=yellowScore+point;
    //         // console.log(`옐로승 : ${plus3}`)
    //         console.log("yellow : "+plus3)
    //         setYellow(yellowScore+point)
    //     }
    // }

    return(
        <div className={styles.totalScore}>
            레드팀 : {red}   /    블루팀 : {blue}    /   옐로우팀: {yellow}
        </div>
    )
}

export default TotalScore;