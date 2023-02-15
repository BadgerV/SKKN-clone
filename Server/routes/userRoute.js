const express = require("express");
const cookieParser = require("cookie-parser");

const route = express.Router();

route.use(cookieParser())

const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const isAuthenticated = require('../middleware/auth');

//importing model
const userModel = require('../Models/UserModel');



//Creating register route
route.post("/register", async (req, res) => {

    try {
        const { firstName, lastName, email, password, confirmPassword } = req.body;
        //Check emptyness of the incoming data
        if (!firstName || !lastName || !email || !password || !confirmPassword) {
            return res.json({ message: 'Please enter all the details' })
        }

        if (password !== confirmPassword) {
            return res.json({message: 'Passwords do not match'})
        }

        //Check if the user already exist or not
        const userExist = await userModel.findOne({ email: req.body.email });
        if (userExist) {
            return res.json({ message: 'User already exist with the given emailId' })
        }
        //Hash the password
        const salt = await bcrypt.genSalt(10);
        const hashPassword = await bcrypt.hash(req.body.password, salt);
        req.body.password = hashPassword;
        const user = new userModel(req.body);
        await user.save();
        

        const accessToken = await jwt.sign({ id : user._id }, "mySecretKey", {expiresIn : "2h"});
        

        return res
        .cookie("access_token", accessToken, {
          httpOnly: true
        })
        .status(200)
        .json({ message: "Logged in successfully 😊 👌" });
    } catch (error) {
        return res.json({ error: error });
    }

})


//Creating login routes
route.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        //Check emptyness of the incoming data
        if (!email || !password) {
            return res.json({ message: 'Please enter all the details' })
        }
        //Check if the user already exist or not
        const userExist = await userModel.findOne({email:req.body.email});
        if(!userExist){
            return res.json({message:'Wrong credentials'})
        }
        //Check password match
        const isPasswordMatched = await bcrypt.compare(password,userExist.password);
        if(!isPasswordMatched){
            return res.json({message:'Wrong credentials pass'});
        }

        const accessToken = await jwt.sign({ id : userExist._id }, "mySecretKey", {expiresIn : "2h"});
        

        return res
        .cookie("access_token", accessToken, {
          httpOnly: true
        })
        .status(200)
        .json({data : userExist});

    } catch (error) {
        return res.json({ error: error });
    }

})

route.get("/logout", isAuthenticated, (req, res) => {
    return res
      .clearCookie("access_token")
      .status(200)
      .json({ message: "Successfully logged out 😏 🍀" });
  });


route.get("/protected", isAuthenticated, (req, res) => {
    return res.json({ user: { id: req.userId, role: req.userRole } });
})

//Creating user routes to fetch users data
route.get('/user',isAuthenticated, async (req, res) => {
    try {
        const user  = await userModel.find();
        if(!user){
            return res.json({message:'No user found'})
        }
        return res.json({user:user})
    } catch (error) {
        return res.json({ error: error });  
    }
})


module.exports = route;