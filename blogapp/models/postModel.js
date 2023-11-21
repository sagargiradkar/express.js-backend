// import mongoose
const mongoose = require("mongoose");

//route handler
const postSchema = new mongoose.mongo.Schema({
    title:{
        type:String,
        required:true,
    },
    body:{
        type:String,
        required:true,
    },
    likes:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Like",
    }],
    comments:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Comment",
    }] 

})

//exports
module.exports = mongoose.model("Post",postSchema);
