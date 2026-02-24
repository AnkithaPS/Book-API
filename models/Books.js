const { timeStamp } = require("console")
const mongoose=require("mongoose")

const bookSchema= new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    author:{
        type:String,
        required:true
    },
    genre:{
        type:String
    },
    publishedYear:{
        type:Number,
        required:true
    },
    isAvailable:{
        type:Boolean,
        default:true
    },
},
{timestamps:true},
)

//compile the schema to form model
const Book=mongoose.model("book",bookSchema)
module.exports=Book