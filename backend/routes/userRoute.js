const express = require("express");
const userData= require("../models/userModel");  

const router=express.Router();
  router.post("/", async (req, res) => {
    console.log(req.body);
    const { name, email, age } = req.body;
    try {
      const userAdded = await userData.create({
        name: name,
        email: email,
        age: age,
      });
      res.status(201).json(userAdded);
    } catch (error) {
      console.log(error);
      res.status(400).json({ error: error.message });
    }
  });

  //get
  router.get("/",async (req,res)=>{
    const showAll= await userData.find();
    try {
        res.status(201).json(showAll);
      } catch (error) {
        console.log(error);
        res.status(400).json({ error: error.message });
      }
    res.send("hello");
  })
 //single user
  router.get("/:id",async (req,res)=>{
    const {id}=req.params;
    const showAll= await userData.findById({_id:id});
    try {
        res.status(201).json(showAll);
      } catch (error) {
        console.log(error);
        res.status(400).json({ error: error.message });
      }
    res.send("hello");
  })
  //delete
  router.delete("/:id",async (req,res)=>{
    const {id}=req.params;
    const showAll= await userData.findByIdAndDelete({_id:id});
    try {
        res.status(201).json(showAll);
      } catch (error) {
        console.log(error);
        res.status(400).json({ error: error.message });
      }
    res.send("hello");
  })
  //update
  router.patch("/:id",async (req,res)=>{
    const {id}=req.params;
    const {name,email,age}=req.body;
    const updateUser= await userData.findByIdAndUpdate(id,req.body,{
        new:true,});
    try {
        res.status(201).json(updateUser);
      } catch (error) {
        console.log(error);
        res.status(400).json({ error: error.message });
      }
    res.send("hello");
  })



  module.exports=router;