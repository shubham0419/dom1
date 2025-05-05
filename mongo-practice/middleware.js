const jwt = require("jsonwebtoken");

const isLoggedin = async (req,res,next)=>{
  try {
    const token = req.headers.authorization.split(" ")[1];
    
    const decode = jwt.verify(token,"this is a secret for my app");
    
    if(!decode) {
      return res.status(401).json({message:"you are not authenticated"})
    }

    next();
  } catch (error) {
    res.status(400).json({message:error.message})
  }
}

module.exports = isLoggedin