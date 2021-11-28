const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();


const ctrlStudent=require('../controllers/student.controller')
const ctrlTeacher=require('../controllers/teacher.controller')
const ctrlClass=require('../controllers/class.controller')
const ctrlSubject=require('../controllers/subject.controller')
const ctrlAttendence=require('../controllers/attendance.controller')
const ctrlExam=require('../controllers/examResult.controller')

//----------For student schema---------------
//For get all students
router.get('/findStudents',ctrlStudent.viewAll);
//For add new student
router.post('/addStudent', ctrlStudent.addStudent);
//For delete student
router.delete('/delStudent/:id',ctrlStudent.deleteStudent);
//For update student
router.put('/updateStudent',ctrlStudent.updateStudent);

//---------------For teacher schema-----------------
//For get all teachers
router.get('/findTeachers',ctrlTeacher.viewAllTeachers);
//For add new teacher
router.post('/addTeacher',ctrlTeacher.addTeacher);
//For delete teacher
router.delete('/delTeacher/:id',ctrlTeacher.deleteTeacher);
//For update teacher
router.put('/updateTeacher',ctrlTeacher.updateTeacher);


//---------------For class schema-----------------
//For get all classes
router.get('/findClases',ctrlClass.viewAllclases);
//For add new class
router.post('/addClass',ctrlClass.addClass);
//For delete class
router.delete('/delClass/:id',ctrlClass.deleteClass);
//For update class
router.put('/updateClass',ctrlClass.updateClass);

//---------------For subject schema-----------------------
//For get all subjects
router.get('/findSubjects',ctrlSubject.viewAllSubjects);
//For add new subject
router.post('/addSubject',ctrlSubject.addSubject);
//For delete subject
router.delete('/delSubject/:id',ctrlSubject.deleteSubject);
//For update subject
router.put('/updateSubject',ctrlSubject.updateSubject);

//----------------For attendence schema----------------
//For get all attendance
router.get('/findAttendance',ctrlAttendence.viewAllAttendance);
//For add new attendance
router.post('/addAttendance',ctrlAttendence.addAttendance);
//For delete attendance
router.delete('/delAttendance/:id',ctrlAttendence.deleteAttendance);
//For update attendance
router.put('/updateAttendance',ctrlAttendence.updateAttendance);

//-----------------For Exam results schema----------------------
//For get all result
router.get('/findResult',ctrlExam.viewAllresult);
//for delete specific result
router.delete('/delResult/:id',ctrlExam.deleteResult);
//For add new result
router.post('/addResult',ctrlExam.addResult);
//For update result
router.put('/updateResult',ctrlExam.updateResult);



module.exports = router;
