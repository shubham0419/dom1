const mongoose = require("mongoose");

const connectToDB = async()=>{
  mongoose.connect("mongodb://localhost:27017/libraryDB")
  .then(()=>console.log("connected to DB"))
}

module.exports = connectToDB;