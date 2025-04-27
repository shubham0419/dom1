const express = require("express");
const { default: mongoose } = require("mongoose");
const path = require("path")
const app = express();
const PORT = 3000;
const userRouter = require("./routes/user.routes")

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use("/user",userRouter);

mongoose.connect("mongodb+srv://shubham:shubham19@cluster0.ef3ohf5.mongodb.net/blog").then(()=>{
  console.log("db connected");
});

app.listen(PORT, () => console.log("Server running on port " + PORT));