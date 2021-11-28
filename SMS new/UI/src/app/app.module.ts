import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { TeachersComponent } from './teachers/teachers.component';
import { StudentsComponent } from './students/students.component';
import { ClassesComponent } from './classes/classes.component';
import { ExamresultsComponent } from './examresults/examresults.component';
import { AttendenceComponent } from './attendence/attendence.component';
import { SubjectsComponent } from './subjects/subjects.component';
import { TeachersupdateComponent } from './teachersupdate/teachersupdate.component';
import { StudentsupdateComponent } from './studentsupdate/studentsupdate.component';
import { ClassesupdateComponent } from './classesupdate/classesupdate.component';
import { ExamresultsupdateComponent } from './examresultsupdate/examresultsupdate.component';
import { AttendenceupdateComponent } from './attendenceupdate/attendenceupdate.component';
import { SubjectsupdateComponent } from './subjectsupdate/subjectsupdate.component';
import { DataService } from './Services/data.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TeachersComponent,
    StudentsComponent,
    ClassesComponent,
    ExamresultsComponent,
    AttendenceComponent,
    SubjectsComponent,
    TeachersupdateComponent,
    StudentsupdateComponent,
    ClassesupdateComponent,
    ExamresultsupdateComponent,
    AttendenceupdateComponent,
    SubjectsupdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
