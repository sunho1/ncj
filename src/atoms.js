import { atom } from "recoil";

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