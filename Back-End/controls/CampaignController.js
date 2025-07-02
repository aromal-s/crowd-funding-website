const Campaign = require('../models/Campaigns')

const createCampaign = async (req,res) =>{
    const {title,description,goalamount} = req.body
    const campaign = await Campaign.create({title,description,goalamount,creatorid:req.user._id,creatorname:req.user.name})
    res.status(200).json(campaign)
}

const approveCampaign = async(req,res)=>{
    const campaign = await Campaign.findById(req.params.id)
    if(!campaign) return res.status(400).json({message:"Campaign not found"})
    campaign.status="approved"
    await campaign.save()
    res.status(200).json(campaign,{message:"campaign approved"})
}

const rejectCampaign = async(req,res)=>{
    const campaign = await Campaign.findById(req.params.id)
    if(!campaign) return res.status(400).json({message:"Camapaign not found"})
    campaign.status = "rejected"
    await campaign.save()
    res.status(200).json(campaign,{message:"Campaign rejected"})
}

const allCampaign = async (req,res)=>{
    const campaign = await Campaign.find()
    res.status(200).json(campaign)
}

const adminapprovedCampaign = async (req,res) => {
    const campaign = await Campaign.find({status:"approved"})
    res.status(200).json(campaign)
}

const usersubmittedCampaign =  async (req,res) => {
    const campaign = await Campaign.find({creatorid:req.user._id})
    res.status(200).json(campaign)
}

module.exports = {createCampaign,approveCampaign,rejectCampaign,allCampaign,adminapprovedCampaign,usersubmittedCampaign}