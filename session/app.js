const express = require("express");
const  mongoose = require("mongoose"); 
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken")
const app = express();
const PORT = 4000;
const path = require("path");
const User = require("./model/user");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

mongoose.connect("mongodb://localhost:27017/session").then(()=>{
  console.log("db connected");
})

app.post("/signup",async (req,res)=>{
  const {name,email,password} = req.body;

  try {
    const hashPass = await bcrypt.hash(password,10)
    const newUser = await User.create({
      name,
      email,
      password:hashPass
    })
    res.status(200).json({newUser});
  } catch (error) {
    console.log(error);
  }
})

app.post("/login",async(req,res)=>{
  const {email,password} = req.body;

  const user = await User.findOne({email});

  if(!user){
    return res.status(400).json({message:"Invalid email or password"});
  }

  const isMatched = await bcrypt.compare(password,user.password);

  if(!isMatched){
    return res.status(400).json({message:"Invalid email or password"});
  }

  const token = jwt.sign({name:user.name,email:user.email},"this _  is _ a  _ secret",{expiresIn:"7d"})
  // const token = jwt.sign({name:user.name,email:user.email,role:user.role},"this _  is _ a  _ secret",{expiresIn:"7d"})

  res.status(200).json({user,token});

})

app.get("/currentuser",async (req,res)=>{
  const token = req.headers.authorization.split(" ")[1];
  try {
    const decode = jwt.verify(token,"this _  is _ a  _ secret");
    const email = decode.email
    
    const user = await User.findOne({email})

    res.status(200).json({user});
  } catch (error) {
    console.log(error);
  }
})

app.listen(PORT, () => console.log("Server running on port " + PORT));