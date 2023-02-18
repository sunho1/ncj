import React, { useEffect, useState } from "react";
import styles from "./TotalScore.module.css"
import {useRecoilState} from "recoil"
import {scoreList, redPoint, bluePoint, yellowPoint} from "../../../../atoms"
import Rank from "./Rank"

function TotalScore(){

    const [list,setList]=useRecoilState(scoreList);
    const [red,setRed]=useRecoilState(redPoint)
    const [blue,setBlue]=useRecoilState(bluePoint)
    const [yellow,setYellow]=useRecoilState(yellowPoint)
    let tempArr = [
        [red,"red",0],[blue,"blue",0],[yellow,"yellow",0]
    ]

    const [arr,setArr]=useState([])

    useEffect(()=>{
        for(let i=0;i<2;i++){
            for(let j=i+1;j<3;j++){
                if(tempArr[i][0] < tempArr[j][0]){
                    
                    let temp=tempArr[i]
                    tempArr[i]=tempArr[j]
                    tempArr[j]=temp
                    
                }
            }
        }

        //r은 순위
        let r=1;
        tempArr[0][2]=r;
        for(let i=1;i<3;i++){
            if(tempArr[i-1][0]>tempArr[i][0]){
                r+=1;
            }
            tempArr[i][2]=r;
        }
        
        setArr(tempArr)
    },[,red])

    return(
        <div className={styles.totalScore}>
            {arr.map((t)=>{
                return(
                    //color : 팀컬러    / value : 승점    / rank : 순위
                    <Rank color={t[1]} value={t[0]} rank={t[2]}></Rank>
                )
            })}
        </div>
    )
}

export default TotalScore;