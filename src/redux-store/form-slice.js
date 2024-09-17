import { createSlice } from "@reduxjs/toolkit";

const formSlice = createSlice({
    initialState:{},
    name:"form",
    reducers:{
        formInfo(state,action){
                state.email=action.payload.email
                state.password=action.payload.password
        }
    }
})

export const {formInfo}=formSlice.actions

export default formSlice