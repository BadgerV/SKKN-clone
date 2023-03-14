import axios from 'axios';

import { getProductSuccess, getProductStart, getProductFailure, getWallpaperSuccess, getMyProductSuccess,postMyProductSuccess,postProductFailure, updateProductSuccess } from './features/products/productSlice';
import {loginStart,loginSuccess,loginFailure} from './features/user/userAuth';

export const loginCall = async(userCredentials,dispatch ) => {
    dispatch(loginStart());

    try {
        const res = await axios({
        method: "post",
        baseURL: "http://localhost:3000/api/",
            url: `login`,
            data: {
                email: userCredentials.email,
                password : userCredentials.password
        }
        });

        if(res.data.data) {
            localStorage.setItem("user", JSON.stringify(res.data.data))
        }
        
        dispatch(loginSuccess(res.data.data))
    } catch (err) {
        dispatch(loginFailure())
        
    }   
}

export const registerCall = async(userCredentials, dispatch) => {
    try {
        const res = await axios({
        method: "post",
        baseURL: "http://localhost:3000/api/",
            url: `register`,
            data: {
                firstName: userCredentials.firstName,
                lastName : userCredentials.lastName,
                email : userCredentials.email,
                password : userCredentials.password,
                confirmPassword : userCredentials.confirmPassword,
        }
        });
        
    } catch (err) {
        console.log(err)
        
    }      
}




export const getAllProducts = async (dispatch) => {
    dispatch(getProductStart());

    try {
        const res = await axios({
            method: "get",
            baseURL: "http://localhost:3000/api/",
                url: `post-product/get-products`,
            });

        dispatch(getProductSuccess(res.data))
    } catch (err) {
        dispatch(getProductFailure())
        
    }
}

export const getWallpaperLink = async (dispatch) => {
    dispatch(getProductStart());

    try {
        const res = await axios({
            method: "get",
            baseURL: "http://localhost:3000/api/",
                url: `getWallpaper`,
            }); 

        dispatch(getWallpaperSuccess(res.data[0].wallpaperLink))
    } catch(err) {
        dispatch(getProductFailure())
    }
}


export const getMyProducts = async (id, dispatch) => {
    dispatch(getProductStart());

    try {
        const res = await axios({
            method: "get",
            baseURL: "http://localhost:3000/api/",
                url: `post-product/get-my-products/${id}`,
            }); 

        dispatch(getMyProductSuccess(res.data))
    } catch(err) {
        dispatch(getProductFailure())
    }
}

export const postMyProduct = async (userCredentials, dispatch) => {
    dispatch(getProductStart());

    try {
        const res = await axios({
            method: "post",
            baseURL: "http://localhost:3000/api/",
                url: `post-product`,
                data: {
                    name: userCredentials.name,
                    category : userCredentials.category,
                    price : userCredentials.price,
                    imageLink : userCredentials.imageLink,
                    description : userCredentials.desc,
                    title : userCredentials.title,
                    userId : userCredentials.userId
            }
            }); 
            dispatch(postMyProductSuccess(res.data._id));

    } catch(err) {
        dispatch(postProductFailure(err))
    }    
}

export const updateProduct = async (userCredentials, id, dispatch) => {
    dispatch(getProductStart())

    try {
        const res = await axios({
            method: "post",
            baseURL: "http://localhost:3000/api/",
                url: `post-product/${id}`,
                data: {
                    name: userCredentials.name,
                    category : userCredentials.category,
                    price : userCredentials.price,
                    imageLink : userCredentials.imageLink,
                    description : userCredentials.desc,
                    title : userCredentials.title,
                    userId : userCredentials.userId
            }
            }); 
            dispatch(updateProductSuccess(res));

    } catch(err) {
        dispatch(postProductFailure(err))
    }  
}