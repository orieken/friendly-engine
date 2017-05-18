import { async, ComponentFixture, TestBed, tick, fakeAsync } from '@angular/core/testing';

import { TrackTimesComponent } from './track-times.component';
import { CARS } from '../services/mock-cars';
import { CarsService } from '../services/cars.service';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { MaterialModule } from '@angular/material';
import { CarDetailsComponent } from '../car-details/car-details.component';

describe('TrackTimesComponent', () => {
  let component: TrackTimesComponent;
  let fixture: ComponentFixture<TrackTimesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        TrackTimesComponent,
        CarDetailsComponent
      ],
      providers: [
        CarsService
      ],
      imports: [
        MaterialModule,
        RouterTestingModule,
        FormsModule
      ]
    })
        .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrackTimesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('populates cars ngOnInit()', fakeAsync(() => {
    expect(component.cars).toEqual([]);
    component.ngOnInit();
    tick();
    fixture.detectChanges();
    expect(component.cars).toEqual(CARS);
  }));
});
