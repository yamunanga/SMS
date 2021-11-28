import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamresultsupdateComponent } from './examresultsupdate.component';

describe('ExamresultsupdateComponent', () => {
  let component: ExamresultsupdateComponent;
  let fixture: ComponentFixture<ExamresultsupdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExamresultsupdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExamresultsupdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
