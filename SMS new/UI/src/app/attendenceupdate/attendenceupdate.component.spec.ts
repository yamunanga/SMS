import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttendenceupdateComponent } from './attendenceupdate.component';

describe('AttendenceupdateComponent', () => {
  let component: AttendenceupdateComponent;
  let fixture: ComponentFixture<AttendenceupdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AttendenceupdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AttendenceupdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
