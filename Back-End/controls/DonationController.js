const Campaign = require("../models/Campaigns")
const Donation = require("../models/Donation")

const donate = async(req,res)=>{
    const {amount} = req.body
    const campaignid =req.params.campaignid

    try {
        const campaign = await Campaign.findById(campaignid)
        if(!campaign) return res.status(200).json({message:"Campaign not found"})
        campaign.raisedamount += Number(amount)
        await campaign.save()

        const donation = await Donation.create({donatorid:req.user._id,campaignid:campaignid,amount:amount})
        res.status(200).json({message:"Donated successfully",donation,updatedamount:campaign.raisedamount})
    } catch (error) {
        return res.status(400).json({message:error})
    }
}

module.exports={donate}
