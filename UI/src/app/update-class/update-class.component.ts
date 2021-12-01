import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";

import { SharedService } from '../service/shared.service';
import { ToastrService } from 'ngx-toastr'
@Component({
  selector: 'app-update-class',
  templateUrl: './update-class.component.html',
  styleUrls: ['./update-class.component.css']
})
export class UpdateClassComponent implements OnInit {
  
  fromForm: any;
  updateModel:any;
  constructor(public sharedService:SharedService,private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  //to update
onSubmit(form:NgForm){
  this.fromForm=form.value;
  this.updateModel={
    _id:this.sharedService.updateModelClaas._id,
    teacherId:this.fromForm.teacherId
  }
  this.sharedService.updateClass(this.updateModel).subscribe(
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
  }
  this.sharedService.updateModelClaas={
    _id:'',
    teacherId:'',
  }
}



}
