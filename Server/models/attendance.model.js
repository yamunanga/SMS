const mongoose = require('mongoose');
var attendanceSchema = new mongoose.Schema({
  
    present:{
        type:Number,
        required:true,
    },
    absent:{
        type:Number,
        required:true,
    },
    class:{
        type: String,
        required:true,
    },
    teacherId:{
        type:Number,
        required:true
    }
},{timestamps:true});

mongoose.model('Attendance', attendanceSchema);
