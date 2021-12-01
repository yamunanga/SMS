const mongoose = require('mongoose');
const Class=mongoose.model('Class');
const Teacher=mongoose.model('Teacher');
const Attendance=mongoose.model('Attendance');

//For get all attendance
module.exports.viewAllAttendance=(req,res,next)=>{
    Attendance.find(
        (err,obj)=>{
            if (!obj){
                return res.status(404).json({ status: false, message: 'Can not find !' });
            }else{
                return res.send(obj);
            }
        }).sort({createdAt: 'desc'})

}

//For delete attendance
module.exports.deleteAttendance=(req,res,next)=>{
    Attendance.findOneAndRemove({_id:req.params.id},(err,atd)=>{
        if (!atd)
             return res.status(404).send(['Detailes can not find !']);
        else{
            
            return res.status(200).send(['Deleted!']);
        }
       }) 
    
  }
  
//For add new attendance
module.exports.addAttendance=(req,res,next)=>{
    Attendance.findOne({class: req.body.class.toUpperCase()},
       (err,atd) => {
           if (!atd){
               Class.findOne({name:req.body.class.toUpperCase()},
                   (err,cls) => {
                       if (!cls){
                           return res.status(404).send(['Class not found !']);
                       }else{
                        Teacher.findOne({teacherId:req.body.teacherId},
                        (err,tea) => {
                            if (!tea){
                                return res.status(404).send(['Teacher Id not found !']);
                            }else{
                                var atd = new Attendance;
                                atd.present=req.body.present;
                                atd.absent=req.body.absent;
                                atd.teacherId=req.body.teacherId
                                atd.class=req.body.class.toUpperCase();
                                atd.save((err,doc)=>{
                                    if(err){
                                        return res.status(422).send([' Backend Eror!']);
                                    }else{
                                        return res.status(200).send(['Aded !']);
                                    }
                                })
                            }
                                
                     })
                    }
                           
                })
           }else{
               return res.status(422).send([' Duplicate Found!']);
           }
               
    })
}
//For update attendance
module.exports.updateAttendance=(req,res,next)=>{
    Teacher.findOne({teacherId:req.body.teacherId},
        (err,tea) => {
            if (!tea){
                return res.status(404).send(['Teacher Id not found !']);
            }else{
                Attendance.findOneAndUpdate({_id:req.body._id},{
                    present:req.body.present,
                    absent:req.body.absent,
                    teacherId:req.body.teacherId
                },function(err,doc){
                     if(err){
                       return res.status(422).send(['Eror from backend !']);
                     }else{
                        return res.status(200).send(['updated sucessfully !']);
                     }
                })
            }
                
     })
}


