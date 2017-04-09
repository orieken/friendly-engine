import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MaterialModule } from '@angular/material';

import { ExamplesComponent } from './examples/examples.component';
import { Routes, RouterModule } from '@angular/router';
import { RegistrationComponent } from './registration/registration.component';
import { AdvancedRegistrationComponent } from './advanced-registration/advanced-registration.component';
import { TrackTimesComponent } from './track-times/track-times.component';
import { CarsService } from './services/cars.service';

import 'hammerjs';
import { CarDetailsComponent } from './car-details/car-details.component';

const appRoutes: Routes = [
  { path: 'examples', component: ExamplesComponent },
  { path: 'registration', component: RegistrationComponent },
  { path: 'track-times', component: TrackTimesComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    ExamplesComponent,
    RegistrationComponent,
    AdvancedRegistrationComponent,
    TrackTimesComponent,
    CarDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    CarsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
