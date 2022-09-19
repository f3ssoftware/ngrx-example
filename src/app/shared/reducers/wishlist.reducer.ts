import { createReducer, on } from '@ngrx/store';
import { add, remove } from '../actions/wishlist.actions';

export const initialState = {
  wishlist: []
};

export const wishlistReducer = createReducer(
  initialState,
  on(add, (state: any, action: any) => {
    return { ...state, wishlist: state.wishlist.concat(action.item)};
  }),
  on(remove, (state: any, action: any) => {
    const array = [...state.wishlist];
    array.splice(array.indexOf(action.item),1);
    return { ...state, wishlist:  array};
  })
);
