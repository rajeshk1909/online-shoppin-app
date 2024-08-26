import { createSlice } from "@reduxjs/toolkit";

export interface userDataTypes {
    id: number,
    name: string,
    userId: string,
    password: string,
    type:string,
}

export interface userDataState {
    userData:userDataTypes[]
}

export interface userDataRootState {
    userData: userDataState
}

const data = localStorage.getItem("userData")

const newData :userDataTypes[] = data !== null ? JSON.parse(data) : []

const initialState:userDataState = {
    userData:newData,
}

const userDataSlice = createSlice({
    name: "userData",
    initialState,
    reducers: {
        setUserData: (state, action) => {
            state.userData = action.payload
        }
    }
})

export const {setUserData} = userDataSlice.actions

export default userDataSlice.reducer