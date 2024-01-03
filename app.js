const express=require("express");
const app=express();
const path=require("path");
const cors=require("cors");
app.use(cors(
    {
        origin:'*'
    }));

const dotenv=require("dotenv");
dotenv.config({path:"/.env"});

const currencyApi=require("./routes/currencyRoute");
app.use(express.json());

app.use('/api',currencyApi);

//app.get("*",(req,res)=>{
//    res.status(201).json({
//        success: true,
//        message:"Currency Conversion Api Working fine!"
//    });
//})
//initalized frontend
app.use(express.static(path.join(__dirname,'./client/build')));

app.get("*",(req,res)=>{
    res.sendFile(path.resolve(__dirname,'./client/build/index.html'))
})


module.exports = app;