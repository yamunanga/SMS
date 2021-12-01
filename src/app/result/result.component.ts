import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";

import { SharedService } from '../service/shared.service';
import { ToastrService } from 'ngx-toastr'
import { RESULT } from '../models/result.model';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
  
  model ={
    teacherId:'',
    studentId:'',
    subjectId:'',
    result:'',
    semester:''
  };


  constructor(public sharedService:SharedService,private toastr: ToastrService) { }

  ngOnInit(): void {
    this.refreshResultList();
  }

  refreshResultList() {
    this.sharedService.getResultList().subscribe((res) => {
      this.sharedService.allResult = res as RESULT[];
    });
  }

//to add
onSubmit(form:NgForm){
  this.sharedService.postResult(form.value).subscribe(
    res => {
      this.toastr.success('Result added!');
      this.resetModel();
      this.refreshResultList();
    },
    err => {
      this.toastr.error(err.error);
    }
  );
}


//to delete
passDelete(_id: string){
  if (confirm('Are you sure to Delete this data ?') == true) {
    this.sharedService.deleteResult(_id).subscribe((res) => {
    this.ngOnInit();
    this.toastr.success('Deleted !');
    }, err => {
      this.toastr.error(err.error);
    },
    );
  }
}

passModel(_id: any,teacherId: any,semester:any,result:any){
  this.sharedService.updateModelResult={
    _id:_id,
    teacherId:teacherId,
    result:result,
    semester:semester
  }
}





resetModel(){
  this.model={
    teacherId:'',
    studentId:'',
    subjectId:'',
    result:'',
    semester:''
  }
}

}
