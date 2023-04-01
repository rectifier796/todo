const express=require("express");
const cors=require("cors");
var bodyParser = require('body-parser')
const mongoose=require('mongoose');

const todoModel=require("./model/model")
const PORT=4000;

require('dotenv').config();

const app=express();

db_link=`mongodb+srv://ayusgsingh796:${process.env.PASSWORD}@cluster0.8aintj3.mongodb.net/?retryWrites=true&w=majority`
mongoose.connect(db_link)
.then(function(db){
    console.log("Database Connected");
})
.catch(function(err){
    console.log(err);
})

app.use(cors());
app.use(express.json());
app.use( bodyParser.json() ); 


app.get("/getData",async(req,res)=>{
    let todoList=await todoModel.find();
    console.log(todoList);
    let arr=[];
    todoList.map((err)=>{
        let temp={
            id:err.id,
            name:err.name
        }
        arr.push(temp);
    })
   
    console.log(arr);
    res.send(arr);
})
  

app.post("/addData",async(req,res)=>{
    //console.log(req.body);
    await todoModel.deleteMany({})
    // req.body.map(async(err)=>{
    //     await todoModel.create(err)
    // })
    for(var i=0;i<req.body.length;i++){
        let temp={
            id:req.body[i].id,
            seq:i,
            name:req.body[i].name
        };
        await todoModel.create(temp);
    }


    res.send(req.body);
});



app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})