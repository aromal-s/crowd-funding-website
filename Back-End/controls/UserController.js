
const User = require('../models/User')
const jwt = require('jsonwebtoken')
const userRegister = async (req,res) => {
    const {name,email,password,isadmin} = req.body
    try {
        if(!name || !email || !password){
            return res.status(400).json({message:"Please fill all the fields"})
        }
        const userexits= await User.findOne({email})
        if(userexits){
            return res.status(200).json({message:"User already exits"})
        }
        const user = await User.create({name,email,password,isadmin})
        const token = generateToken(user._id);
        res.status(200).json({user,token})
    } catch (error) {
        res.status(400).json({error:error.message})
    }
}

const userLogin = async (req,res) => {
    
    try {
        const {email,password} = req.body
        if(!email || !password){
            return res.status(200).json({message:"Please fill all the fields"})
        }
        const user = await User.findOne({email})
        if(!user || !(await user.matchPassword(password))   )
        {
            return res.status(200).json({message:"Invalid username or password"})
        }
        const token = generateToken(user._id);
        return    res.status(200).json({user,token})
        
    } catch (error) {
        res.status(400).json({error:error.message})
    }
}

const generateToken = (id) =>{
    return jwt.sign({id},process.env.JWT_SECRET,{expiresIn:"30d"})
}

module.exports = {userRegister,userLogin}