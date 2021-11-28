import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassesupdateComponent } from './classesupdate.component';

describe('ClassesupdateComponent', () => {
  let component: ClassesupdateComponent;
  let fixture: ComponentFixture<ClassesupdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClassesupdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassesupdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
