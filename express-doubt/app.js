const express = require('express');
const app = express();
const PORT = 3000;
// routes
const userRouter = require("./routes/user.routes");

// middleware are the function which runs for every request to the server
app.use(function(req,res,next){
  console.log("req has come to middleware 1");
  next();
})

app.use(function(req,res,next){
  console.log("req has come to middleware 2");
  next();
})

app.use("/user",function(req,res,next){
  console.log("req has come to path specific middleware 1");
  next();
})

app.use("/user/admin",function(req,res,next){
  console.log("req has come to path specific middleware 2");
  next();
})

app.get("/home",(req,res,next)=>{
  console.log("hello");
  res.send("this is a res from backend");
  next();
})

app.get("/home",(req,res)=>{
  console.log("hello 2");
  // res.send("this is a res from backend");
})

app.post("/hello",(req,res,next)=>{
  console.log("hello");
  res.send("this is a res from backend");
  next();
})

app.use("/users",userRouter);

app.listen(PORT,()=>{
  console.log(`Server is running on port ${PORT}`);
})