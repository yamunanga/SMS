import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedService } from './service/shared.service';
import { TeacherComponent } from './teacher/teacher.component';
import { UpdateTeachersComponent } from './update-teachers/update-teachers.component';
import { ClasesComponent } from './clases/clases.component';
import { UpdateClassComponent } from './update-class/update-class.component';
import { StudentsComponent } from './students/students.component';
import { UpdateStudentComponent } from './update-student/update-student.component';
import { SubjectsComponent } from './subjects/subjects.component';
import { UpdateSubjectComponent } from './update-subject/update-subject.component';
import { AttendanceComponent } from './attendance/attendance.component';
import { UpdateAttendanceComponent } from './update-attendance/update-attendance.component';
import { ResultComponent } from './result/result.component';
import { UpdateResultComponent } from './update-result/update-result.component';

@NgModule({
  declarations: [
    AppComponent,
    TeacherComponent,
    UpdateTeachersComponent,
    ClasesComponent,
    UpdateClassComponent,
    StudentsComponent,
    UpdateStudentComponent,
    SubjectsComponent,
    UpdateSubjectComponent,
    AttendanceComponent,
    UpdateAttendanceComponent,
    ResultComponent,
    UpdateResultComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(),
    HttpClientModule,
  ],
  providers:[SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
