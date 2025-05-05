const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name:{
    type:String,
    required:true,
    trim:true
  },
  email:{
    type:String,
    required:true,
    trim:true,
    unique:true,
  },
  password:{
    type:String,
    required:true
  },
  books:[
    {
      type:mongoose.Schema.Types.ObjectId,
      ref:"Book",
      rentDate:Date,
      returnDate:Date,
    }
  ]
})

const User = mongoose.model("User",userSchema);
module.exports = User;
