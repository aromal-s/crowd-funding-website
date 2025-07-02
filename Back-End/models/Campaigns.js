const mongoose = require("mongoose")
const schema = mongoose.Schema

const campiagnSchema = new schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    creatorid:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true
    },
    creatorname: {
        type:String,
        required:true
    },
    goalamount:{
        type:Number,
        required:true
    },
    raisedamount:{
        type:Number,
        default:0
    },
    status:{
        type:String,
        enum:['pending','approved','rejected'],
        default:'pending'
    }
},{timestamps:true})

module.exports = mongoose.model('Campaign',campiagnSchema)