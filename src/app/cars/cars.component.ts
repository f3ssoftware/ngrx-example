import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { add } from '../shared/actions/wishlist.actions';
import { loadCars } from '../shared/actions/car.actions';
import { BrandsEnum } from '../shared/brands.enum';
import { Car } from '../shared/dtos/Car';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.scss'],
})
export class CarsComponent implements OnInit {
  constructor(
    private store: Store<{ cars: Car[] }>
  ) {}

  cars: Car[] = [];

  cars$: Observable<any> = this.store.select('cars');

  ngOnInit() {
    this.store.dispatch(loadCars(BrandsEnum.BWM));
    this.cars$.subscribe((store) => {
      this.cars = [...store.cars];
    });
  }

  add(car: Car) {
    this.cars.splice(this.cars.indexOf(car), 1);
    this.store.dispatch(add(car));
  }
}
