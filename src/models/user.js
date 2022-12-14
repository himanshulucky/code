const mongoose=require("mongoose")

var schema=new mongoose.Schema({
    FirstName:String,
    LastName:String,
    Age:String,
    Batch:String
})

const users=mongoose.model('users',schema);
module.exports=users;