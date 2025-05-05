const express = require("express");
const Book = require("../model/book.model");
const router = express.Router();

router.post("/create",async(req,res)=>{
  const {name,author} = req.body;

  if(!name || !author){
    return res.status(400).json({message:"all fields are required"});
  }

  const book = await Book.create({
    name,
    author
  });

  res.status(200).json({message:"book created successfully",book})
})

router.get("/all",async(req,res)=>{
  const allBooks = await Book.find();
  res.status(200).json({allBooks});
})

router.get("/:bookId",async(req,res)=>{
  const {bookId} = req.params;
  // const book = await Book.findById(bookId)
  const book = await Book.findOne({_id:bookId});
  res.status(200).json({book});
})

router.put("/update/:id",async(req,res)=>{
  const {id} = req.params;
  const dataToUpdate = req.body;
  // await Book.findByIdAndUpdate(id,dataToUpdate)
  // await Book.findByIdAndUpdate(id,req.body`)
  await Book.updateOne({_id:id},req.body);
  res.status(200).json({message:"book updated successfully"});
})

router.delete("/delete/:id",async(req,res)=>{
  const {id} = req.params;
  await Book.findByIdAndDelete(id);
  // await Book.deleteOne({_id:id})
  res.status(200).json({message:"book deleted successfully"});
})

module.exports = router;