import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvancedRegistrationComponent } from './advanced-registration.component';
import { MaterialModule } from '@angular/material';

describe('AdvancedRegistrationComponent', () => {
  let component: AdvancedRegistrationComponent;
  let fixture: ComponentFixture<AdvancedRegistrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdvancedRegistrationComponent ],
      imports: [
        MaterialModule
        ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvancedRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
