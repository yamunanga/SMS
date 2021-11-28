const mongoose = require('mongoose');
var teacherSchema = new mongoose.Schema({
    teacherId:{
        type:Number,
        required:true,
        unique : true,
        dropDups: true
    },
    name:{
        type: String,
        required:true
    },
    gender:{
        type: String,
        required:true
    },
    address:{
        type:String,
        required:true 
    },
    contact:{
        type:Number
    }
},{timestamps:true});

mongoose.model('Teacher', teacherSchema);
