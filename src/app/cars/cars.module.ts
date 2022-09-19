import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarsComponent } from './cars.component';
import { EffectsModule } from '@ngrx/effects';
import { CarsEffects } from '../shared/effects/cars.effects';
import { StoreModule } from '@ngrx/store';
import { carsReducer } from '../shared/reducers/car.reducer';

@NgModule({
  declarations: [CarsComponent],
  imports: [
    CommonModule,
    EffectsModule.forRoot([CarsEffects]),
  ],
  exports: [CarsComponent],
})
export class CarsModule {}
