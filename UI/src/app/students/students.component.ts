import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";

import { SharedService } from '../service/shared.service';
import { ToastrService } from 'ngx-toastr'
import { STUDENTS } from '../models/student.model';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {
 
  model ={
    studentId:'',
    name:'',
    dob:'',
    grade:'',
    class:'',
    address:'',
    gender:'',
    
  };
  constructor(public sharedService:SharedService,private toastr: ToastrService) { }

  ngOnInit(): void {
    this.refreshStudentsList();
    this.resetModel();
  }

  refreshStudentsList() {
    this.sharedService.getStudentList().subscribe((res) => {
      this.sharedService.allStudents = res as STUDENTS[];
    });
  }
//to add
onSubmit(form:NgForm){
  this.sharedService.postStudent(form.value).subscribe(
    res => {
      this.toastr.success('Student added!');
      this.resetModel();
      this.refreshStudentsList();
    },
    err => {
      this.toastr.error(err.error);
    }
  );
}
//to delete
passDelete(_id: string){
  if (confirm('Are you sure to Delete Student data ?') == true) {
    this.sharedService.deleteStudent(_id).subscribe((res) => {
    this.ngOnInit();
    this.toastr.success('Student Deleted !');
    }, err => {
      this.toastr.error(err.error);
    },
    );
  }
}

passModel(_id: any,name: any,dob:any,gender: any,grade:any,uclass:any,address: any){
  this.sharedService.updateModelStudent={
    _id:_id,
    name:name,
    dob:dob,
    grade:grade,
    class:uclass,
    address:address,
    gender:gender,
  }
}



  resetModel(){
    this.model={
      studentId:'',
      name:'',
      dob:'',
      grade:'',
      class:'',
      address:'',
      gender:'',
    }
  }

}
