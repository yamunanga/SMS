const mongoose = require('mongoose');
const Teacher=mongoose.model('Teacher');
const Class=mongoose.model('Class');
const Subject=mongoose.model('Subject');

//For get all teachers
module.exports.viewAllTeachers=(req,res,next)=>{
    Teacher.find(
        (err,obj)=>{
            if (!obj){
                return res.status(404).json({ status: false, message: 'Can not find !' });
            }else{
                return res.send(obj);
            }
        }).sort({name: 'desc'})

}

//For add new teacher
module.exports.addTeacher=(req,res,next)=>{
    Teacher.findOne({teacherId: req.body.teacherId},
       (err,tea) => {
           if (!tea){
               var tea = new Teacher;
               tea.teacherId=req.body.teacherId;
               tea.name=req.body.name;
               tea.address=req.body.address;
               tea.gender=req.body.gender;
               tea.contact=req.body.contact;
               tea.save((err,doc)=>{
                   if(err){
                       return res.status(422).send([' Backend Eror!']);
                   }else{
                       return res.status(200).send(['Teacher aded !']);
                   }
               })
           }else{
               return res.status(422).send([' Duplicate Found!']);
           }
               
   })}

//For delete teacher
module.exports.deleteTeacher=(req,res,next)=>{
    Teacher.findOne({_id:req.params.id},
        (err,tea) => {
            if (!tea){
                return res.status(404).send(['Teacher not found !']);
            }else{
                Class.updateMany({ teacherId:tea.teacherId}, 
                    {teacherId:null,teacherName:null}, function (err, docs) {
                    if (!err){
                        Subject.updateMany({ teacherId:tea.teacherId}, 
                            {teacherId:null}, function (err, docs) {
                            if (!err){
                                Teacher.findOneAndRemove({_id:req.params.id},(err,tea)=>{
                                    if (!tea)
                                         return res.status(404).send(['Teacher detailes can not find !']);
                                    else{
                                        
                                        return res.status(200).send(['Teacher Deleted!']);
                                    }
                                }) 
                            }
                            else{
                                return res.status(422).send(['Eror from backend !']);
                            }
                        });
                    }
                    else{
                        return res.status(422).send(['Eror from backend !']);
                    }
                });
            }
                
     })
    
}











  //For update teacher
module.exports.updateTeacher=(req,res,next)=>{
    Teacher.findOneAndUpdate({_id:req.body._id},{
        name:req.body.name,
        address:req.body.address,
        gender:req.body.gender,
        contact:req.body.contact
    },function(err,doc){
         if(err){
           return res.status(422).send(['Eror from backend !']);
         }else{
            return res.status(200).send(['Teacher updated sucessfully !']);
         }
    })
}