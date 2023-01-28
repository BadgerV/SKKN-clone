const express = require('express');
const Model = require('../Models/Model');


const router = express.Router();

//METHODS

router.post('/post', async (req, res) => {
    const data = new Model({
        name : req.body.name,
        age : req.body.age
    })

    try {
        const savedData = await data.save();
        res.status(200).json(savedData)
    } catch (error) {
        res.status(400).json({message : error.message})
    }
})

router.get('/getAll', async (req,res) => {
    try {
        const data = await Model.find();

        res.json(data);

    } catch (error) {
        res.status(400).json({message : error.message})
    }
})

//GET BY ID METHOD
router.get('/getOne/:id',async (req,res) => {
    try {
        const data = await Model.findById(req.params.id);
        res.json(data)
    } catch (error) {
        res.status(400).json({message : error.message})
    }
})

//Update by id
router.patch('/updateOne/:id', async (req, res)=> {
    try {
        const id = req.params.id;
        const options = {new : true};
        const updatedData = req.body;

        const patchedData = await Model.findByIdAndUpdate(
            id, updatedData, options
        )

        res.send(patchedData)
    } catch (error) {
        res.status(400).json({message : error.message})
    }
})

router.delete('/deleteOne/:id',async (req,res) => {
    try {
        const id = req.params.id;

        const deletedDocument = await Model.findByIdAndDelete(id);

        res.send(`Document with ${deletedDocument.name} has been deleted..`)
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
})

module.exports = router;