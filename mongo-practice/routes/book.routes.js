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


module.exports = router;