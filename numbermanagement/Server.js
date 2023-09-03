const express=require("express");
const axios=require("axios");
const cors=require("cors");

const app=express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors());


app.get("/numbers",async (req,res)=>{
    const ans=req.query.url;
    console.log(ans);
    const data1=[];
    const data2=[];
    const data3=[];

    const url1=ans[0];
    const url2=ans[1];
    const url3=ans[2];


    ans.forEach(function(ele){
        
    });

    try{
        await axios.get(url1)
        .then(function(res){
            data1.push(res.data);
        });
    } catch{
        console.log("Error");
    }

    try{
        await axios.get(url2)
        .then(function(res){
            data1.push(res.data);
        });
    } catch{
        console.log("Error");
    }
   
    try{
        await axios.get(url3)
        .then(function(res){
            data3.push(res.data);
        });
    } catch{
        console.log("Error");
    }

    
    const data4=data1.concat(data2);
    const data5=data4.concat(data3);

    const uniquenumbers=data5.filter((number,index,array)=>{
        return array.indexOf(number)===index;
    });

    res.json(uniquenumbers);
    
});


app.listen(4000,(req,res)=>{
        console.log("Server is started");
});
