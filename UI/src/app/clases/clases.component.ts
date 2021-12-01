import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";

import { SharedService } from '../service/shared.service';
import { ToastrService } from 'ngx-toastr'
import { CLASES } from '../models/class.model';

@Component({
  selector: 'app-clases',
  templateUrl: './clases.component.html',
  styleUrls: ['./clases.component.css']
})
export class ClasesComponent implements OnInit {
  model ={
    teacherId:'',
    name:'',
  };
  constructor(public sharedService:SharedService,private toastr: ToastrService) { }

  ngOnInit(): void {
    this.refreshClassList();
  }

  refreshClassList() {
    this.sharedService.getClasesList().subscribe((res) => {
      this.sharedService.allClases = res as CLASES[];
    });
  }

//to add
onSubmit(form:NgForm){
  this.sharedService.postClass(form.value).subscribe(
    res => {
      this.toastr.success('Class added!');
      this.resetModel();
      this.refreshClassList();
    },
    err => {
      this.toastr.error(err.error);
    }
  );
}
//to delete
passDelete(_id: string){
  if (confirm('Are you sure to Delete Class data ?') == true) {
    this.sharedService.deleteClass(_id).subscribe((res) => {
    this.ngOnInit();
    this.toastr.success('Class Deleted !');
    }, err => {
      this.toastr.error(err.error);
    },
    );
  }
}

passModel(_id: any,teacherId: any){
  this.sharedService.updateModelClaas={
    _id:_id,
    teacherId:teacherId
  }
}
  resetModel(){
    this.model={
      teacherId:'',
      name:'',
    }
  }
}
