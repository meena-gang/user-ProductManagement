const express = require('express');
const userModel = require('../model/user.model')
const userRouter = express.Router();

userRouter.post('/data', async(req,res) => {
    try {
        const{name,email,password,phone} = req.body;
        const existingUser = await userModel.findOne({email});
        if(existingUser){
            return res.status(400).json({msg:"User already exists"});
        }
        const user = new userModel({name,email,password,phone});
        await user.save();
        res.status(200).send(`data recived ${user}`);
    } catch{
        res.status(404).send(`data not recived ${error}`);
    }
});

userRouter.get('/getData', async(req,res) => {
    try{
        const data = await userModel.find();
        res.status(200).send(data);
    } catch{
        res.status(404).send(`data not found ${error}`);
    }
})

userRouter.patch('/updateData/:id', async(req,res) => {
    try{
        const {id} = req.params;
        const data = req.body;
        const updateData = await userModel.findByIdAndUpdate({_id:id},data);
        res.status(200).send(updateData);
    } catch(error){
        res.status(404).send(`data not updated ${error}`);
    }
})

userRouter.delete('/deleteData/:id', async(req,res) => {
    try{
        const {id} = req.params;
       
        const deleletedData = await userModel.findByIdAndDelete({_id:id});
        res.status(200).send(deleletedData);
    } catch(error){
        res.status(404).send(`data not updated ${error}`);
    }
})

module.exports = userRouter;