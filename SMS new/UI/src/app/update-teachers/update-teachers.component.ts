import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";

import { SharedService } from '../service/shared.service';
import { ToastrService } from 'ngx-toastr'
import { TEACHERS } from '../models/teacher.model';
@Component({
  selector: 'app-update-teachers',
  templateUrl: './update-teachers.component.html',
  styleUrls: ['./update-teachers.component.css']
})
export class UpdateTeachersComponent implements OnInit {
  
  fromForm: any;
  updateModel:any;
  constructor(public sharedService:SharedService,private toastr: ToastrService) { }

  ngOnInit(): void {
  }
//to update
onSubmit(form:NgForm){
  this.fromForm=form.value;
  this.updateModel={
    _id:this.sharedService.updateModel._id,
    name:this.fromForm.name,
    address:this.fromForm.address,
    gender:this.fromForm.gender,
    contact:this.fromForm.contact
  }
  this.sharedService.updateTeacher(this.updateModel).subscribe(
    res => {
      this.resetModels();
      this.toastr.success('Teacher updated!');
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
    address:'',
    gender:'',
    contact:''
  }
  this.sharedService.updateModel={
    _id:'',
    name:'',
    address:'',
    gender:'',
    contact:''
  }
}









}
