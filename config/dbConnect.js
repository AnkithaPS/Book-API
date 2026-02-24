const mongoose=require("mongoose")
require("dotenv").config()

//Connect mongodb
const connectDB= async()=>{
    try{
        await mongoose.connect(process.env.MONGO_URI);
        console.log("Mongodb Connected")
    }
    catch(error)
    {
        console.log("Error",error)
    }
}

module.exports=connectDB