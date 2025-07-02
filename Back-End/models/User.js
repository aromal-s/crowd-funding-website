const mongoose = require("mongoose")
const schema = mongoose.Schema
const bcrypt = require("bcrypt")

const userSchema = new schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true,
        lowercase:true
    },
    password:{
        type:String,
        required:true
    },
    isadmin:{
        type:Boolean,
        required:true,
        default:false
    }
},{timestamps:true})

userSchema.pre('save', async function (next) {
    if(!this.isModified("password")) next();
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password,salt)
    next();
})

userSchema.methods.matchPassword = async function(enteredpassword) {
    return await bcrypt.compare(enteredpassword,this.password)
    
}

module.exports = mongoose.model('User',userSchema)