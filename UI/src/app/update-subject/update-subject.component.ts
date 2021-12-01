import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";

import { SharedService } from '../service/shared.service';
import { ToastrService } from 'ngx-toastr'

@Component({
  selector: 'app-update-subject',
  templateUrl: './update-subject.component.html',
  styleUrls: ['./update-subject.component.css']
})
export class UpdateSubjectComponent implements OnInit {
  
  fromForm: any;
  updateModel:any;
  constructor(public sharedService:SharedService,private toastr: ToastrService) { }

  ngOnInit(): void {
  }

//to update
onSubmit(form:NgForm){
  this.fromForm=form.value;
  this.updateModel={
    _id:this.sharedService.updateModelSubject._id,
    teacherId:this.fromForm.teacherId,
    name:this.fromForm.name
  }
  this.sharedService.updateSubject(this.updateModel).subscribe(
    res => {
      this.resetModels();
      this.toastr.success('Subject updated!');
    },
    err => {
      this.toastr.error(err.error);
    }
  );
}


resetModels(){
  this.updateModel={
    _id:'',
    teacherId:'',
  }
  this.sharedService.updateModelSubject={
    _id:'',
    teacherId:'',
  }
}













}
