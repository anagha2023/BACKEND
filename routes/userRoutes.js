var express = require('express');
var router = express.Router();
var userModel = require('../model/user');
//api for signup
router.post('/',(req,res)=>{
    try {
        userModel(req.body).save();
        res.status(200).send({message:"User added successfully"})
    } catch (error) {
        res.status(500).send({message:"Something went wrong"})
    }
})
//api for login
router.post('/login',async(req,res)=>{
    try {
        console.log(req.body)
        const user = await userModel.findOne({email:req.body.email})
if (!user){
    return res.send({message:"User not found"})
}
if(user.password === req.body.password){
    return res.status(200).send({message:`Welcome ${user.role}`,user})
}
return res.send({message:"Invalid password"})
    } catch (error) {
        res.status(500).send({message:"Something went wrong"})
    }
})
module.exports = router;
