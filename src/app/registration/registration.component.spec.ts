import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationComponent } from './registration.component';
import { RouterTestingModule } from '@angular/router/testing';
import { MaterialModule } from '@angular/material';

describe('RegistrationComponent', () => {
  let component: RegistrationComponent;
  let fixture: ComponentFixture<RegistrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistrationComponent ],
      imports: [
        MaterialModule,
        RouterTestingModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
