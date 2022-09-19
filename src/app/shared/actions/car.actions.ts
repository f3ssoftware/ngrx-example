import { createAction } from '@ngrx/store';

export const loadCars = createAction(
  '[Cars Component] Load Cars',
  (brand: any) => {
    return {
      brand,
    };
  }
);

export const setCars = createAction('[Cars Component] Set Cars', (cars) => {
  return { cars };
});
