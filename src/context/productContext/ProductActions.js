export const getWallpaperStart = (userCredentials) => ({
    type : "GET_WALLPAPER_START"
})
    
export const gettWallpaperSuccess = (link) => ({
    type : "GET_WALLPAPER_SUCCESS",
    payload : link
})

export const getWallpaperFailure = (err) => ({
    type : "GET_WALLPAPER_FAILURE",
    payload : err
})