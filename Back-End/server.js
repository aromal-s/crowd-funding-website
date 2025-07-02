require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const app = express()
const env = process.env
const cors=require("cors")
const userRoutes = require('../Back-End/routes/userRoutes')
//const campaignRoutes = require('../Back-End/routes/campaignRoutes')
const adminRoutes=require('../Back-End/routes/adminRoutes')
const donanationroutes=require('../Back-End/routes/donationroutes')

app.use(cors())
//MIDDLEWIRE
app.use(express.json())

//campaignRoutes.js
// app.use('/api/campaign',campaignRoutes)

//USERROUTES.JS
app.use('/api/user',userRoutes)

//adminroutes
app.use('/api/admin',adminRoutes)

//donationroutes.js
app.use('/api/donate',donanationroutes)

//HOME
app.get('/',(req,res)=>{
    res.send("Hello this is the server side");
})



//MONGODB CONNECTION
mongoose.connect('mongodb://localhost:27017/').then(()=>{console.log("CONNECTED TO THE MONGODB");
}).catch((err)=>console.log(err))

//LISTENING TO PORT
app.listen(env.PORT,()=>{
    console.log(`server is listening at ${env.PORT}`);
})


