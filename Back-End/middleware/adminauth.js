const adminonly = (req,res,next)=>{
    if(req.user &&  req.user.isadmin==true)
    {
        next();
    }
    else{
        res.status(400).json({message:"Admin access only"})
    }

}
module.exports={adminonly}