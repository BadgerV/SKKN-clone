import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    user : null,
    isLoading : false,
    error : false
}

const userSlice = createSlice({
    name : 'user',
    initialState,
    reducers : {
        loginStart : (state) => {
            state.isLoading = true
        },
        loginSuccess : (state, action) => {
            console.log(action)
            state.isLoading = false
            state.user = action.payload
        },
        loginFailure : (state, action) => {
            state.isLoading = false
            state.error = action.payload
        }
    }
})


export const { loginStart, loginSuccess, loginFailure } = userSlice.actions;



export default userSlice.reducer;