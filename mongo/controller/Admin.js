// const { response } = require('express');
const Train=require('../model/Admin');

exports .AddTrain=async(req,res)=>
{
    try{
        const AddTrain=await Train.create(req.body);
        return res.status(201).json(
            {
                data:AddTrain
            }
        )
        }
        catch(error){
            return res.status(500).json(
                {
                    msg:'Internet error'
                }
            )
        }
}
exports .AllTrain=async(req,res)=>
{
    try{
        console.log("hk");
        const All=await Train.find()
        console.log(All)
        return res.status(201).json(
            {
                data:All
            }
        )
    }
    catch(error){
        return res.status(500).json(
            {
                msg:'Internet error'
            }
        )
    }
}
exports.update=async(req,res)=>
{
    try{
        console.log(req.params.id)
        const UpdateFlight=await Train.findById(req.params.id)
        if(UpdateFlight)
        {
            
            var temp={name:UpdateFlight.name,From:UpdateFlight.From,To:UpdateFlight.To,Date:UpdateFlight.Date,Time:UpdateFlight.Time,SeatAvailable:req.params.list, BusinessClass:UpdateFlight.BusinessClass,Amount:UpdateFlight.Amount}
           const updated= await Train.findByIdAndUpdate(req.params.id,temp)
           res.send(updated);
            //  res.send("hello")
        }
    }
    catch(error){
        return res.status(500).json(
            {
                
            }
        )
    }
}
exports.updateClass=async(req,res)=>
{
    try{
        console.log(req.params.id)
        const UpdateTrain=await Train.findById(req.params.id)
        if(UpdateTrain)
        {
            
            var temp={name:UpdateTrain.name,From:UpdateTrain.From,To:UpdateTrain.To,Date:UpdateTrain.Date,Time:UpdateTrain.Time,SeatAvailable:UpdateTrain.SeatAvailable, BusinessClass:req.params.list,Amount:UpdateTrain.Amount}
           const updated= await Train.findByIdAndUpdate(req.params.id,temp)
           res.send(updated);
            //  res.send("hello")
        }
    }
    catch(error){
        return res.status(500).json(
            {
                
            }
        )
    }
}