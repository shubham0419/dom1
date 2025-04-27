const express = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const User = require("../model/user");

const router = express.Router();


router.post("/register",async(req,res)=>{
  const {name,email,password} = req.body;


  try {
    const hashPass = await bcrypt.hash(password,10);

    const user = await User.create({
      name,
      email,
      password:hashPass
    })
    res.status(200).json({message:"user registered successfully"})
  } catch (error) {
    res.status(402).json({message:error.message})
  }
})


router.post("/login",async (req,res)=>{
  const {email,password} = req.body;

  const user = await User.findOne({email});

  if(!user){
    return res.status(400).json({message:"User not found"});
  }

  const isMatched = await bcrypt.compare(password,user.password);

  if(!isMatched){
    return res.status(400).json({message:"Invalid Password"});
  }

  const token = jwt.sign({name:user.name,email:user.email},"this is a secret (kush aisa likho jo guess na ho)",{expiresIn:'24h'})

  res.status(200).json({token,message:"user logged in successfully"});

})

module.exports = router