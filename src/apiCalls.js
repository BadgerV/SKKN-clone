import axios from 'axios';

export const loginCall = async(userCredentials,dispatch ) => {
    dispatch({type : "LOGIN_START"})

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
        
        dispatch({ type: "LOGIN_SUCCESS", payload: res.data.data })
    } catch (err) {
        dispatch({ type: "LOGIN_FAILURE", payload: err })
        
    }   
}

export const registerCall = async(userCredentials, dispatch) => {
    dispatch({type : "REGISTER_START"})
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
        
        dispatch({ type: "REGISTER_SUCCESS", payload: res.data.data })
    } catch (err) {
        dispatch({ type: "REGISTER_FAILURE", payload: err })
        
    }      
}

export const getAllProducts = async() => {
    try {
        const res = await axios({
            method: "get",
            baseURL: "http://localhost:3000/api/",
                url: `post-product/get-products`,
            });

        return res.data
    }catch (err) {

    }
}