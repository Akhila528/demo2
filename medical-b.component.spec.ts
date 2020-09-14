import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicalBComponent } from './medical-b.component';

describe('MedicalBComponent', () => {
  let component: MedicalBComponent;
  let fixture: ComponentFixture<MedicalBComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedicalBComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicalBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
