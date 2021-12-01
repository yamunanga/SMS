const mongoose = require('mongoose');
var subjectSchema = new mongoose.Schema({
    subjectId:{
        type:Number,
        required:true
    },
    name:{
        type: String,
        required:true,
    },
    teacherId:{
        type:Number,
        required:true
    }
},{timestamps:true});

mongoose.model('Subject', subjectSchema);
