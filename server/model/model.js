const mongoose=require("mongoose");

const todoSchema=mongoose.Schema({
    id:{
        type:String,
        required:true
    },
    seq:{
        type:Number,
        required:true
    },
    name:{
        type:String,
        required:true
    }
})
const todoModel=mongoose.model('todoModel',todoSchema);
module.exports=todoModel;