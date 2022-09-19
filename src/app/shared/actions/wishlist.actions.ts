import { createAction } from '@ngrx/store';

export const add = createAction('[Wishlist Component] Add', (item: any) => ({
  item,
}));
export const remove = createAction('[Wishlist Component] Remove', (item: any) => ({
  item,
}));
