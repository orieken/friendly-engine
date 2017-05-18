import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarDetailsComponent } from './car-details.component';
import { MaterialModule } from '@angular/material';
import { CARS } from '../services/mock-cars';
import { Component } from '@angular/core';
import { Car } from '../models/car';

describe('Component: CarDetails', () => {
  let component: TestCarComponent;
  let fixture: ComponentFixture<TestCarComponent>;


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        CarDetailsComponent,
        TestCarComponent
      ],
      imports: [
        MaterialModule,
      ],
      providers: []
    })
        .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestCarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('has no car details', () => {
    expect(component.carDetails).not.toBeDefined();
  });

  it('accepts a car input', () => {
    fixture.detectChanges();
    let car = CARS[0];
    let compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('md-card-title').textContent).toContain(car.make);
    expect(compiled.querySelector('md-card-subtitle').textContent).toContain(car.model);
  })
});

@Component({
  template: `<app-car-details [carDetails]="car"></app-car-details>`
})
class TestCarComponent {
  car: Car = CARS[0]
}
