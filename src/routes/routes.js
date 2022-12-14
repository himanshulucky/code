const express=require("express")
const routes=express.Router()
const users=require("../models/user")

routes.get("/",(req,res)=>{
    res.render("home")
})

routes.post("/api/users",(req,res)=>{
    const newUser=new users({
        FirstName:req.body.firstName,
        LastName:req.body.lastName,
        Age:req.body.age,
        Batch:req.body.inlineRadioOptions
    })
    newUser.save(newUser).then(response=>{
        console.log("New user added")
        res.redirect("/")
    }).catch(e=>{
        res.send("Some error occured! Please try again")
    })
    
})

module.exports=routes