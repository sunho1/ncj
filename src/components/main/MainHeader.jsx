import React, { useState,useEffect } from "react";
import { useRecoilState  } from "recoil";
import { modalOpen, modalType, selectedYear, selectedQuarter, scoreList, teamPoints, redPoint, bluePoint, yellowPoint} from "../../atoms";
import styles from "./MainHeader.module.css"
import score from "../../common/sample/scoreSample.json"

function MainHeader(){
    const [mOpen, setMOpen] = useRecoilState(modalOpen);
    const [mType, setMType] = useRecoilState(modalType);
    const [year , setYear] = useRecoilState(selectedYear);
    const [quarter, setQuarter] = useRecoilState(selectedQuarter);
    const [list, setList]=useRecoilState(scoreList);
    const [teamPoint, setTeamPoint]=useRecoilState(teamPoints);
    const [red,setRed]=useRecoilState(redPoint);
    const [blue,setBlue]=useRecoilState(bluePoint);
    const [yellow,setYellow]=useRecoilState(yellowPoint);



    useEffect(()=>{
        setYear(2023);
        setQuarter(1);
        setList(score);
        rank();
    },[]);

    useEffect(()=>{
        // setList(score)
        rank()
    },[year, quarter]);

    const rank=()=>{
        console.log("list length입니다 : "+list.length)
        list.map((a,idx)=>{
            console.log("red : "+red)
            console.log("blue : "+blue)
            console.log("yellow : "+yellow)
            if(a.first_score > a.second_score){
                console.log(a.first_team)
                color(a.first_team,3);
            }else if(a.first_score < a.second_score){
                console.log(a.second_team)
                color(a.second_team,3);
            }else{
                color(a.first_team,1);
                color(a.second_team,1);
            }
        })
        console.log("-----------------")
    }

    const color=(name, point)=>{
        if(name=="R"){
            setRed(red+point)
        }else if(name=="B"){
            setBlue(blue+point)
        }else{
            setYellow(yellow+point)
        }
        
    }

    return(
        <div className={styles.mainHeader}>
            {year}년도  {quarter}분기
            <div className={styles.changeBtn} 
                onClick={()=>{
                    setMOpen(true)
                    setMType(1)
                }}>연도 바꾸기</div>
        </div>
    )
}

export default MainHeader;