import { createSlice } from "@reduxjs/toolkit";


export interface currentUserDataTypes {
    id: number,
    name: string,
    userId: string,
    password: string,
    type:string,
}

export interface currentUserDataState {
    currentUserData : currentUserDataTypes[]
}

export interface currentUserDataRootState {
    currentUserData : currentUserDataState

}

const data = localStorage.getItem("currentUserData")

const newData = data !== null ? JSON.parse("data") : []
    

const initialState = {
    currentUserData: newData,
}


const currentUserData = createSlice({
    name: "currentUserData",
    initialState,
    reducers: {
        setCurrentUser: (state, action) => {
            state.currentUserData = action.payload
        }
    }
})

export const {setCurrentUser} = currentUserData.actions

export default currentUserData.reducer