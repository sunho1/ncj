import React, { PureComponent,useEffect } from "react";
import styles from "./BarGraph.module.css"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import {useRecoilState} from "recoil";
import {scoreList,scorePlusList} from "../../../../atoms"

function BarGraph(){

    const [sPlusList,setSPlusList]=useRecoilState(scorePlusList);

    const [list,setList] = useRecoilState(scoreList);


    return(
        <div className={styles.bar}>
            <ResponsiveContainer width="100%" height="100%">
                <LineChart
                width={500}
                height={300}
                data={sPlusList}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
                >
                <CartesianGrid strokeDasharray="4 1" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="red" stroke="red" activeDot={{ r: 8 }} />
                <Line type="monotone" dataKey="blue" stroke="blue" />
                <Line type="monotone" dataKey="yellow" stroke="yellow" />
                </LineChart>
            </ResponsiveContainer>
        </div>
    )
}

export default BarGraph;