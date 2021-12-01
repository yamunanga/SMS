const mongoose = require('mongoose');
const Class=mongoose.model('Class');
const Teacher=mongoose.model('Teacher');
const Student=mongoose.model('Student');
const Exam=mongoose.model('Exam');
const Subject=mongoose.model('Subject');

//For get all result
module.exports.viewAllresult=(req,res,next)=>{
    Exam.find(
        (err,obj)=>{
            if (!obj){
                return res.status(404).json({ status: false, message: 'Can not find !' });
            }else{
                return res.send(obj);
            }
        }).sort({createdAt: 'desc'})

}

//for delete specific result
module.exports.deleteResult=(req,res,next)=>{
    Exam.findOneAndRemove({_id:req.params.id},(err,result)=>{
        if (!result)
             return res.status(404).send(['Detailes can not find !']);
        else{
            
            return res.status(200).send(['Deleted!']);
        }
    }) 
    
}

//For add new result
module.exports.addResult=(req,res,next)=>{
    Exam.findOne({subjectId: req.body.subjectId,studentId:req.body.studentId },
        (err,dres) => {
            if (dres){
                return res.status(422).send(['Duplicate Found !']);
            }else{
                Teacher.findOne({teacherId: req.body.teacherId},
                    (err,tea) => {
                        if (!tea){
                           return res.status(404).send(['Teacher Id can not find !']);
                        }else{

                                 Student.findOne({studentId: req.body.studentId},
                                     (err,stu) => {
                                         if (!stu){
                                             return res.status(404).send(['Student Id can not find !']);
                                         }else{
                                             Subject.findOne({subjectId: req.body.subjectId},
                                                 (err,sub) => {
                                                     if (!sub){
                                                         return res.status(404).send(['Subject Id can not find !']);
                                                     }else{
                                                         var resultn= new Exam;
                                                         resultn.studentId=req.body.studentId;
                                                         resultn.subjectId=req.body.subjectId;
                                                         resultn.result=req.body.result.toUpperCase();
                                                         resultn.semester=req.body.semester.toUpperCase();
                                                         resultn.class=stu.class.toUpperCase();
                                                         resultn.teacherId=req.body.teacherId;
                                                         
                                                         resultn.save((err,doc)=>{
                                                             if(err){
                                                                 return res.status(422).send([' Backend Eror!']);
                                                             }else{
                                                                 return res.status(200).send(['Result aded !']);
                                                             }
                                                         })  
                                                     }
                                                         
                                             })
                                         }
                                             
                                  })
                             
                  
                        }
                            
                }) 
            }
                
    })
}


   //For update result
   module.exports.updateResult=(req,res,next)=>{
    Teacher.findOne({teacherId: req.body.teacherId},
        (err,tea) => {
            if (!tea){
                return res.status(404).send(['Teacher id not found !']);
            }else{
                Exam.findOneAndUpdate({_id:req.body._id},{
                    teacherId:req.body.teacherId,
                    result:req.body.result.toUpperCase(),
                    semester:req.body.semester.toUpperCase()
                },function(err,doc){
                     if(err){
                       return res.status(422).send(['Eror from backend !']);
                     }else{
                        return res.status(200).send(['Result updated sucessfully !']);
                     }
                })
            }
                
     })
}

