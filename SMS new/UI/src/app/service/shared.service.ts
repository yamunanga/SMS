import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import * as moment from 'moment';

import { TEACHERS } from '../models/teacher.model';
import { CLASES } from '../models/class.model';
import { STUDENTS } from '../models/student.model';
import { SUBJECTS } from '../models/subject.model';
import { ATTENDANCE } from '../models/attendance.model';
import { RESULT } from '../models/result.model';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  allTeachers: TEACHERS[] = [];
  allClases:CLASES[]=[];
  allStudents:STUDENTS[]=[];
  allSubjects:SUBJECTS[]=[];
  allAttendence:ATTENDANCE[]=[];
  allResult:RESULT[]=[];

  updateModel={
    _id:'',
    name:'',
    address:'',
    gender:'',
    contact:''
  }
  updateModelClaas={
    _id:'',
    teacherId:''
  }

  updateModelStudent={
    _id:'',
    name:'',
    dob:'',
    grade:'',
    class:'',
    address:'',
    gender:'',
  }
  updateModelSubject={
    _id:'',
    teacherId:'',
  }
  updateModelAttendance={
    _id:'',
    teacherId:'',
    present:'',
    absent:''
  }
  updateModelResult={
    _id:'',
    teacherId:'',
    result:'',
    semester:''
  }

  constructor(private http: HttpClient) { }



//For get all teachers
getTeachersList() {
  return this.http.get(environment.apiBaseUrl + '/findTeachers');
}

//For delete teacher
deleteTeacher(_id: string) {
  return this.http.delete(environment.apiBaseUrl + `/delTeacher/${_id}`);
}

//For add new teacher
postTeacher(newTeacher: any){
  return this.http.post(environment.apiBaseUrl+'/addTeacher',newTeacher);
}

//For update teacher
updateTeacher(data: any){
  return this.http.put(environment.apiBaseUrl + '/updateTeacher',data);
}

//For get all classes
getClasesList() {
  return this.http.get(environment.apiBaseUrl + '/findClases');
}
//For add new class
postClass(newClass: any){
  return this.http.post(environment.apiBaseUrl+'/addClass',newClass);
}
//For delete class

deleteClass(_id: string) {
  return this.http.delete(environment.apiBaseUrl + `/delClass/${_id}`);
}

//For update class
updateClass(data: any){
  return this.http.put(environment.apiBaseUrl + '/updateClass',data);
}

//For get all students
getStudentList() {
  return this.http.get(environment.apiBaseUrl + '/findStudents');
}
//For add new student
postStudent(newStudent: any){
  return this.http.post(environment.apiBaseUrl+'/addStudent',newStudent);
}
//For delete student
deleteStudent(_id: string) {
  return this.http.delete(environment.apiBaseUrl + `/delStudent/${_id}`);
}

//For update student
updateStudent(data: any){
  return this.http.put(environment.apiBaseUrl + '/updateStudent',data);
}


//For get all subjects
getSubjectList() {
  return this.http.get(environment.apiBaseUrl + '/findSubjects');
}
//For add new subject
postSubject(newSubject: any){
  return this.http.post(environment.apiBaseUrl+'/addSubject',newSubject);
}
//For delete subject
deleteSubject(_id: string) {
  return this.http.delete(environment.apiBaseUrl + `/delSubject/${_id}`);
}
//For update subject
updateSubject(data: any){
  return this.http.put(environment.apiBaseUrl + '/updateSubject',data);
}

//For get all attendence
getAttendenceList() {
  return this.http.get(environment.apiBaseUrl + '/findAttendance');
}
//For add new attendance
postAttendence(newAttendence: any){
  return this.http.post(environment.apiBaseUrl+'/addAttendance',newAttendence);
}
//For delete attendance
deleteAttendence(_id: string) {
  return this.http.delete(environment.apiBaseUrl + `/delAttendance/${_id}`);
}
//For update attendance
updateAttendence(data: any){
  return this.http.put(environment.apiBaseUrl + '/updateAttendance',data);
}

//For get all result
getResultList() {
  return this.http.get(environment.apiBaseUrl + '/findResult');
}
//for delete specific result
deleteResult(_id: string) {
  return this.http.delete(environment.apiBaseUrl + `/delResult/${_id}`);
}
//For add new result
postResult(newResult: any){
  return this.http.post(environment.apiBaseUrl+'/addResult',newResult);
}
//For update result
updateResult(data: any){
  return this.http.put(environment.apiBaseUrl + '/updateResult',data);
}






//Helpers
//for convert date coming from db
getDate(date: moment.MomentInput){
  var stillUtc = moment.utc(date).toDate();
  var currentTime= moment(stillUtc).local().format('MMMM Do YYYY, h:mm:ss a');
  return currentTime;
}



}
