

const getUser = (req,res)=>{
  console.log("this is from user router");
  res.send("this is from user router")
}

const createUser = (req,res)=>{
  console.log("this is from user router");
  res.send("this is from user router")
}

module.exports = {getUser,createUser}