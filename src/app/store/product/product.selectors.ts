import { createFeatureSelector, createSelector } from "@ngrx/store";
import { IProductState } from "./product.model";

export const selectProductState = createFeatureSelector<IProductState>('product');
export const selectProductList = createSelector(selectProductState, (state) => state.products);
export const selectProductIsLoading = createSelector(selectProductState, (state) => state.isLoading);

export const selectProductById = (productId: number) => createSelector(selectProductState, (state) => state.products.find(product => product.id == productId));