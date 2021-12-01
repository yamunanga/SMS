const mongoose = require('mongoose');
//use find and modify add
mongoose.connect(process.env.MONGODB_URI,{ useFindAndModify: false,useNewUrlParser: true, useUnifiedTopology: true }, (err) => {
    if (!err) { console.log('MongoDB connection succeeded.'); }
    else { console.log('Error in MongoDB connection : ' + JSON.stringify(err, undefined, 2)); }
});

require('../models/teacher.model');
require('../models/student.model');
require('../models/class.model');
require('../models/subject.model');
require('../models/attendance.model');
require('../models/examResult.model');