import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { catchError, map, mergeMap, of } from 'rxjs';
import { CarsService } from '../services/cars.service';
import { loadCars, setCars } from '../actions/car.actions';
import { CarsDTO } from '../dtos/CarsDTO';
import { ModelosDTO } from '../dtos/ModelosDTO';

@Injectable()
export class CarsEffects {
  constructor(
    private actions$: Actions,
    private carsService: CarsService,
    private store: Store<{ cars: any }>
  ) {}
  loadCars$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(loadCars),
      mergeMap(() => {
        return this.carsService.getCars(7).pipe(
          map((cars) => {
            this.store.dispatch(
              setCars(
                cars.modelos.map((c: any) => {
                  return {
                    name: c.nome,
                    code: c.codigo,
                  };
                })
              )
            );
            return {
              type: '[Cars API] Cars Loaded Success',
              cars: cars.modelos.map((c: ModelosDTO) => {
                return {
                  name: c.nome,
                  code: c.codigo,
                };
              }),
            };
          }),
          catchError(() => of({ type: '[Cars API] Cars Loaded Error' }))
        );
      })
    );
  });
}
