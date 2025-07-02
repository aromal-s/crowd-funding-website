const jwt = require("jsonwebtoken")
const User = require("../models/User")
require("dotenv").config()

const protect = async (req,res,next)=>{
    let token;

    if(req.headers.authorization && req.headers.authorization.startsWith("Bearer"))
    {
       try {
         token=req.headers.authorization.split(" ")[1];
        const decoded =jwt.verify(token,process.env.JWT_SECRET)
        req.user = await User.findById(decoded.id).select("-password");
        return next();
       } catch (error) {
            console.error("Token verification failed ",error.message);
            return res.status(400).json({message:"not autherized token failed"})
       }
    }
     return res.status(400).json({message:"not autherized token failed"})
}

module.exports = {protect}