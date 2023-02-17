const ProductReducer = (state, action) => {
    switch(action.type) {
        case "GET_WALLPAPER_START" :
            return {
                wallaper : "",
                isFetching : true,
                error : false
            };
        case "GET_WALLPAPER_SUCCESS" :
            return {
                wallpaper : action.payload,
                isFetching : false,
                error : false
            };
        case "GET_WALLPAPER_FAILURE" :
            return {
                wallpaper : "",
                isFetching : false,
                error : action.payload
            };

            default : 
                return state
    }
}

export default ProductReducer;