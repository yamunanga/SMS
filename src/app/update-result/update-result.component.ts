import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";

import { SharedService } from '../service/shared.service';
import { ToastrService } from 'ngx-toastr'
@Component({
  selector: 'app-update-result',
  templateUrl: './update-result.component.html',
  styleUrls: ['./update-result.component.css']
})
export class UpdateResultComponent implements OnInit {
  

  fromForm: any;
  updateModel:any;
  constructor(public sharedService:SharedService,private toastr: ToastrService) { }

  ngOnInit(): void {
  }


 //to update
 onSubmit(form:NgForm){
  this.fromForm=form.value;
  this.updateModel={
    _id:this.sharedService.updateModelResult._id,
    teacherId:this.fromForm.teacherId,
    result:this.fromForm.result,
    semester:this.fromForm.semester
  }
  this.sharedService.updateResult(this.updateModel).subscribe(
    res => {
      this.resetModels();
      this.toastr.success('Result updated!');
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
    result:'',
    semester:''
  }
  this.sharedService.updateModelResult={
    _id:'',
    teacherId:'',
    result:'',
    semester:''
  }
}


}
