const Leave=require('../models/Leave');


const applyLeave=async (req,res)=>{
    const {employeeName,leaveType,startDate,endDate,reason}=req.body;
    try{
        const leavedata=new Leave({
            employeeName,leaveType,startDate,endDate,reason
        })
        await leavedata.save();
        res.status(201).json({message:"Leave appiled Sucessfully"});
    }catch(err){
        res.status(500).json({message:err.message});
    }
    
}


const allRequest = async (req, res) => {
    try {
        const allLeaves = await Leave.find();
        res.status(200).json({leaves:allLeaves});
    } catch (err) {
        res.status(500).json({ message: err.message || "Something went wrong" });
    }
}


const leaveStatus=async (req,res)=>{
    const {id}=req.params;
    const {status}=req.body;
    try{
        const updated=await Leave.findByIdAndUpdate(id,{status:status},{ new: true });
        res.status(200).json({message:"status updated successfully"});
    }catch(err){
        res.status(500).json({message:err.message});
    }
}

module.exports={applyLeave,allRequest,leaveStatus};


