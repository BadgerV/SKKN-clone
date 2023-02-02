const express = require('express');
const WallpaperSchema = require('../Models/WallaperModel');

const wallpaperRouter = express.Router();

wallpaperRouter.post('/setWallpaper', async (req, res) => {
    const data = new WallpaperSchema({
        wallpaperLink : req.body.wallpaperLink
    })


    try {
        const savedData = await data.save();
        res.status(200).json(savedData)
    } catch (error) {
        res.status(400).json({message : error.message})
    }

})

wallpaperRouter.get('/getWallpaper', async(req, res) => {
    try {
        const data = await WallpaperSchema.find();

        res.json(data);

    } catch (error) {
        res.status(400).json({message : error.message})
    }
})

wallpaperRouter.patch('/updateWallpaper/:id', async (req, res)=> {
    try {
        const id = req.params.id;
        const options = {new : true};
        const updatedData = req.body;

        const patchedData = await WallpaperSchema.findByIdAndUpdate(
            id, updatedData, options
        )

        res.send(patchedData)
    } catch (error) {
        res.status(400).json({message : error.message})
    }
})

wallpaperRouter.delete('/deleteWallpaper/:id',async (req,res) => {
    try {
        const id = req.params.id;

        const deletedDocument = await WallpaperSchema.findByIdAndDelete(id);

        res.send(`Document with ${deletedDocument.name} has been deleted..`)
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
})


module.exports = wallpaperRouter;