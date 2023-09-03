const express=require("express");
const axios=require("axios");
const cors=require("cors");
const { default: axios } = require("axios");

const app=express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors());


app.get("/",(req,res)=>{
    res.send("<h1>Hii</h1>");
});

    app.listen(5000,(req,res)=>{
        console.log("Server is started");
    });
