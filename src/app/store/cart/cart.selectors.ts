import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ICartState } from './cart.model';

export const selectCartState = createFeatureSelector<ICartState>('cart');
export const selectCartList = createSelector(selectCartState, (state) => state.cart);
export const selectCartLoading = createSelector(selectCartState, (state) => state.isLoading);