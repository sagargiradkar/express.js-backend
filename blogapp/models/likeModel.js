//import mongoosee
const mongoose = require("mongoose");

//route handler

const likesScema = new mongoose.Schema({
    post:{
        type:mongoose.Schema.Types.ObjectId,
        ref :"Post" ,//reference to post model

    },
    user:{
        type:String,
        require:true,
    },

})

module.exports = mongoose.model("Like",likesScema)