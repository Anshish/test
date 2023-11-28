require('dotenv').config();
const express=require('express');
const app=express();

app.get('/',(req,res)=>{
    res.send("hi");
})

app.get('/login',(req,res)=>{
    res.send("login done");
})

app.listen(process.env.PORT,()=>{
    console.log(`server is running on port ${process.env.PORT}`);
})