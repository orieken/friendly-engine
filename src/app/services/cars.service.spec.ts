import { TestBed, inject } from '@angular/core/testing';

import { CarsService } from './cars.service';
import { CARS } from './mock-cars';
import { Car } from '../models/car';

describe('CarsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CarsService]
    });
  });

  it('.get() should return a list of cars', inject([CarsService], (service: CarsService) => {
    let cars: Car[];
      service.get().then(Cars => {
        cars = Cars;
        expect(cars).toEqual(CARS);
      });
  }));
});
