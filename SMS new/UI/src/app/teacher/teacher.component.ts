import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";

import { SharedService } from '../service/shared.service';
import { ToastrService } from 'ngx-toastr'
import { TEACHERS } from '../models/teacher.model';

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.css']
})
export class TeacherComponent implements OnInit {

  constructor(public sharedService:SharedService,private toastr: ToastrService) { }

  model ={
    teacherId:'',
    name:'',
    address:'',
    gender:'',
    contact:''
  };
  
  
ngOnInit(): void {
   this.refreshTeachersList()
   this.resetModel()
  }

refreshTeachersList() {
    this.sharedService.getTeachersList().subscribe((res) => {
      this.sharedService.allTeachers = res as TEACHERS[];
    });
  }

//to add
onSubmit(form:NgForm){
    this.sharedService.postTeacher(form.value).subscribe(
      res => {
        this.toastr.success('Teacher added!');
        this.resetModel();
        this.refreshTeachersList();
      },
      err => {
        this.toastr.error(err.error);
      }
    );
  }

  //to delete
passDelete(_id: string){
    if (confirm('Are you sure to Delete Teacher data ?') == true) {
      this.sharedService.deleteTeacher(_id).subscribe((res) => {
      this.ngOnInit();
      this.toastr.success('Teacher Deleted !');
      }, err => {
        this.toastr.error(err.error);
      },
      );
    }
}


passModel(_id: any,name: any,gender: any,address: any,contact:any){
  this.sharedService.updateModel={
    _id:_id,
    name:name,
    address:address,
    gender:gender,
    contact:contact
  }
}





resetModel(){
  this.model={
    teacherId:'',
    name:'',
    address:'',
    gender:'',
    contact:''
  }
}
}
