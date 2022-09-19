import { Action, createReducer, on } from '@ngrx/store';
import { loadCars, setCars } from '../actions/car.actions';

export const initialState = {
    cars: []
};

export const carsReducer = createReducer(
  initialState,
  on(loadCars, (state: any, action: any) => {
    return { ...state };
  }),
  on(setCars, (state: any, action) => {
    return { ...state, cars: state.cars.concat(action.cars)}
  })
);
