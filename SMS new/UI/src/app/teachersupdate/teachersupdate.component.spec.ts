import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeachersupdateComponent } from './teachersupdate.component';

describe('TeachersupdateComponent', () => {
  let component: TeachersupdateComponent;
  let fixture: ComponentFixture<TeachersupdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeachersupdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeachersupdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
