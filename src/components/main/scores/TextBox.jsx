import React from "react";
import styles from "./TextBox.module.css";

function TextBox(props){

    const text=(t)=>{
        if(t=="R"){
            return("Red")
        }else if(t=="B"){
            return("Blue")
        }else{
            return("Yellow")
        }
    }

    return(
        <div className={props.data=="R"? styles.redText: (props.data=="B"? styles.blueText:styles.yellowText)}>
            {text(props.data)}
        </div>
    )
}

export default TextBox;