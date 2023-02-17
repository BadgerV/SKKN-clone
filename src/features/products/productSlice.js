import { createSlice } from "@reduxjs/toolkit";



const initialState = {
    allProducts : [],
    instagramProducts : [],
    wallpaperLink : "",
    isLoading : true
}




const productSlice = createSlice({
    name : 'products',
    initialState,
    reducers: {
        getProductStart: (state) => {
            state.isLoading = true

        },
        getProductSuccess: (state, action) => {
            state.isLoading = false
            state.allProducts = action.payload;
        },
        getProductFailure: (state) => {
            state.isLoading = false
        },
        getWallpaperSuccess : (state, action) => {
            state.wallpaperLink = action.payload;
        }
    }
})


export const { getProductStart, getProductSuccess, getProductFailure, getWallpaperSuccess } = productSlice.actions;


export default productSlice.reducer;

