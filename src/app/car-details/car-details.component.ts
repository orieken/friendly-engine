import { Component, Input, OnInit } from '@angular/core';
import { Car } from '../models/car';

@Component({
  selector: 'app-car-details',
  templateUrl: './car-details.component.html',
  styleUrls: ['./car-details.component.css']
})
export class CarDetailsComponent implements OnInit {
  @Input('carDetails') carDetails: Car;

  constructor() {}
  ngOnInit() {}

}
