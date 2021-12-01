const mongoose = require('mongoose');
var examSchema = new mongoose.Schema({

    studentId:{
        type:Number,
        required:true
    },
    subjectId:{
        type:Number,
        required:true
    },
    class:{
        type: String,
    },
    result:{
        type: String,
        required:true,
    },
    semester:{
        type: String,
        required:true,
    },
    teacherId:{
        type:Number,
        required:true
    }
},{timestamps:true});

mongoose.model('Exam', examSchema);
