import { atom } from "recoil";

export const scoreList=atom({
    key:"scoreList",
    default:[],
})

export const pageIdx=atom({
    key:"pageIdx",
    default:0,
});

export const modalOpen=atom({
    key:"modalOpen",
    default:false,
})

export const modalType= atom({
    key:"modalType",
    default:0,
})

export const selectedYear=atom({
    key:"selectedYear",
    default:0,
})

export const selectedQuarter=atom({
    key:"selectedQuarter",
    default:0,
})

export const selectedTab= atom({
    key:"selectedTab",
    default:1,
})

export const teamPoints=atom({
    key:"teamPoints",
    default:{
        "red":0,
        "blue":0,
        "yellow":0
    },
})

export const redPoint=atom({
    key:"redPoint",
    default:0,
})

export const bluePoint=atom({
    key:"bluePoint",
    default:0,
})

export const yellowPoint=atom({
    key:"yellowPoint",
    default:0,
})