const express = require('express')
const router = express.Router()
const {createCampaign,approveCampaign, rejectCampaign,allCampaign} = require('../controls/CampaignController')
const { protect } = require('../middleware/auth')
const { adminonly } = require('../middleware/adminauth')
const { userLogin } = require('../controls/UserController')

//admin use only
router.post('/login',userLogin)
router.get('/admindashboard',protect, async (req,res) =>{
    res.status(200).json({message:"admin dashboard"})
})
router.post('/createcampaign',protect,createCampaign)
router.put('/:id/approve',protect,adminonly,approveCampaign)
router.put('/:id/reject',protect,adminonly,rejectCampaign)
router.get('/getcampaign',protect,allCampaign)

module.exports=router