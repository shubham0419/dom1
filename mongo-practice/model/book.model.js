const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  name:{
    type:String,
    required:true,
    trim:true,
  },
  author:{
    type:String,
    required:true,
    trim:true,
  },
  rentedBy:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"User",
    rentedOn:Date
  }
})

const Book = mongoose.model("Book",bookSchema);
module.exports = Book;