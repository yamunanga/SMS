const mongoose = require('mongoose');
const Class=mongoose.model('Class');
const Teacher=mongoose.model('Teacher');
const Student=mongoose.model('Student');

//For get all classes
module.exports.viewAllclases=(req,res,next)=>{
    Class.find(
        (err,obj)=>{
            if (!obj){
                return res.status(404).json({ status: false, message: 'Can not find !' });
            }else{
                return res.send(obj);
            }
        }).sort({name: 'desc'})

}

//For add new class
module.exports.addClass=(req,res,next)=>{
    Class.findOne({name: req.body.name.toUpperCase()},
       (err,cls) => {
           if (!cls){
            Teacher.findOne({teacherId: req.body.teacherId},
                (err,tea) => {
                    if (!tea){
                        return res.status(404).send(['Teacher not found !']);
                    }else{
                        var cls = new Class;
                        cls.name=req.body.name.toUpperCase();
                        cls.teacherId=req.body.teacherId;
                        cls.save((err,doc)=>{
                            if(err){
                                return res.status(422).send([' Backend Eror!']);
                            }else{
                                return res.status(200).send(['Class aded !']);
                            }
                        })
                    }
                        
             })
           }else{
               return res.status(422).send([' Duplicate Found!']);
           }
               
    })

}

//For update class
module.exports.updateClass=(req,res,next)=>{
    Teacher.findOne({teacherId: req.body.teacherId},
        (err,tea) => {
            if (!tea){
                return res.status(404).send(['Teacher id not found !']);
            }else{
                Class.findOneAndUpdate({_id:req.body._id},{
                    teacherId:req.body.teacherId,
                },function(err,doc){
                     if(err){
                       return res.status(422).send(['Eror from backend !']);
                     }else{
                        return res.status(200).send(['Class updated sucessfully !']);
                     }
                })
            }
                
     })
}

//For delete class
module.exports.deleteClass=(req,res,next)=>{
    Class.findOne({_id:req.params.id},
    (err,cls) => {
        if (!cls){
            return res.status(404).send(['Class not found !']);
        }else{
            Student.updateMany({class:cls.name}, 
                {class:null}, function (err, docs) {
                if (!err){
                    Class.findOneAndRemove({_id:req.params.id},(err,cls)=>{
                        if (!cls)
                             return res.status(404).send(['Class detailes can not find !']);
                        else{
                            
                            return res.status(200).send(['Class Deleted!']);
                        }
                       }) 
                }
                else{
                    return res.status(422).send(['Eror from backend !']);
                }
            });
        }
            
 })
    
}


