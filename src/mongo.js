const mongoose=require("mongoose")

mongoose.connect("mongodb://localhost:27017/restaurantBEElogin")
.then(()=>{
    console.log('mongoose connected');
})
.catch(()=>{
    console.log('failed to connect');
})

const logInSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})

const LogInCollection=new mongoose.model('LogInCollection',logInSchema)

module.exports=LogInCollection