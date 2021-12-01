const mongoose = require('mongoose');

const Subject=mongoose.model('Subject');
const Teacher=mongoose.model('Teacher');


//For get all subjects
module.exports.viewAllSubjects=(req,res,next)=>{
    Subject.find(
        (err,obj)=>{
            if (!obj){
                return res.status(404).json({ status: false, message: 'Can not find !' });
            }else{
                return res.send(obj);
            }
        }).sort({name: 'desc'})

}

//For add new subject

module.exports.addSubject=(req,res,next)=>{
    Teacher.findOne({teacherId: req.body.teacherId},
       (err,tea) => {
           if (tea){
            Subject.findOne({teacherId: req.body.teacherId},
                (err,stea) => {
                    if (stea){
                      if(stea.subjectId == req.body.subjectId){
                        return res.status(422).send(['Duplicate Found !']);
                      }else{
                        var sub = new Subject;
                        sub.subjectId=req.body.subjectId;
                        sub.teacherId=req.body.teacherId;
                        sub.name=req.body.name;
                        sub.save((err,doc)=>{
                            if(err){
                                return res.status(422).send([' Backend Eror!']);
                            }else{
                                return res.status(200).send(['Subject aded !']);
                            }
                        })
                      }
                    }else{
                           
                            var sub = new Subject;
                            sub.subjectId=req.body.subjectId;
                            sub.teacherId=req.body.teacherId;
                            sub.name=req.body.name;
                            sub.save((err,doc)=>{
                                if(err){
                                    return res.status(422).send([' Backend Eror!']);
                                }else{
                                    return res.status(200).send(['Subject aded !']);
                                }
                            })
                    }
                        
            })
           }else{
               return res.status(404).send(['Teacher not found!']);
           }
               
   })
}













//for delete specific subject
module.exports.deleteSubject=(req,res,next)=>{
    Subject.findOneAndRemove({_id:req.params.id},(err,sub)=>{
        if (!sub)
             return res.status(404).send(['subject detailes can not find !']);
        else{
            
            return res.status(200).send(['Subject Deleted!']);
        }
    }) 
    
}

//for update specific subject
module.exports.updateSubject=(req,res,next)=>{
    Teacher.findOne({teacherId: req.body.teacherId},
        (err,tea) => {
            if (!tea){
                return res.status(404).send(['Teacher id not found !']);
            }else{
                Subject.findOneAndUpdate({_id:req.body._id},{
                    teacherId:req.body.teacherId,
                },function(err,doc){
                     if(err){
                       return res.status(422).send(['Eror from backend !']);
                     }else{
                        return res.status(200).send(['Subject updated sucessfully !']);
                     }
                })
            }
                
     })
}