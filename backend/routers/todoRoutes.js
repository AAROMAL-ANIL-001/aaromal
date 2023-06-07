const express = require('express');
const router=express.Router()
const todoModals=require('../models/todoModals')

router.post('/api/todo',async(req,res)=>{
    console.log("yolo",req.body)
    const addtodo= new todoModals({
        name:req.body.name,
        email:req.body.email,
        password:req.body.password
    })
    const saveItem=await addtodo.save()
    res.status(200).json(saveItem)

})
router.post("/api/login", async (req, res) => {
    const { email, password } = req.body;
    console.log(email,password)
  
    try {
      const user = await todoModals.findOne({ email });
  
      if (!user) {
        return res.status(400).json({ message: "Email not found" });
      }
  
      if (password !== user.password) {
        return res.status(400).json({ message: "Invalid password" });
      }
  
      // Successful login
      res.status(200).json({user, message: "Login successful" });
      console.log("sucess")
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Internal server error" });
    }
  });



router.get('/api/todo',async(req,res)=>{
    const getTodo=await todoModals.find({})
    res.status(200).json(getTodo)
})

router.put('/api/todo/:id',async(req,res)=>{
    const putTodo= await todoModals.findByIdAndUpdate(req.params.id,{$set:req.body})
    res.json("todo updated")
})

router.delete('/api/todo/:id',async(req,res)=>{
    const deleteTodo=await todoModals.findByIdAndDelete(req.params.id)
res.json("deleted")
})


module.exports=router