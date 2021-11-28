const mongoose = require('mongoose');
var studentSchema = new mongoose.Schema({
    studentId:{
        type:Number,
        required:true,
        unique : true,
        dropDups: true
    },
    gender:{
        type: String,
        required:true
    },
    dob:{
        type: String,
        required:true
    },
    name:{
        type: String,
        required:true
    },
    grade:{
        type:Number,
        required:true
    },
    class:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true 
    }
},{timestamps:true});

mongoose.model('Student', studentSchema);
