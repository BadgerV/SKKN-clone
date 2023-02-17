import { createSlice } from "@reduxjs/toolkit";



const initialState = {
    allProducts : [],
    instagramProducts : [],
    largeImagePictureLink : "",
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
        }
    }
})


export const { getProductStart, getProductSuccess, getProductFailure } = productSlice.actions;


export default productSlice.reducer;

