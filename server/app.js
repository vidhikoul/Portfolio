require("dotenv").config();
const express=require("express");
const app=express();
const cors=require("cors");
const port=6002;
require("./db/conn");
app.use(cors());
app.use(express.json());
app.get("/",(req,res)=>
{
    res.status(200).json("server starts");
});
app.listen(port,()=>{
    console.log("server start");
})