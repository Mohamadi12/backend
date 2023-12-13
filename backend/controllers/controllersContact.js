const express=require('express')
const contactSchema=require('../model/contact')
exports.getAll=async (req,res)=>{
    const contacts=await contactSchema.find()
    res.status(200).json({msg:'Voici la liste des contacts',contacts})
    try {
        
    } catch (err) {
        console.log(err)
    }
}

exports.ajout=async (req,res)=>{
    try {
        const newcontact=new contactSchema(req.body)
        await newcontact.save()
        res.status(200).json({msg:'Contact dans notre database',newcontact})
    } catch (err) {
        console.log(err)  
    }
}

exports.update=async (req,res)=>{
    try {
        const {id}=req.params
        const updatedcontact=await contactSchema.findByIdAndUpdate(id,{$set:{...req.body}})
        res.status(200).json({msg:'Updated user'})
    } catch (err) {
        console.log(err)
    }
}

exports.remove=async (req,res)=>{
    try {
        const {id}=req.params
        const removecontact=await contactSchema.findByIdAndDelete(id)
        res.status(200).json({msg:'Remove user'})
    } catch (err) {
        console.log(err)
    }
}