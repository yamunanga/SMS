import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";

import { SharedService } from '../service/shared.service';
import { ToastrService } from 'ngx-toastr'
import { ATTENDANCE } from '../models/attendance.model';

@Component({
  selector: 'app-attendance',
  templateUrl: './attendance.component.html',
  styleUrls: ['./attendance.component.css']
})
export class AttendanceComponent implements OnInit {

  model ={
    teacherId:'',
    class:'',
    present:'',
    absent:''
  };

  constructor(public sharedService:SharedService,private toastr: ToastrService) { }

  ngOnInit(): void {
    this.refreshAttendanceList();
  }

  refreshAttendanceList() {
    this.sharedService.getAttendenceList().subscribe((res) => {
      this.sharedService.allAttendence = res as ATTENDANCE[];
    });
  }

//to add
onSubmit(form:NgForm){
  console.log("dd");
  this.sharedService.postAttendence(form.value).subscribe(
    res => {
      this.toastr.success('Data added!');
      this.resetModel();
      this.refreshAttendanceList();
    },
    err => {
      this.toastr.error(err.error);
    }
  );
}

//to delete
passDelete(_id: string){
  if (confirm('Are you sure to Delete this data ?') == true) {
    this.sharedService.deleteAttendence(_id).subscribe((res) => {
    this.ngOnInit();
    this.toastr.success('Deleted !');
    }, err => {
      this.toastr.error(err.error);
    },
    );
  }
}

passModel(_id: any,teacherId: any,present:any,absent:any){
  this.sharedService.updateModelAttendance={
    _id:_id,
    teacherId:teacherId,
    present:present,
    absent:absent
  }
}

resetModel(){
  this.model={
    teacherId:'',
    class:'',
    present:'',
    absent:''
  }
}

}
