import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HospitalBComponent } from './hospital-b.component';

describe('HospitalBComponent', () => {
  let component: HospitalBComponent;
  let fixture: ComponentFixture<HospitalBComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HospitalBComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HospitalBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
