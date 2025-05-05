const express = require("express");
const connectToDB = require("./db");
const app = express();
const PORT = 4000;

app.use(express.json());
app.use(express.urlencoded({extended:true}));

// routes
const userRouter = require("./routes/user.routes");

app.get("/",(req,res)=>{
  res.send("hello")
})

app.use("/user",userRouter);


app.listen(PORT,()=>{
  connectToDB();
  console.log(`server started on http://localhost:${PORT}`);
})