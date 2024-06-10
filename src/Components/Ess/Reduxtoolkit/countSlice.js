import { createSlice } from "@reduxjs/toolkit";

const countSlice=createSlice({
    name:'counter',
    initialState:0,
    reducers:{
        /*increment:(state)=>{
           //return state=state+1
           state++
        },
        decrement:(state)=>{
            //return state=state-1
            state--
        }*/
    }
})
export const {increment,decrement}=countSlice.actions
export default countSlice.reducer