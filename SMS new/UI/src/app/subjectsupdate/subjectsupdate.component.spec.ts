import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectsupdateComponent } from './subjectsupdate.component';

describe('SubjectsupdateComponent', () => {
  let component: SubjectsupdateComponent;
  let fixture: ComponentFixture<SubjectsupdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubjectsupdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubjectsupdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
