const express = require("express")
const { protect } = require("../middleware/auth")
const { donate } = require("../controls/DonationController")
const router = express.Router()


router.post('/:campaignid',protect,donate)

module.exports=router