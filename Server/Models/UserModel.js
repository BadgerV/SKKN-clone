const mongoose = require("mongoose");

//creatign schema using mongoose
const userSchema = new mongoose.Schema({
    firstName : {
        type:String,
        required:true,
    },
    lastName : {
        type : String,
        required: true,
    },
    email : {
        type : String,
        required: true 
    },
    password:{
        type:String,
        required:true,
        minLength:[8,'Password should be minimum of 8 characters']
    },
    accType : {
        type : String,
        required: true
    },
    token:{
        type:String
    },
     products : {
        type : Array,
        default : []
     }
})

const userModel = mongoose.model('user', userSchema);
module.exports = userModel;