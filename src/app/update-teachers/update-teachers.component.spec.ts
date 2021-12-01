import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateTeachersComponent } from './update-teachers.component';

describe('UpdateTeachersComponent', () => {
  let component: UpdateTeachersComponent;
  let fixture: ComponentFixture<UpdateTeachersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateTeachersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateTeachersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
