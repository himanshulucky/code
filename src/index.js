const express=require("express")
const bodyParser=require("body-parser")
const hbs=require("hbs")
const mongoose=require("mongoose");
const routes=require("./routes/routes")

const app=express()

app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())
app.use("",routes)

app.set("view engine","hbs");
app.set("views","views");

mongoose.set('strictQuery', true);
mongoose.connect("mongodb+srv://yoga:yogaPassword@cluster0.yfyx3hb.mongodb.net/?retryWrites=true&w=majority",(err,coll)=>{
    if(err){
        console.error("Database not connected");
        process.exit(1);
    }
    console.log("Database connected successfully");
}); 

app.listen(3000,()=>{
    console.log("Server running on http://localhost:3000");
});