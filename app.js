const express=require("express");
const app=express();

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

app.get("*",(req,res)=>{
    res.status(201).json({
        success: true,
        message:"Currency Conversion Api Working fine!"
    });
})


module.exports = app;