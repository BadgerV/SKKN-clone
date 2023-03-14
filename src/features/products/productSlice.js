import { createSlice } from "@reduxjs/toolkit";



const initialState = {
    allProducts : [],
    instagramProducts : [],
    myProducts : [],
    wallpaperLink : "",
    isLoading : true,
    postProductStatus : "",
    updateProductStatus : {},
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
            state.isLoading = false;
            state.wallpaperLink = action.payload;
        },
        getMyProductSuccess : (state, action) => {
            state.isLoading = false;
            state.myProducts = action.payload;
        },
        postMyProductSuccess : (state, action) => {
            state.isLoading = false;
            state.postProductStatus = action.payload;
        },
        postProductFailure : (state, action) => {
            state.isLoading = false;
            state.postProductStatus = action.payload;
        },
        updateProductSuccess : (state, action) => {
            state.isLoading = false;
            state.updateProductStatus = action.payload;
        }
    }
})


export const { getProductStart, getProductSuccess, getProductFailure, getWallpaperSuccess, getMyProductSuccess,postMyProductSuccess,postProductFailure, updateProductSuccess } = productSlice.actions;


export default productSlice.reducer;

