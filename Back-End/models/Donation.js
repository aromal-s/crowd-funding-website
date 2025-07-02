const mongoose = require("mongoose")
const schema = mongoose.Schema

const donationSchema = new schema({
    donatorid:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        reqired:true
    },
    campaignid:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Campaign',
        required:true
    },
    amount:{
        type:Number,
        required:true
    }
},{timestamps:true})

module.exports = mongoose.model('Donation',donationSchema)