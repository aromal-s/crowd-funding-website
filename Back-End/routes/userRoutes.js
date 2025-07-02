const express = require("express")
const router = express.Router()
const {protect} = require("../middleware/auth")
const {userRegister,userLogin} = require('../controls/UserController')
const { createCampaign, adminapprovedCampaign, usersubmittedCampaign } = require("../controls/CampaignController")

router.post('/register',userRegister)
router.post('/login',userLogin)
router.get('/userdashboard',protect, async (req,res) =>{
    res.status(200).json(req.user,{message:"user dashboard"})
})

router.post('/createcampaign',protect,createCampaign)
router.get('/adminapprovedcampaign',protect,adminapprovedCampaign)
router.get('/usersubmittedcampaign',protect,usersubmittedCampaign)



module.exports = router