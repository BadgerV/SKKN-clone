const express = require("express");
const route = express.Router();

const isAuthenticated = require('../middleware/auth');

const userModel = require('../Models/UserModel');
const productModel = require('../Models/ProductModel')


route.post("/post-product", isAuthenticated, async (req, res) => {
    try {
        const {name, category, price, imageLink, description, title} = req.body;
        if (!name || !category || !price || !imageLink || !description) {
            return res.json({ message: 'Please enter all the details' })
        }

        //Check if the user already exist or not
        const userExist = await userModel.findOne({ _id: req.body.userId });
        if (!userExist) {
            return res.json({ message: 'User doesnt already exist with the given emailId' })
        }

       

        //Check if the already existing user is a seller
        if(userExist.accType !== 'seller') {
            return res.json({message : "You are not authorized for selling"})
        }

        const newProduct = await new productModel(req.body)


        try {
            const savedProduct = await newProduct.save();
            // await post.updateOne({ $push: { likes: req.body.userId } })
            const foundUser = await userModel.findById(userExist._id);
            await foundUser.updateOne({ $push : {products : savedProduct._id }})
            res.status(200).json(savedProduct)
        } catch (err) {
            res.status(500).json(err)
        }
    } catch (err) {

    }
})

//update a post
route.put("/post-product/:id", async (req, res) => {
    try {
        const product = await productModel.findById(req.params.id);
    if (product.userId === req.body.userId) {
        await product.updateOne({
            $set: req.body
        })
        res.status(200).json("Your post has been updated")
    } else {
        res.status(403).json("You can only update your post")
    }
    } catch (err) {
        res.status(500).json(err)
    }
})

//delete a post
route.delete("/post-product/:id", async (req, res) => {
    try {
        const product = await productModel.findById(req.params.id);

        if(!product) {
            return res.status(400).json("Product does not exist")
        }
    if (product.userId === req.body.userId) {
        await product.deleteOne()
        res.status(200).json("Your Product has been deleted")
    } else {
        res.status(403).json("You can only delete your Product")
    }
    } catch (err) {
        res.status(500).json(err)
    }
})

//get all your oistproducts
route.get("/post-product/get-my-products/:id", isAuthenticated, async (req, res) => {
    const myProductsIDs = [];
    const myProducts = [];
    try {
        const user = await userModel.findById(req.params.id);
        user.products.map((product) => {
            myProductsIDs.push(product)
        })

        for(let i = 0; i < myProductsIDs.length; i++) {
            const theProduct = await productModel.findById(myProductsIDs[i]);
            myProducts.push(theProduct)

            if(i ===  myProductsIDs.length - 1) {    
                return res.status(200).json(myProducts);
            }
        }

       

    } catch (err) {
       return res.status(500).json(err) 
    }
})

route.get("/post-product/get-products", isAuthenticated, async (req, res) => {
    
    try {
        const allProducts = await productModel.find();
        return res.status(200).json(allProducts)
    } catch (err) {
       return res.status(500).json(err) 
    }
})

module.exports = route;

//"name" : "Mango Flavoured Perfume",
//"category" : "perfumes",
//"price" : 40,
//"imageLink" : "google.com",
//"description" : "A mad perfume",
//"userId" : "63ebd90fab4c56ab8125857d"

// {
//     "name" : "Blue T-Shirt",
//     "category" : "clothing",
//     "price" : 50,
//     "imageLink" : "google.com",
//     "description" : "A T-Shirt",
//     "userId" : "63ec2ac123333b52b4201a31"
// }


//get-my-products/63ec2ac123333b52b4201a31