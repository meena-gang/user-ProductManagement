const express = require('express');
const productModel = require('../model/product.model')
const productRouter = express.Router();

productRouter.post('/data', async(req,res) => {
    try {
        const{name,price,description} = req.body;
        const existingProduct = await productModel.findOne({name});
        if(existingProduct){
            return res.status(400).json({msg:"Product already exists"});
        }
        const product = new productModel({name,price,description});
        await product.save();
        res.status(200).send(`data recived ${product}`);
    } catch{
        res.status(404).send(`data not recived ${error}`);
    }
});

productRouter.get('/getData', async(req,res) => {
    try{
        const data = await productModel.find();
        res.status(200).send(data);
    } catch{
        res.status(404).send(`data not found ${error}`);
    }
})

productRouter.patch('/updateData/:id', async(req,res) => {
    try{
        const {id} = req.params;
        const data = req.body;
        const updateData = await productModel.findByIdAndUpdate({_id:id},data);
        res.status(200).send(updateData);
    } catch(error){
        res.status(404).send(`data not updated ${error}`);
    }
})

productRouter.delete('/deleteData/:id', async(req,res) => {
    try{
        const {id} = req.params;
       
        const deleletedData = await productModel.findByIdAndDelete({_id:id});
        res.status(200).send(deleletedData);
    } catch(error){
        res.status(404).send(`data not updated ${error}`);
    }
})

module.exports = productRouter;