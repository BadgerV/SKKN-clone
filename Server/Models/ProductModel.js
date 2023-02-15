const mongoose = require("mongoose");

//creatuing svehma using mongoose
const porductSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    category : {
        type : String,
        required : true
    },
    price : {
        type : Number,
        required : true
    },imageLink : {
        type : String,
        required : true
    },
    description : {
        type : String,
        required : true
    },
    title : {
        type : String
    },
    userId : {
        type : String,
        required : true
    },
    rating : {
        type : Number,
        default : 5
    }

})

const productModel = mongoose.model('product', porductSchema);
module.exports = productModel;

//"email" : "Badger",
//"password" : "123456"