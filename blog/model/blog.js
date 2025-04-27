const  mongoose  = require("mongoose");

const blogSchema = new mongoose.Schema({
  heading:{
    type:String,
    required:true
  },
  categories:{
    type:String,
    required:true
  },
  description:{
    type:String,
    required:true
  }
},
{
  timestamps:true
}
)

const Blog = mongoose.model("Blog",blogSchema);
module.exports = Blog