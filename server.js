const express=require("express")
const app=express()
const bookRouter=require("./routes/books");
const connectDB = require("./config/dbConnect");
require("dotenv").config()


const PORT=process.env.PORT||5000

//Middleware
app.use(express.json());
connectDB()
app.use("/api/v1",bookRouter)

//Server start
app.listen(PORT,()=>{
    console.log("Server is Running..")
})