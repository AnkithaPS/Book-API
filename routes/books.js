const express=require("express")
const router=express.Router()
const Book=require("../models/Books")


//create new book
router.post("/books",async(req,res)=>{
    try{
        const {title,author,genre,publishedYear,isAvailable}=req.body;

        //Check for duplicate
        const existingBook=await Book.findOne({title,author})
        if(existingBook){
            return res.status(409).json({message:"Book is already exists"})
        }else{
            //create new book
            const data=await Book.create({title,
                author,
                genre,
                publishedYear,
                isAvailable})
            res.status(201).json({message:"Book created successfully",data})
        }   
    }catch(error){
        res.status(400).json({message:error.message})
    }
    console.log("Body",req.body)
})

//Fetch all the books
router.get("/books",async(req,res)=>{
    try{
        const data=await Book.find();
        res.status(200).json(data)
    }
    catch(error){
        res.status(500).json(error.message)
    }
    
})

//Fetch single book by id
router.get("/books/:bookId",async(req,res)=>{
    try{
        const id=req.params.bookId
        const data=await Book.findById(id)
        res.status(200).json(data)

    }catch(error)
    {
        res.status(500).json(error.message)
    }
})

//Delete book detail
router.delete("/books/:id",async(req,res)=>{
    try {
        const id=req.params.id
        const data=await Book.findByIdAndDelete(id)
        res.status(200).json({messsage:"Book deleted successfully"})
    } catch (error) {
        res.status(500).json(error.message)
    }
}

)

//Update book detail
router.put("/books/:id",async(req,res)=>{
    try {
        const id=req.params.id
        const data=await Book.findByIdAndUpdate(id,req.body,{new:true})
        res.status(200).json({message:"Book updated successfully",data})
    } catch (error) {
        res.status(500).json(error.message)
    }
}

)

module.exports=router