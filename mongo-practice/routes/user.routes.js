const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const User = require("../model/user.model");
const jwt = require("jsonwebtoken");

router.post("/register",async(req,res)=>{
  const {name,email,password} = req.body;

  if(!name || !email || !password){
    return res.status(400).json({message:"all fields are required"});
  }
  const hashPass = await bcrypt.hash(password,10);

  const user = await User.create({
    name,
    email,
    password:hashPass
  });
  res.status(200).json({user})
});

router.post("/login",async(req,res)=>{
  const {email,password} = req.body;

  const user = await User.findOne({email});
  if(!user){
    return res.status(400).json({message:"email or password is invalid"});
  }

  const ismatched = await bcrypt.compare(password,user.password);

  if(!ismatched){
    return res.status(400).json({message:"email or password is invalid"});
  }

  const token = jwt.sign({name:user.name,email:user.email,id:user._id},"this is a secret for my app",{expiresIn:"1d"});

  res.status(200).json({message:"user created successfully",token,user})

})

module.exports = router;