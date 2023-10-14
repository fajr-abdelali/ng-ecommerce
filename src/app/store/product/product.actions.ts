import { createAction, props } from "@ngrx/store";
import IProduct from "src/app/interfaces/product.interface";

const prefix = '[Products]';

export const getProducts = createAction(`${prefix} Get Products`);
export const getProductsSuccess = createAction(`${getProducts.type} Success`, props<{ products: IProduct[]; }>());

