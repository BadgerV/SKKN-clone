const mongoose = require('mongoose');

const WallpaperSchema = new mongoose.Schema({
    wallpaperLink : {
        required : true,
        type : String
    }
})

module.exports = mongoose.model("Wallpaper", WallpaperSchema);