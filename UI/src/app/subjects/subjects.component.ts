import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";

import { SharedService } from '../service/shared.service';
import { ToastrService } from 'ngx-toastr'
import { SUBJECTS } from '../models/subject.model';

@Component({
  selector: 'app-subjects',
  templateUrl: './subjects.component.html',
  styleUrls: ['./subjects.component.css']
})
export class SubjectsComponent implements OnInit {
  
  model ={
    teacherId:'',
    name:'',
    subjectId:''
  };
  constructor(public sharedService:SharedService,private toastr: ToastrService) { }

  ngOnInit(): void {
    this.refreshSubjectList();
  }

  refreshSubjectList() {
    this.sharedService.getSubjectList().subscribe((res) => {
      this.sharedService.allSubjects = res as SUBJECTS[];
    });
  }

  //to add
onSubmit(form:NgForm){
  this.sharedService.postSubject(form.value).subscribe(
    res => {
      this.toastr.success('Subject added!');
      this.resetModel();
      this.refreshSubjectList();
    },
    err => {
      this.toastr.error(err.error);
    }
  );
}

//to delete
passDelete(_id: string){
  if (confirm('Are you sure to Delete Subject data ?') == true) {
    this.sharedService.deleteSubject(_id).subscribe((res) => {
    this.ngOnInit();
    this.toastr.success('Subject Deleted !');
    }, err => {
      this.toastr.error(err.error);
    },
    );
  }
}


passModel(_id: any,teacherId: any){
  this.sharedService.updateModelSubject={
    _id:_id,
    teacherId:teacherId
  }
}






resetModel(){
  this.model={
    teacherId:'',
    name:'',
    subjectId:''
  }
}



}
