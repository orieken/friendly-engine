import { Injectable } from '@angular/core';
import { Car } from '../models/car';
import { CARS } from './mock-cars';

@Injectable()
export class CarsService {

  constructor() { }

  get(): Promise<Car[]> {
    return Promise.resolve(CARS);
  }

}

