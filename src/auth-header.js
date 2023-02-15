export const authHeader = () => {
    const user = JSON.parse(localStorage.getItem("user"));

    if(user && user.access_token) {
        console.log("This is true")
        return {'x-access-token' : user.accessToken}

    } else {
        console.log("this is niot true")
    }
}