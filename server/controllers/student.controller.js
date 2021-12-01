const mongoose = require('mongoose');
const Student=mongoose.model('Student');
const Class=mongoose.model('Class');

//For get all students
module.exports.viewAll=(req,res,next)=>{
    Student.find(
        (err,obj)=>{
            if (!obj){
                return res.status(404).json({ status: false, message: 'Can not find !' });
            }else{
                return res.send(obj);
            }
        }).sort({name: 'desc'})

}

//For add new student
module.exports.addStudent=(req,res,next)=>{
 Student.findOne({studentId: req.body.studentId},
    (err,stu) => {
        if (!stu){
            Class.findOne({name:req.body.class.toUpperCase()},
                (err,cls) => {
                    if (!cls){
                        return res.status(404).send(['Class not found !']);
                    }else{
                        var stu = new Student;
                        stu.studentId=req.body.studentId;
                        stu.name=req.body.name;
                        stu.grade=req.body.grade;
                        stu.address=req.body.address;
                        stu.dob=req.body.dob;
                        stu.gender=req.body.gender;
                        stu.class=req.body.class.toUpperCase();
                        stu.save((err,doc)=>{
                            if(err){
                                return res.status(422).send([' Backend Eror!']);
                            }else{
                                return res.status(200).send(['Student aded !']);
                            }
                        })
                    }
                        
             })
        }else{
            return res.status(422).send([' Duplicate Found!']);
        }
            
 })
}

           

//For delete student
module.exports.deleteStudent=(req,res,next)=>{
    Student.findOneAndRemove({_id:req.params.id},(err,stu)=>{
        if (!stu)
             return res.status(404).send(['Student detailes can not find !']);
        else{
            
            return res.status(200).send(['Student Deleted!']);
        }
       }) 
    
  }
  
//For update student
module.exports.updateStudent=(req,res,next)=>{
    Class.findOne({name:req.body.class.toUpperCase()},
                (err,cls) => {
                    if (!cls){
                        return res.status(404).send(['Class not found !']);
                    }else{
                        Student.findOneAndUpdate({_id:req.body._id},{
                            name:req.body.name,
                            grade:req.body.grade,
                            address:req.body.address,
                            dob:req.body.dob,
                            gender:req.body.gender,
                            class:req.body.class.toUpperCase()
                        },function(err,doc){
                             if(err){
                               return res.status(422).send(['Eror from backend !']);
                             }else{
                                return res.status(200).send(['Student updated sucessfully !']);
                             }
                        })
                    }
                        
             })
}



//To get count of students in specific class
function toUpdateCount(bdyCls){
    Class.findOne({name:bdyCls},
        (err,cls) => {
            if (cls)
                Class.findOneAndUpdate({name:bdyCls},{
                    studentCount:cls.studentCount+1
                },function(err,doc){
                    if(err){
                        return res.status(422).send(['Eror from backend !']);
                    }
                })
            
        }
    );
}