import { Component, OnInit } from '@angular/core';
import { Car } from '../models/car';
import { CarsService } from '../services/cars.service';

@Component({
  selector: 'app-track-times',
  templateUrl: './track-times.component.html',
  styleUrls: ['./track-times.component.css']
})
export class TrackTimesComponent implements OnInit {
  cars: Car[] = [];
  showCarDetails: boolean = false;
  carDetails: Car;

  constructor(private CarsService: CarsService) { }

  ngOnInit(): void {
    this.getCars();
  }

  getCars(): void {
    this.CarsService.get().then(cars => this.cars = cars);
  }

  displayCarDetails(carDetails: any) {
    if(this.showCarDetails && this.carDetails != carDetails) {
      this.showCarDetails = !this.showCarDetails;
    }
    this.carDetails = carDetails;
    this.showCarDetails = !this.showCarDetails;
  }
}
