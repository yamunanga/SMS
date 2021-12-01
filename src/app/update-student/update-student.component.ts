import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";

import { SharedService } from '../service/shared.service';
import { ToastrService } from 'ngx-toastr'
import { STUDENTS } from '../models/student.model';

@Component({
  selector: 'app-update-student',
  templateUrl: './update-student.component.html',
  styleUrls: ['./update-student.component.css']
})
export class UpdateStudentComponent implements OnInit {
  
  fromForm: any;
  updateModel:any;
  constructor(public sharedService:SharedService,private toastr: ToastrService) { }

  ngOnInit(): void {
  }

 
//to update
onSubmit(form:NgForm){
  this.fromForm=form.value;
  this.updateModel={
    _id:this.sharedService.updateModelStudent._id,
    name:this.fromForm.name,
    address:this.fromForm.address,
    gender:this.fromForm.gender,
    dob:this.fromForm.dob,
    grade:this.fromForm.grade,
    class:this.fromForm.class
  }
  this.sharedService.updateStudent(this.updateModel).subscribe(
    res => {
      this.resetModels();
      this.toastr.success('Student updated!');
    },
    err => {
      this.toastr.error(err.error);
    }
  );
}

resetModels(){
  this.updateModel={
    _id:'',
    name:'',
    dob:'',
    grade:'',
    class:'',
    address:'',
    gender:'',
  }
  this.sharedService.updateModelStudent={
    _id:'',
    name:'',
    dob:'',
    grade:'',
    class:'',
    address:'',
    gender:'',
  }
}


}