import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";

import { SharedService } from '../service/shared.service';
import { ToastrService } from 'ngx-toastr'
@Component({
  selector: 'app-update-attendance',
  templateUrl: './update-attendance.component.html',
  styleUrls: ['./update-attendance.component.css']
})
export class UpdateAttendanceComponent implements OnInit {
  

  fromForm: any;
  updateModel:any;
  constructor(public sharedService:SharedService,private toastr: ToastrService) { }

  ngOnInit(): void {
  }



  //to update
  onSubmit(form:NgForm){
    this.fromForm=form.value;
    this.updateModel={
      _id:this.sharedService.updateModelAttendance._id,
      teacherId:this.fromForm.teacherId,
      present:this.fromForm.present,
      absent:this.fromForm.absent
    }
    this.sharedService.updateAttendence(this.updateModel).subscribe(
      res => {
        this.resetModels();
        this.toastr.success('Class updated!');
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
      present:'',
      absent:''
    }
    this.sharedService.updateModelAttendance={
      _id:'',
      teacherId:'',
      present:'',
      absent:''
    }
  }




}
