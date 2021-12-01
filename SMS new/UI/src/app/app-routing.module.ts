import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

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
import { ResultComponent} from './result/result.component';
import { UpdateResultComponent } from './update-result/update-result.component';

const routes: Routes = [
  { 
    path: 'teachers', component:TeacherComponent
  },
  { 
    path: 'updateteacher', component:UpdateTeachersComponent
  },
  { 
    path: 'clases', component:ClasesComponent
  },
  { 
    path: 'updateclass', component:UpdateClassComponent
  },
  { 
    path: 'students', component:StudentsComponent
  },
  { 
    path: 'updatestudent', component:UpdateStudentComponent
  },
  { 
    path: 'subjects', component:SubjectsComponent
  },
  { 
    path: 'updatesubject', component:UpdateSubjectComponent
  },
  { 
    path: 'attendance', component:AttendanceComponent
  },
  { 
    path: 'updateattendance', component:UpdateAttendanceComponent
  },
  { 
    path: 'result', component:ResultComponent
  },
  { 
    path: 'updateresult', component:UpdateResultComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  
}
