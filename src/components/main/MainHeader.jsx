import React, { useState,useEffect } from "react";
import { useRecoilState  } from "recoil";
import { modalOpen, modalType, selectedYear, selectedQuarter, scoreList, teamPoints, redPoint, bluePoint, yellowPoint,scorePlusList} from "../../atoms";
import styles from "./MainHeader.module.css"
import score from "../../common/sample/scoreSample.json"

function MainHeader(){
    const [mOpen, setMOpen] = useRecoilState(modalOpen);
    const [mType, setMType] = useRecoilState(modalType);
    const [year , setYear] = useRecoilState(selectedYear);
    const [quarter, setQuarter] = useRecoilState(selectedQuarter);
    const [list, setList]=useRecoilState(scoreList);
    //점수
    const [red,setRed]=useRecoilState(redPoint); 
    const [blue,setBlue]=useRecoilState(bluePoint);
    const [yellow,setYellow]=useRecoilState(yellowPoint);
    const [sPlusList, setSPlusList]=useRecoilState(scorePlusList)
    let r=0;
    let b=0;
    let y=0;
    let scoreTemp=[];


    useEffect(()=>{
        setYear(2023);
        setQuarter(1);
        setList(score);
    },[]);

    useEffect(()=>{
        rank()
    },[list]);

    const rank=()=>{
        list.map((a,idx)=>{
            if(a.first_score > a.second_score){
                color(a.first_team,3);
            }else if(a.first_score < a.second_score){
                color(a.second_team,3);
            }else{
                color(a.first_team,1);
                color(a.second_team,1);
            }

            if(idx%3==2){
                scoreTemp.push({
                    name: a.date,
                    red: r,
                    blue: b,
                    yellow: y
                })
            }
            
        })
        console.log("main")
        setRed(r)
        console.log("red : "+r)
        setBlue(b)
        console.log("blue : "+b)
        setYellow(y)
        console.log("yellow : "+y)
        setSPlusList(scoreTemp)
    }
    
    
    const color=(name, point)=>{
        if(name=="R"){
            r+=point
        }else if(name=="B"){
            b+=point
        }else{
            y+=point
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