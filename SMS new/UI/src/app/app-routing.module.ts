import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AttendenceComponent } from './attendence/attendence.component';
import { AttendenceupdateComponent } from './attendenceupdate/attendenceupdate.component';
import { ClassesComponent } from './classes/classes.component';
import { ClassesupdateComponent } from './classesupdate/classesupdate.component';
import { ExamresultsComponent } from './examresults/examresults.component';
import { ExamresultsupdateComponent } from './examresultsupdate/examresultsupdate.component';
import { HomeComponent } from './home/home.component';
import { StudentsComponent } from './students/students.component';
import { StudentsupdateComponent } from './studentsupdate/studentsupdate.component';
import { SubjectsComponent } from './subjects/subjects.component';
import { SubjectsupdateComponent } from './subjectsupdate/subjectsupdate.component';
import { TeachersComponent } from './teachers/teachers.component';
import { TeachersupdateComponent } from './teachersupdate/teachersupdate.component';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'teachers',component:TeachersComponent},
  {path:'students',component:StudentsComponent},
  {path:'classes',component:ClassesComponent},
  {path:'examresults',component:ExamresultsComponent},
  {path:'attendence',component:AttendenceComponent},
  {path:'subjects',component:SubjectsComponent},
  {path:'teachersupdate',component:TeachersupdateComponent},
  {path:'studentsupdate',component:StudentsupdateComponent},
  {path:'classesupdate',component:ClassesupdateComponent},
  {path:'examresultsupdate',component:ExamresultsupdateComponent},
  {path:'attendenceupdate',component:AttendenceupdateComponent},
  {path:'subjectsupdate',component:SubjectsupdateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
