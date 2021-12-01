const mongoose = require('mongoose');
var classSchema = new mongoose.Schema({
    name:{
        type: String,
        required:true,
        unique : true,
        dropDups: true
    },
    teacherId:{
        type:Number,
        required:true
    }
},{timestamps:true});

mongoose.model('Class', classSchema);
